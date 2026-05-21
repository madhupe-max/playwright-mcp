## Playwright MCP

A Model Context Protocol (MCP) server that provides browser automation capabilities using [Playwright](https://playwright.dev). This server enables LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visual models.

### Playwright MCP vs Playwright CLI

This package provides MCP interface into Playwright. If you are using a **coding agent**, you might benefit from using the [CLI+SKILLS](https://github.com/microsoft/playwright-cli) instead.

- **CLI**: Modern **coding agents** increasingly favor CLI–based workflows exposed as SKILLs over MCP because CLI invocations are more token-efficient: they avoid loading large tool schemas and verbose snapshots into the context window, while still providing deterministic browser automation and rich debugging.

- **MCP**: MCP remains relevant for specialized agentic loops that benefit from persistent state, rich introspection, and iterative reasoning over page structure, such as exploratory automation, stateful assistants, or scenarios requiring a standardized MCP interface.

### Key Features

- **Fast and lightweight**. Uses Playwright's accessibility tree, not pixel-based input.
- **LLM-friendly**. No vision models needed, operates purely on structured data.
- **Deterministic tool application**. Avoids ambiguity common with screenshot-based approaches.

### Requirements
- Node.js 18 or newer
- VS Code, Cursor, Windsurf, Claude Desktop, Goose or any other MCP client

<!--
// Generate using:
node utils/generate-links.js
-->

### Getting started

First, install the Playwright MCP server with your client.

**Standard config** works in most of the tools:

```js
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@madhupe-max/playwright-mcp@latest"
      ]
    }
  }
}
```

[<img src="https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20Server&color=0098FF" alt="Install in VS Code">](https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522playwright%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522%2540madhupe-max%252Fplaywright-mcp%2540latest%2522%255D%257D)

<details>
<summary>Amp</summary>

Add via the Amp VS Code extension settings screen or by updating your settings.json file:

```json
"amp.mcpServers": {
  "playwright": {
    "command": "npx",
    "args": [
      "@madhupe-max/playwright-mcp@latest"
    ]
  }
}
```

**Amp CLI Setup:**

Add via the `amp mcp add`command below

```bash
amp mcp add playwright -- npx @madhupe-max/playwright-mcp@latest
```

</details>

<details>
<summary>Antigravity</summary>

Add via the Antigravity settings or by updating your configuration file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@madhupe-max/playwright-mcp@latest"
      ]
    }
  }
}
```

</details>

<details>
<summary>Claude Code</summary>

Use the Claude Code CLI to add the Playwright MCP server:

```bash
claude mcp add playwright npx @madhupe-max/playwright-mcp@latest
```
</details>

<details>
<summary>Claude Desktop</summary>

Follow the MCP install [guide](https://modelcontextprotocol.io/quickstart/user), use the standard config above.

</details>

<details>
<summary>Cline</summary>

Follow the instruction in the section [Configuring MCP Servers](https://docs.cline.bot/mcp/configuring-mcp-servers)

**Example: Local Setup**

Add the following to your [`cline_mcp_settings.json`](https://docs.cline.bot/mcp/configuring-mcp-servers#editing-mcp-settings-files) file:

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "timeout": 30,
      "args": [
        "-y",
        "@madhupe-max/playwright-mcp@latest"
      ],
      "disabled": false
    }
  }
}
```

</details>

<details>
<summary>Codex</summary>

Use the Codex CLI to add the Playwright MCP server:

```bash
codex mcp add playwright npx "@madhupe-max/playwright-mcp@latest"
```

Alternatively, create or edit the configuration file `~/.codex/config.toml` and add:

```toml
[mcp_servers.playwright]
command = "npx"
args = ["@madhupe-max/playwright-mcp@latest"]
```

