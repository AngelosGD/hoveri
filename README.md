# hoveri

Icons that move with intent. An open source animated icon library built with React, Next.js, and Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Installing icons

### Install a single icon

```bash
npx shadcn@latest add https://hoveri.com/r/[icon-name].json
```

### Install the whole library

```bash
npm install hoveri
```

```tsx
import { HeartIcon, StarIcon } from "hoveri";
```

### Manual / copy the source

Every icon page has a "Manual" tab with the full source code. Copy it, paste it, customize it.

## Tech Stack

- Next.js 16
- React 19
- Motion (Framer Motion)
- Tailwind CSS v4
- shadcn/ui

## Project Structure

```
icons/           # Animated icon components (the library)
components/      # UI components
app/             # Next.js app router pages
lib/             # Utilities
scripts/         # Codegen + registry tooling
```

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run check        # Run lint + typecheck
```

## License

MIT