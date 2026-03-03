# Web Cookbook - Deployment Guide

This document provides step-by-step instructions for deploying the web-cookbook application to Cloudflare Pages.

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Cloudflare account
- Wrangler CLI installed

## Tech Stack

- **Framework**: Next.js 16
- **Documentation**: Fumadocs
- **Deployment**: Cloudflare Pages (via OpenNext.js)
- **Styling**: Tailwind CSS

---

## Local Development

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Code Quality

```bash
# Lint
pnpm lint

# Format
pnpm format
```

---

## Deployment to Cloudflare Pages

### Step 1: Install Wrangler CLI

If you haven't already:

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Create R2 Bucket (for cache)

```bash
wrangler r2 bucket create web-cookbook-opennext-cache
```

### Step 4: Configure Cloudflare Images (Optional)

If you want image optimization, add the Images binding in Cloudflare Dashboard:

1. Go to Cloudflare Dashboard > Your Worker > Settings > Variables
2. Add `IMAGES` binding pointing to your Cloudflare Images

### Step 5: Deploy

```bash
pnpm deploy
```

This command will:
1. Build the Next.js application for Cloudflare
2. Upload assets to Cloudflare
3. Deploy the worker

### Alternative: Preview Locally

```bash
pnpm preview
```

---

## Environment Variables

No additional environment variables are required for basic deployment.

For production, you may want to configure:

- `NEXT_PUBLIC_*` variables for client-side configuration

---

## Troubleshooting

### Build Fails

Make sure you have the correct Node.js version:

```bash
node --version  # Should be 18+
```

### Preview Not Working

Ensure `@opennextjs/cloudflare` is properly installed:

```bash
pnpm add @opennextjs/cloudflare
```

### Deployment Issues

Check Cloudflare dashboard for error logs:

```bash
wrangler tail
```

---

## Project Structure

```
web-cookbook/
├── app/                  # Next.js app directory
├── components/          # React components
├── content/             # MDX content for docs
├── lib/                 # Utility functions
├── public/              # Static assets
├── .open-next/          # Build output (generated)
├── wrangler.jsonc       # Cloudflare configuration
└── next.config.mjs     # Next.js configuration
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenNext.js for Cloudflare](https://opennext.js.org/cloudflare)
- [Fumadocs Documentation](https://fumadocs.dev)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

---

## License

MIT
