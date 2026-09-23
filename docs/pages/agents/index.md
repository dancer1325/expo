---
title: AI agents and Expo overview
sidebar_title: Overview
description: Build and publish Expo and React Native apps with AI coding agents such as Claude Code, Codex, and Cursor.
---

## How Expo supports AI agents

* Expo-specific context
  * [Expo Skills](https://github.com/expo/skills)
    * [introduction](../skills.md)
  * [Expo MCP Server](https://github.com/expo/expo-mcp)
    * [introduction](../mcp.md)
  * Project context files
    * are
      * "AGENTS.md"
      * "CLAUDE.md"
      * ".claude/settings.json"
    * if you want to create them FROM scratch -> use`create-expo-app`

## -- based on -- chosen agent

* [Claude Code](claude.md)
* [Codex](codex.md)
* [Cursor](cursor.md)

## Project context files for agents

TODO: 
Each agent looks for project context in a different place
* Instead of forcing one convention, `create-expo-app` CLI adds the following configuration files
to a project's root when you create a new Expo project using the CLI:

| File                      | Read by                                                       | Purpose                                                                                                                             |
| ------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **AGENTS.md**             | Codex and Cursor directly. Claude Code through **CLAUDE.md**. | Points the agent to the Expo documentation matching your project's SDK. This is the source of truth for project-level instructions. |
| **CLAUDE.md**             | Claude Code on startup.                                       | Contains `@AGENTS.md`, which imports **AGENTS.md** into Claude Code's context.                                                      |
| **.claude/settings.json** | Claude Code on startup.                                       | Pre-enables the official Expo plugin from the Claude Code plugin marketplace.                                                       |

Each file targets a different agent convention, so the same project works with Claude Code, 
Codex, or Cursor without per-agent configuration.

## Verify the setup

To confirm an agent can read your project, open a session for your AI agent within your Expo project and run this prompt:

```text Example prompt
Open package.json and tell me which Expo SDK version this project targets.
```

If the agent replies with the SDK version from **package.json**, the agent is reading your project correctly.

## Agent toolkits

The agents mentioned in [Pick an agent](#pick-an-agent) read your code and documentation, among other things
* To let an agent also act on your Expo project while it runs, pair it with a third-party toolkit
* An agent toolkit can then tap through flows, read logs, inspect the React component tree, and profile performance.

<BoxLink
  title="Argent"
  description="An agentic toolkit from Software Mansion that connects over MCP to control, debug, and profile your app on an Android Emulator or iOS Simulator."
  href="/agents/argent/"
  Icon={BookOpen02Icon}
/>