For more information, see the [Codex MCP documentation](https://github.com/openai/codex/blob/main/codex-rs/config.md#mcp_servers).

</details>

<details>
<summary>Copilot</summary>

Use the Copilot CLI to interactively add the Playwright MCP server:

```bash
/mcp add
```

Alternatively, create or edit the configuration file `~/.copilot/mcp-config.json` and add:

```json
{
  "mcpServers": {
    "playwright": {
      "type": "local",
      "command": "npx",
      "tools": [
        "*"
      ],
      "args": [
        "@madhupe-max/playwright-mcp@latest"
      ]
    }
  }
}
```

For more information, see the [Copilot CLI documentation](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli).

</details>

<details>
<summary>Cursor</summary>

#### Click the button to install:

[<img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Install in Cursor">](https://cursor.com/en/install-mcp?name=Playwright&config=eyJjb21tYW5kIjoibnB4IEBtYWRodXBlLW1heC9wbGF5d3JpZ2h0LW1jcEBsYXRlc3QifQ%3D%3D)

#### Or install manually:

Go to `Cursor Settings` -> `MCP` -> `Add new MCP Server`. Name to your liking, use `command` type with the command `npx @madhupe-max/playwright-mcp@latest`. You can also verify config or add command line arguments depending on your setup.

</details>

<details>
<summary>Factory</summary>

Use the Factory CLI to add the Playwright MCP server:

```bash
droid mcp add playwright "npx @madhupe-max/playwright-mcp@latest"
```

Alternatively, type `/mcp` within Factory droid to open an interactive UI for managing MCP servers.

For more information, see the [Factory MCP documentation](https://docs.factory.ai/cli/configuration/mcp).

</details>

<details>
<summary>Gemini CLI</summary>

Follow the MCP install [guide](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md#configure-the-mcp-server-in-settingsjson), use the standard config above.

</details>

<details>
<summary>Goose</summary>

#### Click the button to install:

[![Install in Goose](https://block.github.io/goose/img/extension-install-dark.svg)](https://block.github.io/goose/extension?cmd=npx&arg=%40madhupe-max%2Fplaywright-mcp%40latest&id=playwright&name=Playwright&description=Browser%20automation%20for%20MCP)

#### Or install manually:

Go to `Advanced settings` -> `Extensions` -> `Add custom extension`. Name to your liking, use type `STDIO`, and set the `command` to `npx @madhupe-max/playwright-mcp`. Click "Add Extension".
</details>

<details>
<summary>Kiro</summary>

[![Add to Kiro](https://kiro.dev/images/add-to-kiro.svg)](https://kiro.dev/launch/mcp/add?name=playwright&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22%40madhupe-max%2Fplaywright-mcp%40latest%22%5D%7D)

Follow the MCP Servers [documentation](https://kiro.dev/docs/mcp/). For example in `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@madhupe-max/playwright-mcp@latest"
      ]
    }
  }
}
```
</details>

<details>
<summary>LM Studio</summary>

#### Click the button to install:

[![Add MCP Server playwright to LM Studio](https://files.lmstudio.ai/deeplink/mcp-install-light.svg)](https://lmstudio.ai/install-mcp?name=playwright&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyJAbWFkaHVwZS1tYXgvcGxheXdyaWdodC1tY3BAbGF0ZXN0Il19)

#### Or install manually:

Go to `Program` in the right sidebar -> `Install` -> `Edit mcp.json`. Use the standard config above.
</details>

<details>
<summary>opencode</summary>

Follow the MCP Servers [documentation](https://opencode.ai/docs/mcp-servers/). For example in `~/.config/opencode/opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "playwright": {
      "type": "local",
      "command": [
        "npx",
        "@madhupe-max/playwright-mcp@latest"
      ],
      "enabled": true
    }
  }
}

```
</details>

<details>
<summary>Qodo Gen</summary>

Open [Qodo Gen](https://docs.qodo.ai/qodo-documentation/qodo-gen) chat panel in VSCode or IntelliJ → Connect more tools → + Add new MCP → Paste the standard config above.

Click <code>Save</code>.
</details>

<details>
<summary>VS Code</summary>

#### Click the button to install:

[<img src="https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20Server&color=0098FF" alt="Install in VS Code">](https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522playwright%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522%2540madhupe-max%252Fplaywright-mcp%2540latest%2522%255D%257D)

#### Or install manually:

Follow the MCP install [guide](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server), use the standard config above. You can also install the Playwright MCP server using:

```bash
# For VS Code
code --add-mcp '{"name":"playwright","command":"npx","args":["@madhupe-max/playwright-mcp@latest"]}'
```

After installation, the Playwright MCP server will be available for use with your GitHub Copilot agent in VS Code.
</details>

<details>
<summary>Warp</summary>

Go to `Settings` -> `AI` -> `Manage MCP Servers` -> `+ Add` to [add an MCP Server](https://docs.warp.dev/knowledge-and-collaboration/mcp#adding-an-mcp-server). Use the standard config above.

Alternatively, use the slash command `/add-mcp` in the Warp prompt and paste the standard config from above:
```js
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@madhupe-max/playwright-mcp@latest"
      ]
    }
  }
}
```

</details>

<details>
<summary>Windsurf</summary>

Follow Windsurf MCP [documentation](https://docs.windsurf.com/windsurf/cascade/mcp). Use the standard config above.

</details>

### Configuration

Playwright MCP server supports following arguments. They can be provided in the JSON configuration above, as a part of the `"args"` list:

<!--- Options generated by update-readme.js -->

| Option | Description |
|--------|-------------|
| --allowed-hosts <hosts...> | comma-separated list of hosts this server is allowed to serve from. Defaults to the host the server is bound to. Pass '*' to disable the host check.<br>*env* `PLAYWRIGHT_MCP_ALLOWED_HOSTS` |
| --allowed-origins <origins> | semicolon-separated list of TRUSTED origins to allow the browser to request. Default is to allow all. Important: *does not* serve as a security boundary and *does not* restrict browser navigation. This should only be used to allow trusted origins to interact with the browser.<br>*env* `PLAYWRIGHT_MCP_ALLOWED_ORIGINS` |
| --allow-unrestricted-file-access | allow access to files outside of the workspace roots. Also allows unrestricted access to file:// URLs. By default access to file system is restricted to workspace roots.<br>*env* `PLAYWRIGHT_MCP_ALLOW_UNRESTRICTED_FILE_ACCESS` |
| --blocked-origins <origins> | semicolon-separated list of origins to block the browser from requesting. Blocklist is evaluated before allowlist. If used without the allowlist, requests not matching the blocked list will be allowed.<br>*env* `PLAYWRIGHT_MCP_BLOCKED_ORIGINS` |
| --block-service-workers | block service workers<br>*env* `PLAYWRIGHT_MCP_BLOCK_SERVICE_WORKERS` |
| --browser <browser> | browser or chrome channel to use, possible values: chrome, firefox, webkit, msedge.<br>*env* `PLAYWRIGHT_MCP_BROWSER` |
| --caps <caps> | comma-separated list of additional capabilities to enable, possible values: vision, pdf, devtools.<br>*env* `PLAYWRIGHT_MCP_CAPS` |
| --cdp-endpoint <endpoint> | CDP endpoint to connect to.<br>*env* `PLAYWRIGHT_MCP_CDP_ENDPOINT` |
| --cdp-header <headers...> | CDP headers to send with the connect request, multiple can be specified.<br>*env* `PLAYWRIGHT_MCP_CDP_HEADER` |
| --cdp-timeout <timeout> | timeout in milliseconds for connecting to CDP endpoint, defaults to 30000ms<br>*env* `PLAYWRIGHT_MCP_CDP_TIMEOUT` |
| --codegen <lang> | specify the language to use for code generation, possible values: "typescript", "none". Default is "typescript".<br>*env* `PLAYWRIGHT_MCP_CODEGEN` |
| --config <path> | path to the configuration file.<br>*env* `PLAYWRIGHT_MCP_CONFIG` |
| --console-level <level> | level of console messages to return: "error", "warning", "info", "debug". Each level includes the messages of more severe levels.<br>*env* `PLAYWRIGHT_MCP_CONSOLE_LEVEL` |
| --device <device> | device to emulate, for example: "iPhone 15"<br>*env* `PLAYWRIGHT_MCP_DEVICE` |
| --executable-path <path> | path to the browser executable.<br>*env* `PLAYWRIGHT_MCP_EXECUTABLE_PATH` |
| --extension | Connect to a running browser instance (Edge/Chrome only). Requires the "Playwright MCP Bridge" browser extension to be installed.<br>*env* `PLAYWRIGHT_MCP_EXTENSION` |
| --grant-permissions <permissions...> | List of permissions to grant to the browser context, for example "geolocation", "clipboard-read", "clipboard-write".<br>*env* `PLAYWRIGHT_MCP_GRANT_PERMISSIONS` |
| --headless | run browser in headless mode, headed by default<br>*env* `PLAYWRIGHT_MCP_HEADLESS` |
| --host <host> | host to bind server to. Default is localhost. Use 0.0.0.0 to bind to all interfaces.<br>*env* `PLAYWRIGHT_MCP_HOST` |
| --ignore-https-errors | ignore https errors<br>*env* `PLAYWRIGHT_MCP_IGNORE_HTTPS_ERRORS` |
| --init-page <path...> | path to TypeScript file to evaluate on Playwright page object<br>*env* `PLAYWRIGHT_MCP_INIT_PAGE` |
| --init-script <path...> | path to JavaScript file to add as an initialization script. The script will be evaluated in every page before any of the page's scripts. Can be specified multiple times.<br>*env* `PLAYWRIGHT_MCP_INIT_SCRIPT` |
| --isolated | keep the browser profile in memory, do not save it to disk.<br>*env* `PLAYWRIGHT_MCP_ISOLATED` |
| --image-responses <mode> | whether to send image responses to the client. Can be "allow" or "omit", Defaults to "allow".<br>*env* `PLAYWRIGHT_MCP_IMAGE_RESPONSES` |
| --no-sandbox | disable the sandbox for all process types that are normally sandboxed.<br>*env* `PLAYWRIGHT_MCP_NO_SANDBOX` |
| --output-dir <path> | path to the directory for output files.<br>*env* `PLAYWRIGHT_MCP_OUTPUT_DIR` |
| --output-mode <mode> | whether to save snapshots, console messages, network logs to a file or to the standard output. Can be "file" or "stdout". Default is "stdout".<br>*env* `PLAYWRIGHT_MCP_OUTPUT_MODE` |
| --port <port> | port to listen on for SSE transport.<br>*env* `PLAYWRIGHT_MCP_PORT` |
| --proxy-bypass <bypass> | comma-separated domains to bypass proxy, for example ".com,chromium.org,.domain.com"<br>*env* `PLAYWRIGHT_MCP_PROXY_BYPASS` |
| --proxy-server <proxy> | specify proxy server, for example "http://myproxy:3128" or "socks5://myproxy:8080"<br>*env* `PLAYWRIGHT_MCP_PROXY_SERVER` |
| --sandbox | enable the sandbox for all process types that are normally not sandboxed.<br>*env* `PLAYWRIGHT_MCP_SANDBOX` |
| --save-session | Whether to save the Playwright MCP session into the output directory.<br>*env* `PLAYWRIGHT_MCP_SAVE_SESSION` |
| --secrets <path> | path to a file containing secrets in the dotenv format<br>*env* `PLAYWRIGHT_MCP_SECRETS` |
| --shared-browser-context | reuse the same browser context between all connected HTTP clients.<br>*env* `PLAYWRIGHT_MCP_SHARED_BROWSER_CONTEXT` |
| --snapshot-mode <mode> | when taking snapshots for responses, specifies the mode to use. Can be "incremental", "full", or "none". Default is incremental.<br>*env* `PLAYWRIGHT_MCP_SNAPSHOT_MODE` |
| --storage-state <path> | path to the storage state file for isolated sessions.<br>*env* `PLAYWRIGHT_MCP_STORAGE_STATE` |
| --test-id-attribute <attribute> | specify the attribute to use for test ids, defaults to "data-testid"<br>*env* `PLAYWRIGHT_MCP_TEST_ID_ATTRIBUTE` |
| --timeout-action <timeout> | specify action timeout in milliseconds, defaults to 5000ms<br>*env* `PLAYWRIGHT_MCP_TIMEOUT_ACTION` |
| --timeout-navigation <timeout> | specify navigation timeout in milliseconds, defaults to 60000ms<br>*env* `PLAYWRIGHT_MCP_TIMEOUT_NAVIGATION` |
| --user-agent <ua string> | specify user agent string<br>*env* `PLAYWRIGHT_MCP_USER_AGENT` |
| --user-data-dir <path> | path to the user data directory. If not specified, a temporary directory will be created.<br>*env* `PLAYWRIGHT_MCP_USER_DATA_DIR` |
| --viewport-size <size> | specify browser viewport size in pixels, for example "1280x720"<br>*env* `PLAYWRIGHT_MCP_VIEWPORT_SIZE` |

<!--- End of options generated section -->

### User profile

You can run Playwright MCP with persistent profile like a regular browser (default), in isolated contexts for testing sessions, or connect to your existing browser using the browser extension.

**Persistent profile**

All the logged in information will be stored in the persistent profile, you can delete it between sessions if you'd like to clear the offline state.
Persistent profile is located at the following locations and you can override it with the `--user-data-dir` argument.

```bash
# Windows
%USERPROFILE%\AppData\Local\ms-playwright\mcp-{channel}-profile

