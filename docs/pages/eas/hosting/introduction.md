---
title: Introduction to EAS Hosting
sidebar_title: Introduction
description: EAS Hosting is a service for quickly deploying web projects built using the Expo Router library and React Native web.
searchRank: 10
---

* **EAS Hosting** 
  * == EAS' service /
    * allows
      * quickly deploying your 
        * web projects | web / 
          * built -- via -- [Expo Router](../../router/introduction.md) & React Native web
        * API routes + server functions + server-side assets
          * Reason:🧠seamlessly integrated -- with the -- Expo CLI🧠

## Quick start

* requirements
  * [install EAS CLI](../../eas/cli.md#installation)
  * create a static build of your web project -- TODO: link --
  * export your web project | dist/ 

    ```
    npx expo export --platform web
    
    yarn expo export --platform web
    
    pnpm expo export --platform web
    
    bun expo export --platform web
    ```

* steps
  * `eas deploy`
    * 's output: preview URL -- to -- access your deployed web app

## Why EAS Hosting

* traditional website hosting services
  * Historically
    * recommended -- for -- deploying Expo Router & React apps
  * ⚠️key limitations⚠️
    * **Version synchronization**
      * During the app store publishing process, you may need to deploy new versions of your servers.
    * **Request routing complexity**
      * Different versions of your native app may require routing to specific server versions
      * This can create additional complexity when handling requests.
    * **Platform-specific analysis**: When running native apps, you need enhanced observability for platform-specific metrics.

EAS Hosting addresses these limitations by providing a unified deployment experience across all platforms.

## use cases

| Scenario                                                                                                                                                | Recommendation |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- |----------------|
| Deploy a web build without setting up a separate hosting provider                                                                                       | ✅              |
| Use API routes or server functions in your Expo Router app                                                                                              | ✅              |
| Maintain consistent deployment workflows across Android, iOS, and web                                                                                   | ✅              |
| Automate deployments using [EAS Workflows](/eas/hosting/workflows/)                                                                                     | ✅              |
| Built-in monitoring for server-side code crashes, logs, and requests                                                                                    | ✅              |
| Mobile-only project with no web component                                                                                                               | ❌              |
| Full Node.js runtime compatibility (EAS Hosting uses [Cloudflare Workers runtime](/eas/hosting/reference/worker-runtime/) with partial Node.js support) | ❌              |
| Already have established web infrastructure that meets your needs                                                                                       | ❌              |

## Frequently asked questions (FAQ)

### What web output modes can I use with EAS Hosting?

EAS Hosting supports all three output modes configured in your app config's `expo.web.output`:

- `single`: Exports your Expo app to a single-page app with only one **index.html** output
- `static`: Exports your Expo app to a [statically generated web app](/router/web/static-rendering/)
- `server`: Supports [server functions](/guides/server-components/#react-server-functions) and [API routes](/router/web/api-routes/) as well as static pages

### Can I use API routes with EAS Hosting?

EAS Hosting fully supports [API routes](/router/web/api-routes/) (files ending with **+api.ts**) when using the `server` output mode
* You can monitor crashes, logs, and requests from your API routes in the [EAS dashboard](/eas/hosting/api-routes/).

### What runtime does EAS Hosting use?

* EAS Hosting
  * 💡is built | [Cloudflare Workers](https://developers.cloudflare.com/workers/)💡
    * == runs | V8 JS engine 
      * ❌!=FULL Node.js processes❌
      * [Node.js compatible modules](reference/worker-runtime.md)

### Can I set up a custom domain for my production deployment?

[Custom domains](/eas/hosting/custom-domain/) are available on paid plans
* Each project can have one custom domain assigned to the production deployment
* Both apex domains and subdomains are supported.

### How can I create deployment aliases?

EAS Hosting deployments are immutable
* Each deployment gets a unique preview URL
* You can create [aliases](/eas/hosting/deployments-and-aliases/) to assign custom names to deployments (such as `staging` or `production`)
* Since deployments are immutable, you can instantly roll back by reassigning an alias to a previous deployment ID using `eas deploy:alias --prod --id=<deploymentId>`.

### What monitoring capabilities are available in EAS Hosting?

EAS Hosting provides built-in monitoring in the [EAS dashboard](/eas/hosting/api-routes/):

- **Crashes**: View uncaught errors from API routes, grouped by similarity
- **Logs**: All `console.log`, `console.info`, and `console.error` output from API routes
- **Requests**: Request metadata including status, browser, region, and duration

### How can I configure caching in EAS Hosting?

API routes can return `Cache-Control` directives that EAS Hosting uses to cache responses on its global CDN (Content Delivery Network)
* Static assets are cached with a default browser cache time of 3600 seconds
* See the [Caching](/eas/hosting/reference/caching/) reference for details.

### Can I use EAS Hosting with EAS Workflows?

EAS Hosting integrates with [EAS Workflows](/eas/workflows/get-started/) using the `deploy` job type
* You can add a deploy job to your workflow configuration
* For example:

```yaml
jobs:
  deploy_web:
    type: deploy
    environment: production
    params:
      prod: true
```

You can also deploy to a specific alias or make production conditional based on the branch:

```yaml
jobs:
  deploy:
    type: deploy
    params:
      prod: ${{ github.ref_name == 'main' }}
```

For more information, see the [Web deployments with EAS Workflows](/eas/hosting/workflows/).

## Get started

<BoxLink
  title="Create your first deployment"
  description="From a new app to a deployed website in under a minute."
  href="/eas/hosting/get-started"
  Icon={Cloud01Icon}
/>

<BoxLink
  title="Assign deployment aliases"
  description="Create aliases and promote deployments to production."
  href="/eas/hosting/deployments-and-aliases"
  Icon={Cloud01Icon}
/>

<BoxLink
  title="Configure environment variables"
  description="Use environment variables in your web and server code."
  href="/eas/environment-variables/usage/#using-environment-variables-with-eas-hosting"
  Icon={Cloud01Icon}
/>

<BoxLink
  title="Custom domain"
  description="Set up a custom domain for your production deployment."
  href="/eas/hosting/custom-domain"
  Icon={Cloud01Icon}
/>

<BoxLink
  title="API Routes"
  description="Inspect requests from API routes on the EAS Hosting dashboard."
  href="/eas/hosting/api-routes"
  Icon={Cloud01Icon}
/>

<BoxLink
  title="Deploy with EAS Workflows"
  description="Automate deployments with EAS Workflows."
  href="/eas/hosting/workflows"
  Icon={Cloud01Icon}
/>
