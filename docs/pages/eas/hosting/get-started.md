---
sidebar_title: Get started with EAS Hosting
title: Deploy your first Expo Router and React app
description: Learn how to deploy your Expo Router and React apps to EAS Hosting.
hasVideoLink: true
searchRank: 9
---

* goal
  * create your FIRST web deployment

* [video: how to deploy your Expo Router web project](https://www.youtube.com/watch?v=NaKsfWciJLo)
  * TODO: 

* requirements
  * [Expo account](https://expo.dev/signup)
  * Expo Router web project
  * install [EAS CLI](../cli.md)
  * `eas login`
    * `eas whoami`
      * check if you are logged in

* steps
  * | your app config file's [`expo.web.output`](../../versions/unversioned/config/app.md)  

TODO: 
decide whether to set it to either `single`, `static`, or `server`.

- `single`: Exports your Expo app to a single-page app with only one `index.html` output
- `static`: Exports your Expo app to a [statically generated web app](/router/web/static-rendering/)
- `server`: Supports [server functions](/guides/server-components/#react-server-functions) and [API routes](/router/web/api-routes/) as well as static pages for your app

> Don't worry if you're not sure which output mode you need, you can always change this value later and re-deploy.

</Step>

<Step label="4">
### Export your app

You need to export your web project into a **dist** directory
* To do this, run:

<Terminal
  cmd={{
    npm: ['$ npx expo export --platform web'],
    yarn: ['$ yarn expo export --platform web'],
    pnpm: ['$ pnpm expo export --platform web'],
    bun: ['$ bun expo export --platform web'],
  }}
/>

> Remember to re-run this command every time before deploying.

</Step>

<Step label="5">

### Deploy your app

</Step>

Now publish your website to EAS Hosting:

<Terminal cmd={['$ eas deploy']} />

The first time you run this command, it will:

1. Prompt you to connect an EAS project if you haven't done so yet
2. Ask you to choose a preview subdomain name

> **info** A **preview subdomain name** is a prefix used for the preview URL of your app.
> For example, if you choose `my-app` as your preview subdomain name, your preview URL would look something like this: `https://my-app--or1170q9ix.expo.app/`, and your production URL would be: `https://my-app.expo.app/`.

Once your deployment is complete, the CLI will output a preview URL for where your deployed app is accessible, as well as a link to the deployment details on the EAS Dashboard.
