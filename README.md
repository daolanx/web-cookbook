# web-cookbook

A Next.js documentation website built with [Fumadocs](https://fumadocs.dev).

## Overview

web-cookbook is a modern documentation site powered by Next.js and Fumadocs. It provides a clean, fast, and searchable documentation experience.

## Features

- 📚 **MDX Support** - Write documentation in Markdown with React components
- 🔍 **Full-text Search** - Fast search functionality for finding content
- 🎨 **Customizable Themes** - Light and dark mode support
- 📱 **Responsive Design** - Works on desktop and mobile
- ⚡ **Fast Performance** - Built on Next.js App Router

## Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
web-cookbook/
├── app/                    # Next.js App Router pages
│   ├── (home)/            # Landing page route group
│   ├── docs/              # Documentation pages
│   ├── api/               # API routes (search, etc.)
│   └── layout.tsx         # Root layout
├── content/               # Documentation content (MDX files)
├── lib/                   # Core libraries
│   ├── source.ts          # Fumadocs content source adapter
│   └── layout.shared.tsx  # Shared layout configuration
├── public/                # Static assets
├── source.config.ts       # Fumadocs configuration
└── next.config.*          # Next.js configuration
```

## Documentation

Documentation is written in MDX and stored in the `content/` directory. Each `.mdx` file becomes a page in the docs section.

### Adding New Pages

1. Create a new `.mdx` file in `content/`
2. Add frontmatter:

```markdown
---
title: My Page Title
description: A brief description
---

# My Content
```

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Documentation**: [Fumadocs](https://fumadocs.dev)
- **Styling**: Tailwind CSS
- **Content**: MDX

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the LICENSE file for details.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.dev)
- [MDX Documentation](https://mdxjs.com)
