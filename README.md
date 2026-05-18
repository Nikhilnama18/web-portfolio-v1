This is a premium [Next.js](https://nextjs.org) developer portfolio for Nikhil Nama with a dark liquid-glass visual system and warm gold accents.

## Getting Started

Create a local environment file before starting the app:

```bash
cp .env.example .env.local
```

Then add your Web3Forms key:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

The contact section submits directly to Web3Forms from the client, so no custom API route is required for basic portfolio inquiries.
