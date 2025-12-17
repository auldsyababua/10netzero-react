# Browser Testing with MCP Tools

## The Display Problem

Workhorse is a GUI Linux machine (Pop!_OS with GNOME), but Claude Code runs in a terminal session that doesn't have the `$DISPLAY` environment variable set. GUI applications like Chromium need this to know which display to render to.

**Solution**: Always prefix GUI commands with `DISPLAY=:1`

## Available Browser MCP Tools

### 1. Puppeteer MCP (`mcp__puppeteer__*`)

Puppeteer tries to launch its own browser instance, which fails without `$DISPLAY`.

**Workaround**: Launch Chromium manually first with remote debugging, then connect:

```bash
# Launch Chromium with remote debugging (run this first)
DISPLAY=:1 chromium-browser --remote-debugging-port=9222 http://localhost:5173 &

# Then use puppeteer_connect_active_tab to connect
```

Available tools:
- `puppeteer_connect_active_tab` - Connect to existing Chrome with debugging port
- `puppeteer_navigate` - Navigate to URL
- `puppeteer_screenshot` - Take screenshot
- `puppeteer_click` - Click element by CSS selector
- `puppeteer_fill` - Fill input field
- `puppeteer_evaluate` - Run JavaScript

### 2. Chrome DevTools MCP (`mcp__chrome-devtools__*`)

Same issue - needs a browser with remote debugging enabled.

**Setup**:
```bash
DISPLAY=:1 chromium-browser --remote-debugging-port=9222 http://localhost:5173 &
```

Available tools:
- `list_pages` - List open browser tabs
- `select_page` - Select a tab to work with
- `take_snapshot` - Get accessibility tree snapshot
- `take_screenshot` - Capture screenshot
- `navigate_page` - Navigate to URL
- `click`, `fill`, `hover` - Interact with elements
- `performance_start_trace` / `performance_stop_trace` - Capture performance trace
- `list_console_messages` - View console output
- `list_network_requests` - View network activity

### 3. Browserbase MCP (`mcp__browserbase__*`)

Cloud-based browser automation. **Cannot access localhost** - only works with public URLs.

**Use case**: Testing deployed sites (Vercel, Netlify, etc.)

```
# This works:
browserbase_stagehand_navigate to https://10netzero.com

# This does NOT work:
browserbase_stagehand_navigate to http://localhost:5173  # Connection refused
browserbase_stagehand_navigate to http://10.0.0.2:5173   # Private IP blocked
```

## Recommended Workflow

### For Local Development Testing

1. **Kill any existing Chromium with debug port**:
   ```bash
   pkill -f "chromium.*remote-debugging-port"
   ```

2. **Launch Chromium with debugging**:
   ```bash
   DISPLAY=:1 chromium-browser --remote-debugging-port=9222 http://localhost:5173 &
   sleep 2
   ```

3. **Verify it's running**:
   ```bash
   curl -s http://localhost:9222/json | jq '.[0].url'
   ```

4. **Use Chrome DevTools MCP or Puppeteer MCP** to connect and interact

### For Production Testing

Use Browserbase with the deployed URL:
```
mcp__browserbase__browserbase_session_create
mcp__browserbase__browserbase_stagehand_navigate to https://10netzero.com
mcp__browserbase__browserbase_screenshot
```

### For Core Web Vitals / Performance

Option A - Chrome DevTools performance trace:
```
mcp__chrome-devtools__performance_start_trace (with reload=true, autoStop=true)
mcp__chrome-devtools__performance_stop_trace
```

Option B - Lighthouse CLI (headless):
```bash
DISPLAY=:1 npx lighthouse http://localhost:5173 --output=html --output-path=./lighthouse-report.html
```

## Quick Reference

| Tool | Localhost | Public URL | Needs Display |
|------|-----------|------------|---------------|
| Puppeteer | ✅ (with setup) | ✅ | Yes |
| Chrome DevTools | ✅ (with setup) | ✅ | Yes |
| Browserbase | ❌ | ✅ | No (cloud) |
| Lighthouse CLI | ✅ | ✅ | Yes (or --headless) |

## Troubleshooting

**"Missing X server or $DISPLAY"**
- The command needs `DISPLAY=:1` prefix
- Or the MCP server process doesn't have display access

**"Address already in use (98)" on port 9222**
- Another Chromium is using that port
- Run: `pkill -f "chromium.*9222"` then retry

**Browserbase "connection not allowed"**
- Browserbase is cloud-based and cannot reach private IPs
- Deploy to a public URL first, or use Puppeteer/Chrome DevTools for local testing
