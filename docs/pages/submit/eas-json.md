---
title: Configure EAS Submit with eas.json
sidebar_title: Configure with eas.json
description: Learn how to configure your project for EAS Submit with eas.json.
---

* ["eas.json"](../eas/json.md)
  * recommendation
    * 👀if you use EAS Submit -> use it👀
      * ❌ALTHOUGH, it's NOT MANDATORY❌
      * Reason:🧠if you need to switch BETWEEN DIFFERENT configurations -> it makes your life easier🧠

## Production profile

* if `production` profile is ALREADY defined | "eas.json" & you run `eas submit` WITHOUT specifying a profile -> use the `production` profile

## Multiple profiles

* | "eas.json",
  * `.submit` can contain >1 submit profiles

* submission profile
  * by default, use the submission profile / 's name == build profile's name
    * if the build profile does NOT exist -- as -- submit profile -> selects the default `production` profile
  * if you want to specify the submit profile -> `eas submit ... --profile <submit-profile-name>`

## submit profile1 can share configuration -- with -- submit profile2 

* -- through -- `extends` key
