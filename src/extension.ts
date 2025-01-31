import * as vscode from "vscode";
import ollama from "ollama";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("jarvis.start", () => {
    const panel = vscode.window.createWebviewPanel(
      "jarvis",
      "Jarvis Chat",
      vscode.ViewColumn.One,
      { enableScripts: true }
    );
    panel.webview.html = getWebviewContent();

    panel.webview.onDidReceiveMessage(async (message: any) => {
      if (message.command === "chat") {
        const userPrompt = message.text;
        let responseText = "";

        try {
          const StreamResponse = await ollama.chat({
            model: "deepseek-r1:1.5b",
            messages: [{ role: "user", content: userPrompt }],
            stream: true,
          });

          for await (const part of StreamResponse) {
            responseText += part.message.content;
            panel.webview.postMessage({
              command: "chatResponse",
              text: responseText,
            });
          }
        } catch (err) {
          panel.webview.postMessage({
            command: "chatResponse",
            text: `Error:${String(err)}`,
          });
        }
      }
    });
  });
  context.subscriptions.push(disposable);
}

function getWebviewContent(): string {
  return /*html*/ `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<style>
			body { font-family: sans-serif; margin: 1rem; }
			#prompt { width: 100%; box-sizing: border-box; }
			#response { border: 1px solid #ccc; margin-top: 1rem; padding: 0.5rem; min-height: 4rem; }
			</style>
			<head>
			<body>
				<h2>Jarvis VS Code Extension</h2>
				<textarea id="prompt" rows="3" placeholder="Ask Jarvis a question..."></textarea><br />
				<button id="askBtn">Ask</button>
				<div id="response"></div>

				<script>
					const vscode = acquireVsCodeApi();

					document.getElementById('askBtn').addEventListener('click', () => {
					const text = document.getElementById('prompt').value;
					vscode.postMessage({ command: 'chat', text });

					});

					window.addEventListener('message', event => {
						const { command, text } = event.data;
						if (command === 'chatResponse') {
							document.getElementById('response').innerText = text;
						}
					});
				</script>
			</body>
			</html>

	`;
}

export function deactivate() {}
