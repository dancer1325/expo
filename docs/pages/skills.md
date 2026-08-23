---
title: Expo Skills for AI agents
sidebar_title: Expo Skills
description: A list of official AI agent skills provided by Expo for building, deploying, and debugging Expo and React Native apps.
---

* [Expo Skills](https://github.com/expo/skills) 
  * == structured instruction files /
    * teach AI agents (Claude Code, Cursor, Codex, other), about Expo & React Native apps,
      * how to 
        * build
        * deploy
        * debug

## how to install?

### | Claude Code

```bash
$ /plugin install expo@claude-plugins-official
```

### | Codex

* ways
  * `$ codex plugin add expo@openai-curated`, OR
  * | Codex,
    * \> "/plugins" > `openai-curated` marketplace > install `expo` 

### | Cursor

* if you have 
  * ALREADY installed Expo Skills -- for -- Claude Code, Codex, OR ANOTHER agent & Cursor vX.Y -> imported AUTOMATICALLY
    * "Settings" > "Rules, Skills, Subagents" > check "Skills" list
    * requirements
      * ⚠️**Include third-party Plugins, Skills, and other configs** is enabled⚠️
  * NOT YET installed Expo Skills -> run -- via -- [skills CLI](https://skills.sh/docs/cli)

      ```bash
      $ npx skills add expo/skills
      ---
      $ yarn dlx skills add expo/skills
      ---
      $ pnpm dlx skills add expo/skills
      ---
      $ bunx skills add expo/skills
      ```

* Skills 
  * ❌| `/`, are NOT shown❌
    * Reason:🧠they work -- via -- auto-discovery / you ask the agent Expo-related questions🧠

### | OTHER agents

* -- via -- [skills CLI](https://skills.sh/docs/cli)

  ```bash
  $ npx skills add expo/skills
  ---
  $ yarn dlx skills add expo/skills
  ---
  $ pnpm dlx skills add expo/skills
  ---
  $ bunx skills add expo/skills
  ```

## Available Expo Skills

* -- through -- `expo` plugin

* [AVAILABLE ones](https://github.com/expo/skills/tree/main/plugins/expo/skills)

## Example prompts

TODO: 
Try the following prompts after installing Expo Skills
* Your AI agent will automatically use the appropriate skill:

| Example prompt                                         | Skill used                |
| ------------------------------------------------------ | ------------------------- |
| Build a settings screen with a form and navigation     | `building-native-ui`      |
| Set up Tailwind CSS in my Expo project                 | `expo-tailwind-setup`     |
| Embed a recharts chart in my native app using web code | `use-dom`                 |
| Add a SwiftUI picker component to my Expo app          | `expo-ui-swift-ui`        |
| Use Material Design 3 components with Jetpack Compose  | `expo-ui-jetpack-compose` |
| How do I deploy my Expo app to the Apple App Store?    | `expo-deployment`         |
| Create a CI/CD workflow that builds on every PR        | `expo-cicd-workflows`     |
| Upgrade my project to the latest Expo SDK              | `upgrading-expo`          |
