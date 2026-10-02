---
title: Using in-app purchases
description: Learn about how to use in-app purchases in your Expo app.
hideTOC: true
hasVideoLink: true
---

* goal
  * == libraries + tutorials -- for -- implementing IAP | your Expo app

* In-app purchases (IAP)
  * == transactions | a mobile OR desktop application / users can buy 
    * digital goods
    * additional features
  * requirements
    * ⚠️configuring CUSTOM native code⚠️ ->
      * ❌NOT valid | use Expo Go❌
      * create a [development build](../develop/development-builds/introduction)

## Tutorial

* [video](https://www.youtube.com/watch?v=R3fLKC-2Qh0)

* [Expo in app purchase](https://www.revenuecat.com/blog/engineering/expo-in-app-purchase-tutorial/)
  * TODO: create github repo

## Libraries

TODO: 
The following libraries provide robust support for in-app purchase functionality and out-of-the-box compatibility
with Expo apps using [CNG](/workflow/continuous-native-generation/) and [Config Plugins](/config-plugins/introduction/) for seamless integration in your app.

<BoxLink
  title={
    <>
      <CODE>react-native-purchases</CODE>
    </>
  }
  description="An open-source framework that provides a wrapper around Google Play Billing and StoreKit APIs, and integration with RevenueCat services supporting in-app purchases
* It enables product management, analytics, and simplified workflows for in-app purchase requirements that may extend beyond your client code, such as validating purchases on an app's backend."
  href="https://github.com/RevenueCat/react-native-purchases"
  Icon={GithubIcon}
/>

* [expo-iap](https://github.com/hyodotdev/openiap/tree/main/libraries/expo-iap)
  * == React Native library -- for -- in-app purchases /
    * conforms to the OpenIAP specification 
    * works with development builds
