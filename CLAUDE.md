# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js documentation site built with [Fumadocs](https://fumadocs.dev), deployed to Cloudflare Pages using OpenNext.js for Cloudflare. The site uses MDX for content and supports AI/LLM consumption via dedicated routes.

## Commands

```bash
# Development
pnpm dev              # Start development server at http://localhost:3000

# Build & Deploy (Cloudflare)
pnpm build            # Build for Node.js (default)
pnpm preview          # Build and preview with OpenNext.js Cloudflare
pnpm deploy           # Build and deploy to Cloudflare
pnpm upload           # Build and upload to Cloudflare

# Type Checking
pnpm types:check      # Run Fumadocs MDX, Next.js typegen, and tsc --noEmit
pnpm cf-typegen      # Generate Cloudflare types (wrangler types)

# Linting & Formatting
pnpm lint            # Run Biome check
pnpm format          # Run Biome format --write

# Testing
pnpm test            # Run unit tests (Vitest)
pnpm test:watch     # Run unit tests in watch mode
pnpm test:e2e       # Run e2e tests (Playwright)
pnpm test:all       # Run all tests (unit + e2e)

# Post-install
pnpm postinstall     # Runs fumadocs-mdx (auto-run after install)
```

## Architecture

- **Framework**: Next.js 16 (canary) with App Router
- **Documentation**: Fumadocs (MDX-based)
- **Deployment**: Cloudflare Pages via OpenNext.js
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`
- **Linting**: Biome
- **Testing**: Vitest (unit) + Playwright (e2e), pre-commit hooks via simple-git-hooks

### Directory Structure

```
app/
├── (home)/           # Landing page route group
│   ├── layout.tsx
│   └── page.tsx
├── docs/             # Documentation layout
│   ├── layout.tsx
│   └── [[...slug]]/  # Dynamic doc pages
├── api/              # API routes
├── og/docs/          # Open Graph image generation
├── llms.mdx/         # LLM-optimized content
├── llms.txt          # LLM full text
├── llms-full.txt     # Full LLM text
└── layout.tsx        # Root layout

lib/
├── source.ts         # Fumadocs content source adapter
├── layout.shared.tsx # Shared layout options
└── cn.ts             # tailwind-merge utility

content/
└── docs/             # MDX documentation files

components/           # React components (ai/ subdirectory for AI components)
```

### Content Source

Content is loaded via `lib/source.ts` using Fumadocs' source API:
- Base URL: `/docs`
- Collections: `docs` from `fumadocs-mdx:collections/server`
- Plugins: Lucide icons support

### Cloudflare Deployment

The project uses `@opennextjs/cloudflare` with:
- R2 incremental cache (configured in `open-next.config.ts`)
- Wrangler for deployment (`wrangler.jsonc`)
- Rewrites: `/docs/*.mdx` → `/llms.mdx/docs/*`

## Git Workflow

### Contribution Process

1. **Bug/Issue Discovery** → Create a detailed GitHub Issue describing the problem
2. **Fix Implementation** → Create a feature branch from `main`
3. **PR Creation** → Create PR that links to the issue (use "Closes #N" in description)
4. **Code Review** → Wait for review before merging
5. **Merge** → Squash and merge to `main`

### Branch Naming

- `fix/[issue-name]` - Bug fixes
- `feat/[feature-name]` - New features
- `refactor/[name]` - Code refactoring

### Commit Messages

Use clear, descriptive commit messages following conventional commits:
- `fix: resolve cloudflare build error`
- `feat: add new documentation page`
- `docs: update CLAUDE.md`

### Important Rules

- **NEVER commit directly to `main`** - Always use PR workflow
- **Small fixes should also use PR** - No matter how small, use issue + PR
- **Describe changes clearly** - Both in commits and PR descriptions
