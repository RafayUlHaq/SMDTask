# expo-product-explorer

A React Native / Expo product listing app built as part of the SMD Lab exercise.

**Student:** Rafay  
**Roll No:** L1S22BSCS0001

---

## Project Structure

```
expo-product-explorer/
├── App.tsx                        # Main app component (product list + student info)
├── app.json                       # Expo app configuration
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript config
├── eslint.config.js               # ESLint flat config
├── .gitignore                     # Ignored files (node_modules, .expo, .env, etc.)
├── assets/                        # Images and icons
└── .github/
    └── workflows/
        └── expo-ci.yml            # GitHub Actions CI workflow
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run in browser
npm run web

# Run lint
npm run lint
```

---

## Git Workflow Used

```
main  ──────────────────────────────────────────────►
        \                                   ↑
         feature/products ─── commits ─── PR & merge
```

### Commands used

```bash
# Initialize git
git init
git branch -M main

# Initial commit
git add .
git commit -m "Initial Expo project setup with ESLint"

# Feature branch
git checkout -b feature/products

# After UI changes
git add App.tsx
git commit -m "feat: add product list screen with student name and roll number"

# Add CI workflow
git add .github/workflows/expo-ci.yml
git commit -m "ci: add GitHub Actions Expo CI workflow"

# Push to GitHub
git remote add origin <github-url>
git push -u origin main
git push -u origin feature/products

# Open Pull Request on GitHub from feature/products → main
```

---

## GitHub Actions CI Workflow

The workflow file lives at `.github/workflows/expo-ci.yml`.

**Triggers:** push to `main`, pull requests targeting `main`

**Steps:**
1. Checkout repository
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Run ESLint (`npm run lint`)
5. TypeScript type check (`npx tsc --noEmit`)

---

## Expo MCP Server Integration

[Expo MCP Server](https://docs.expo.dev/mcp/) is a remote Model Context Protocol server
hosted by Expo at `https://mcp.expo.dev/mcp`.

### What it provides

| Feature | Description |
|---------|-------------|
| `read_documentation` | Fetch latest official Expo docs on demand |
| `search_documentation` | Search Expo docs by topic |
| `add_library` | Install Expo-compatible packages via `npx expo install` |
| `build_list` / `build_run` | Manage EAS builds |
| `automation_take_screenshot` | Screenshot running simulator (local) |
| `automation_tap` | Tap views in simulator (local) |
| `learn` | Teach the AI about specific Expo features |

### Setup in Kiro / VS Code

The MCP server is pre-configured in `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "expo": {
      "type": "http",
      "url": "https://mcp.expo.dev/mcp"
    }
  }
}
```

For Claude Code:
```bash
claude mcp add --transport http expo https://mcp.expo.dev/mcp
# Then run /mcp in Claude Code session to authenticate via OAuth
```

### Local capabilities (advanced)

```bash
npx expo install expo-mcp --dev
npx expo login
EXPO_UNSTABLE_MCP_SERVER=1 npx expo start
```

This enables screenshot automation, DevTools integration, and simulator interaction.

---

## CI / CD Distinction

| | CI | CD |
|--|----|----|
| What | Automatically checks code quality | Automates delivery of software |
| How | Runs lint, type checks, tests | Triggers builds, publishes artifacts |
| Expo + | GitHub Actions | EAS Build / EAS Submit |

### Manual Android build via EAS

```bash
eas login
eas build:configure
eas build --platform android
```

---

## Files NOT committed (`.gitignore`)

- `node_modules/` — recreated from `package.json`
- `.expo/` — local Expo cache
- `dist/`, `web-build/` — generated output
- `.env`, `.env.local`, `.env.*` — secrets / API keys
- `/ios`, `/android` — native generated folders

> ⚠️ Never commit secrets or API keys — even to private repos.
