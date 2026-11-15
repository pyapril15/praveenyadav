This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## CI and Vercel deployment

GitHub Actions runs lint and production-build checks for pull requests and pushes to `development`, `main`, and `production`. After a successful run, select the **Lint and build** check in the branch ruleset.

To enable deployments, connect this GitHub repository to a Vercel project and set its **Production Branch** to `production`. Vercel's Git integration creates preview deployments for pull requests and non-production branches, and production deployments from `production`. Set the Vercel project to use Node.js 24.x to match CI.

Store environment variables in Vercel's project settings and scope them to the appropriate environments. Do not commit secrets or add Vercel deployment tokens to the CI workflow.
