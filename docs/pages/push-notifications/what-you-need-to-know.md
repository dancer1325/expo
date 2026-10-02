---
title: What you need to know about notifications
sidebar_title: About notification types
description: Learn about notification types and their behavior before you get started.
---

* goal
  * notifications
  * [notification typeS](#notification-types)
  * push notifications

* notifications 
  * == alerts / 
    * inform users of NEW information or events
      * EVEN when the app is NOT actively in use
      * ❌notifications | iOS != notifications | Android❌

* Expo's notification
  * built | [native (Android & iOS) functionality](#external-references)
  * ⚠️requirements⚠️
    * use a [development build](../develop/development-builds/introduction)
      * Reason:🧠the capability is NOT built | Expo Go🧠

## notification types

1. **Push Notifications OR Remote notifications**
   * == notifications / are sent
     * FROM a remote server -- to -- a user's device 
2. **Local Notifications OR in-app notifications OR scheduled notifications**
   * == notifications / 
     * WITHIN the app,
       * are created
       * are displayed 
   * Reason of name scheduled notifications: 🧠MANY of the APIs / create these notifications, are created | a particular time🧠
   * [MORE](../versions/unversioned/sdk/notifications.md#present-a-local-in-app-notification-to-the-user)

## Push Notification delivery

* push notification behavior | arrives | your app,
  * -- depends on -- 
    * [app's state](#application-states)
    * type of notification

### Application states

* **Foreground**
  * == app is ACTIVELY running | foreground
    * == app's UI is CURRENTLY being displayed | the screen
* **Background**
  * == app is running | background / "minimized"
    * == app's UI is NOT CURRENTLY being displayed | the screen
* **Terminated**
  * == app was "killed"
    * _Example:_ swipe-away gesture | the app switcher
  * | Android,
    * ⚠️if the user force-stops the app | device settings & you want to re-enable the notifications -> you MUST MANUALLY reopen the notifications⚠️

### Push Notification behaviors

* if the app is | the foreground -> the app is in control of how an incoming notification (INDEPENDENTLY of the kind of notification) is handled
  * TODO: The app may present it directly, show some custom in-app UI, or even ignore it (this is controlled by [`NotificationHandler`](/versions/latest/sdk/notifications/#setnotificationhandlerhandler))

* if the app is NOT | the foreground -> the app's behavior -- depends on -- notification type

The table below summarizes what happens when a push notification is delivered to the device:

| Notification Type                                                                                                                                                                                                       | App \| Foreground                                                                                                                                                                                        | App \| Background                                                                      | App Terminated                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------| -------------------------------------------------------------------------------------- |
| [Notification Message](/push-notifications/what-you-need-to-know/#notification-message) and [Notification Message with data payload](/push-notifications/what-you-need-to-know/#notification-message-with-data-payload) | delivery runs [`NotificationReceivedListener`](/versions/latest/sdk/notifications/#addnotificationreceivedlistenerlistener) and [JS task](/versions/latest/sdk/notifications/#registertaskasynctaskname) | OS shows notification                                                                  | OS shows notification                                                                  |
| [Headless Background Notification](/push-notifications/what-you-need-to-know/#headless-background-notifications)                                                                                                        | delivery runs [`NotificationReceivedListener`](/versions/latest/sdk/notifications/#addnotificationreceivedlistenerlistener) and [JS task](/versions/latest/sdk/notifications/#registertaskasynctaskname) | delivery runs [JS task](/versions/latest/sdk/notifications/#registertaskasynctaskname) | delivery runs [JS task](/versions/latest/sdk/notifications/#registertaskasynctaskname) |

For the cases when the user interacts with the notification (for example, by pressing an action button), the following handlers are made available to you.

| App state  | iOS Listener(s) triggered              | Android Listener(s) triggered                                                                                       |
| ---------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Foreground | `NotificationResponseReceivedListener` | `NotificationResponseReceivedListener`                                                                              |
| Background | `NotificationResponseReceivedListener` | `NotificationResponseReceivedListener` and [JS task](/versions/latest/sdk/notifications/#registertaskasynctaskname) |
| Terminated | `NotificationResponseReceivedListener` | [JS task](/versions/latest/sdk/notifications/#registertaskasynctaskname)                                            |

In the table above, whenever `NotificationResponseReceivedListener` is triggered, the `useLastNotificationResponse` return value also changes.

> **info** When the app is not running or has been killed and is launched by tapping a notification, register `NotificationResponseReceivedListener` as early as possible (at module top-level) on iOS
* To handle the initial notification response after the app starts, we recommend also checking `useLastNotificationResponse` or `getLastNotificationResponse` during startup rather than relying on the listener alone
* This is also the recommended approach for action buttons that bring the app to the foreground.

## Push Notification types

### Notification Message

A Notification Message is a notification that specifies presentational information, such as a title or body text.

- On Android, this corresponds to a push notification request that contains [`AndroidNotification`](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#AndroidNotification)
- On iOS, this corresponds to a push notification request that contains [`aps.alert` dictionary](https://developer.apple.com/documentation/usernotifications/generating-a-remote-notification#Create-the-JSON-payload) and the `apns-push-type` header set to `alert`.

When you use the Expo Push Service, and specify `title`, `subtitle`, `body`, `icon`, or `channelId`, the resulting push notification request is a Notification Message.

[//]: # 'TODO vonovak clarify what fields make a notification to be considered a Notification Message'

The typical use case for a Notification Message is to have it presented to the user immediately without any extra processing being done.

### Notification Message with data payload

This is an Android-only term ([see the official docs](https://firebase.google.com/docs/cloud-messaging/customize-messages/set-message-type#data-messages)) where a push notification request contains both `data` field and a `notification` field.

On iOS, extra data may be part of a regular Notification Message request
* Apple doesn't distinguish between Notification Message which does and does not carry data.

### Headless Background Notifications

Headless Notification is a remote notification that doesn't directly specify presentational information such as the title or body text
* With the exception below\*, headless notifications are not presented to users
* Instead, they carry data (JSON) which is processed by a JavaScript task defined in your app via [`registerTaskAsync`](/versions/latest/sdk/notifications/#registertaskasynctaskname)
* The task may perform arbitrary logic
* For example, write to `AsyncStorage`, make an api request, or present a local notification whose content is taken from the push notification's data.

> **info** We use the term "Headless Background Notification" to refer to the [Data Message](https://firebase.google.com/docs/cloud-messaging/customize-messages/set-message-type#data-messages) on Android and the [background notification](https://developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app#Create-a-background-notification) on iOS
* Their key similarities are that both of these notification types allow sending only JSON data, and background processing by the app.

Headless Background Notifications have the ability to run custom JavaScript in response to a notification _even when the app is terminated_
* This is powerful but comes with a limitation: even when the notification is delivered to the device, the OS does not guarantee its delivery to your app. This may happen due to a variety of reasons, such as when [Doze mode](https://developer.android.com/training/monitoring-device-state/doze-standby) is enabled on Android, or when you send too many background notifications — Apple recommends not to [send more than two or three per hour](https://developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app#overview).

When you use the Expo Push Service, and specify only `data` and `_contentAvailable: true` (and other non-interactive fields such as `ttl`), the resulting push notification request produces a Headless Background Notification.

[//]: # 'TODO vonovak clarify how setting priority behaves here, because apns-priority field should be 5 on iOS but can be specified on Android'

> To use Headless Background Notifications on iOS, you have to [configure](/versions/latest/sdk/notifications/#background-notification-configuration) them first.

The rule of thumb is to prefer a regular Notification Message if you don't require running JavaScript in the background.

\* The exception is when you specify `title` or `message` inside of [`data`](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#AndroidConfig). In that case, `expo-notifications` package automatically presents the headless notification on Android, but not on iOS. We plan to make this behavior more consistent across platforms in a future release.

### Data-only notifications

Android has a concept of [Data Messages](https://firebase.google.com/docs/cloud-messaging/customize-messages/set-message-type#data-messages). iOS does not have exactly the same concept, but a close equivalent is [Headless Background Notifications](#headless-background-notifications).

You may also come across the term "silent notification", which is yet another name for notifications that don't present anything to the user — we describe these as [Headless Background Notifications](#headless-background-notifications).

## External references

This is a non-exhaustive list of official resources for push notifications on Android and iOS:

- [Android - Firebase Cloud Messaging message types](https://firebase.google.com/docs/cloud-messaging/customize-messages/set-message-type)
- [iOS - Generating a remote notification](https://developer.apple.com/documentation/usernotifications/generating-a-remote-notification)
- [iOS - Pushing background updates to your app](https://developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app)
