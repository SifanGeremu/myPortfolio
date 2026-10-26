# Personal Portfolio

A personal portfolio built with Next.js and TypeScript. The site is a single page with a profile, about, contact, projects, tech stack, GitHub activity, and highlights.

All copy, links, and media paths live in `data/content.ts`, so the page can be updated without rewriting components.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- React GitHub Calendar

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit the content

Update `data/content.ts` for name, role, projects, skills, and links. Images live in `public/images`. The resume file is `public/resume.txt`.
