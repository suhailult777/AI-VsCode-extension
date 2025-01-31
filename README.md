# jarvis README

# Jarvis VS Code Extension

A VS Code extension that integrates with Ollama to provide AI chat capabilities.

## Prerequisites

- Node.js and npm
- Visual Studio Code
- Ollama installed locally
- Yo and VS Code Extension Generator

## Setup Development Environment

1. Install Yeoman and VS Code Extension Generator:
```bash
npm install -g yo generator-code
```

2. Create extension scaffold:
```bash
yo code
```
Select these options:
- Extension type: `New Extension (TypeScript)`
- Extension name: `jarvis`

3. Install Ollama:
```bash
curl https://ollama.ai/install.sh | sh
```

4. Add Ollama dependency:
```bash
npm install ollama
```

## Development

1. Update `package.json`:
```json
{
  "activationEvents": [
    "onCommand:jarvis.start"
  ],
  "contributes": {
    "commands": [
      {
        "command": "jarvis.start",
        "title": "Chat with Jarvis"
      }
    ]
  }
}
```

2. Pull required model:
```bash
ollama pull deepseek-r1:latest
```

3. Build and run:
- Press F5 to open debugger
- Open Command Palette (Ctrl+Shift+P)
- Type "Chat with Jarvis"
- Extension window will open

## Features

- AI chat interface using Ollama
- Streaming responses
- Error handling for model availability
- Developer console logging
- Simple chat UI with input/output

## Troubleshooting

- Check Output panel for extension logs
- Ensure Ollama is running locally
- Verify model is pulled
- Check Developer Tools console (Help > Toggle Developer Tools)

This is the README for your extension "jarvis". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
