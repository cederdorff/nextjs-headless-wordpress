# Next.js and headless WordPress

A Next.js app (App Router) that fetches posts and pages from WordPress through the REST API.

## Getting started

Copy `.env.example` to `.env.local` and add the URL of your WordPress site:

```bash
cp .env.example .env.local
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Routes

- `/` – home page with the latest posts
- `/posts` – all posts
- `/posts/[slug]` – a single post
- `/about` – the About page from WordPress
