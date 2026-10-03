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

* [react-native-purchases](https://github.com/RevenueCat/react-native-purchases)
  * == framework /
    * open-source
    * integrated -- with -- RevenueCat services
    * provide
      * built-in in-app purchase workflows
      * analytics
    * enable
      * product management
  * == wrapper around 
    * Google Play Billing
    * StoreKit APIs
  * how to configure | your Expo app?
    * -- via -- [CNG](../workflow/continuous-native-generation)
    * -- via -- [Config Plugins](../config-plugins/introduction)

* [expo-iap](https://github.com/hyodotdev/openiap/tree/main/libraries/expo-iap)
  * == React Native library -- for -- in-app purchases /
    * conforms to the OpenIAP specification 
    * works with development builds
  * how to configure | your Expo app?
    * -- via -- [CNG](../workflow/continuous-native-generation)
    * -- via -- [Config Plugins](../config-plugins/introduction)