# macOS
- ~/Library/Caches/ms-playwright/mcp-{channel}-profile

# Linux
- ~/.cache/ms-playwright/mcp-{channel}-profile
```

**Isolated**

In the isolated mode, each session is started in the isolated profile. Every time you ask MCP to close the browser,
the session is closed and all the storage state for this session is lost. You can provide initial storage state
to the browser via the config's `contextOptions` or via the `--storage-state` argument. Learn more about the storage
state [here](https://playwright.dev/docs/auth).

```js
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@madhupe-max/playwright-mcp@latest",
        "--isolated",
        "--storage-state={path/to/storage.json}"
      ]
    }
  }
}
```

**Browser Extension**

The Playwright MCP Chrome Extension allows you to connect to existing browser tabs and leverage your logged-in sessions and browser state. See [packages/extension/README.md](packages/extension/README.md).

### Initial state

There are multiple ways to provide the initial state to the browser context or a page.

For the storage state, you can either:
- Start with a user data directory using the `--user-data-dir` argument. This will persist all browser data between the sessions.
- Start with a storage state file using the `--storage-state` argument. This will load cookies and local storage from the file into an isolated browser context.

For the page state, you can use:

- `--init-page` to point to a TypeScript file that will be evaluated on the Playwright page object. This allows you to run arbitrary code to set up the page.

```ts
// init-page.ts
export default async ({ page }) => {
  await page.context().grantPermissions(['geolocation']);
  await page.context().setGeolocation({ latitude: 37.7749, longitude: -122.4194 });
  await page.setViewportSize({ width: 1280, height: 720 });
};
```

- `--init-script` to point to a JavaScript file that will be added as an initialization script. The script will be evaluated in every page before any of the page's scripts.
This is useful for overriding browser APIs or setting up the environment.

```js
// init-script.js
window.isPlaywrightMCP = true;
```

### Configuration file

The Playwright MCP server can be configured using a JSON configuration file. You can specify the configuration file
using the `--config` command line option:

```bash
npx @madhupe-max/playwright-mcp@latest --config path/to/config.json
```

<details>
<summary>Configuration file schema</summary>

<!--- Config generated by update-readme.js -->

```typescript
{
  /**
   * The browser to use.
   */
  browser?: {
    /**
     * The type of browser to use.
     */
    browserName?: 'chromium' | 'firefox' | 'webkit';

    /**
     * Keep the browser profile in memory, do not save it to disk.
     */
    isolated?: boolean;

    /**
     * Path to a user data directory for browser profile persistence.
     * Temporary directory is created by default.
     */
    userDataDir?: string;

    /**
     * Launch options passed to
     * @see https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context
     *
     * This is useful for settings options like `channel`, `headless`, `executablePath`, etc.
     */
    launchOptions?: playwright.LaunchOptions;

    /**
     * Context options for the browser context.
     *
     * This is useful for settings options like `viewport`.
     */
    contextOptions?: playwright.BrowserContextOptions;

    /**
     * Chrome DevTools Protocol endpoint to connect to an existing browser instance in case of Chromium family browsers.
     */
    cdpEndpoint?: string;

    /**
     * CDP headers to send with the connect request.
     */
    cdpHeaders?: Record<string, string>;

    /**
     * Timeout in milliseconds for connecting to CDP endpoint. Defaults to 30000 (30 seconds). Pass 0 to disable timeout.
     */
    cdpTimeout?: number;

    /**
     * Remote endpoint to connect to an existing Playwright server.
     */
    remoteEndpoint?: string;

    /**
     * Paths to TypeScript files to add as initialization scripts for Playwright page.
     */
    initPage?: string[];

    /**
     * Paths to JavaScript files to add as initialization scripts.
     * The scripts will be evaluated in every page before any of the page's scripts.
     */
    initScript?: string[];
  },

  /**
   * Connect to a running browser instance (Edge/Chrome only). If specified, `browser`
   * config is ignored.
   * Requires the "Playwright MCP Bridge" browser extension to be installed.
   */
  extension?: boolean;

  server?: {
    /**
     * The port to listen on for SSE or MCP transport.
     */
    port?: number;

    /**
     * The host to bind the server to. Default is localhost. Use 0.0.0.0 to bind to all interfaces.
     */
    host?: string;

    /**
     * The hosts this server is allowed to serve from. Defaults to the host server is bound to.
     * This is not for CORS, but rather for the DNS rebinding protection.
     */
    allowedHosts?: string[];
  },

  /**
   * List of enabled tool capabilities. Possible values:
   *   - 'core': Core browser automation features.
   *   - 'pdf': PDF generation and manipulation.
   *   - 'vision': Coordinate-based interactions.
   *   - 'devtools': Developer tools features.
   */
  capabilities?: ToolCapability[];

  /**
   * Whether to save the Playwright session into the output directory.
   */
  saveSession?: boolean;

  /**
   * Reuse the same browser context between all connected HTTP clients.
   */
  sharedBrowserContext?: boolean;

  /**
   * Secrets are used to prevent LLM from getting sensitive data while
   * automating scenarios such as authentication.
   * Prefer the browser.contextOptions.storageState over secrets file as a more secure alternative.
   */
  secrets?: Record<string, string>;

  /**
   * The directory to save output files.
   */
  outputDir?: string;

  /**
   * Whether to save snapshots, console messages, network logs and other session logs to a file or to the standard output. Defaults to "stdout".
   */
  outputMode?: 'file' | 'stdout';

  console?: {
    /**
     * The level of console messages to return. Each level includes the messages of more severe levels. Defaults to "info".
     */
    level?: 'error' | 'warning' | 'info' | 'debug';
  },

  network?: {
    /**
     * List of origins to allow the browser to request. Default is to allow all. Origins matching both `allowedOrigins` and `blockedOrigins` will be blocked.
     *
     * Supported formats:
     * - Full origin: `https://example.com:8080` - matches only that origin
     * - Wildcard port: `http://localhost:*` - matches any port on localhost with http protocol
     */
    allowedOrigins?: string[];

    /**
     * List of origins to block the browser to request. Origins matching both `allowedOrigins` and `blockedOrigins` will be blocked.
     *
     * Supported formats:
     * - Full origin: `https://example.com:8080` - matches only that origin
     * - Wildcard port: `http://localhost:*` - matches any port on localhost with http protocol
     */
    blockedOrigins?: string[];
  };

  /**
   * Specify the attribute to use for test ids, defaults to "data-testid".
   */
  testIdAttribute?: string;

  timeouts?: {
    /*
     * Configures default action timeout: https://playwright.dev/docs/api/class-page#page-set-default-timeout. Defaults to 5000ms.
     */
    action?: number;

    /*
     * Configures default navigation timeout: https://playwright.dev/docs/api/class-page#page-set-default-navigation-timeout. Defaults to 60000ms.
     */
    navigation?: number;

    /**
     * Configures default expect timeout: https://playwright.dev/docs/test-timeouts#expect-timeout. Defaults to 5000ms.
     */
    expect?: number;
  };

  /**
   * Whether to send image responses to the client. Can be "allow", "omit", or "auto". Defaults to "auto", which sends images if the client can display them.
   */
  imageResponses?: 'allow' | 'omit';

  snapshot?: {
    /**
     * When taking snapshots for responses, specifies the mode to use.
     */
    mode?: 'incremental' | 'full' | 'none';
  };

  /**
   * Whether to allow file uploads from anywhere on the file system.
   * By default (false), file uploads are restricted to paths within the MCP roots only.
   */
  allowUnrestrictedFileAccess?: boolean;

  /**
   * Specify the language to use for code generation.
   */
  codegen?: 'typescript' | 'none';
}
```

<!--- End of config generated section -->

</details>

### Standalone MCP server

When running headed browser on system w/o display or from worker processes of the IDEs,
run the MCP server from environment with the DISPLAY and pass the `--port` flag to enable HTTP transport.

```bash
npx @madhupe-max/playwright-mcp@latest --port 8931
```

And then in MCP client config, set the `url` to the HTTP endpoint:

```js
{
  "mcpServers": {
    "playwright": {
      "url": "http://localhost:8931/mcp"
    }
  }
}
```

## Security

Playwright MCP is **not** a security boundary. See [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) for guidance on securing your deployment.

<details>
<summary><b>Docker</b></summary>

**NOTE:** The Docker implementation only supports headless chromium at the moment.

```js
{
  "mcpServers": {
    "playwright": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "--init", "--pull=always", "mcr.microsoft.com/playwright/mcp"]
    }
  }
}
```

Or If you prefer to run the container as a long-lived service instead of letting the MCP client spawn it, use:

```
docker run -d -i --rm --init --pull=always \
  --entrypoint node \
  --name playwright \
  -p 8931:8931 \
  mcr.microsoft.com/playwright/mcp \
  cli.js --headless --browser chromium --no-sandbox --port 8931 --host 0.0.0.0
```

The server will listen on host port **8931** and can be reached by any MCP client.  

You can build the Docker image yourself.

```
docker build -t mcr.microsoft.com/playwright/mcp .
```
</details>

<details>
<summary><b>Programmatic usage</b></summary>

```js
import http from 'http';

import { createConnection } from '@madhupe-max/playwright-mcp';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';

http.createServer(async (req, res) => {
  // ...

  // Creates a headless Playwright MCP server with SSE transport
  const connection = await createConnection({ browser: { launchOptions: { headless: true } } });
  const transport = new SSEServerTransport('/messages', res);
  await connection.connect(transport);

  // ...
});
```

</details>

### Tools

<!--- Tools generated by update-readme.js -->
