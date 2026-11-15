<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project status

- Application routes and global styles are in `src/app`.
- Application code is organized under `src/components`, `src/resources`, `src/types`, and `src/utils`. These folders are placeholders until their first files are added.
- The `@/*` TypeScript alias points to `src/*`.
- No application behavior has been changed as part of the structure setup.

## Branch workflow status

- `main` is the default and production branch; `development` is the integration branch.
- Start feature and fix branches from the latest `development`, then open a PR into `development`.
- Promote tested changes only through a PR from `development` to `main`. The PR base is always the destination branch; do not push directly to `main` or open other PRs into it.
- The CI workflow rejects PRs into `main` unless their source is `development`.
- Use squash merges for short-lived work branches into `development` and merge commits for `development` into `main` to keep long-lived branch history aligned.
- Protect both branches with required PRs and the `Lint and build` check; block force pushes and deletion, and do not allow bypasses on `main`.

## CI and deployment

- GitHub Actions runs `npm ci`, lint, and production-build checks for pull requests and pushes to `development` and `main`. The required check name is `Lint and build`.
- Keep TypeScript on a version supported by the configured `typescript-eslint` tooling; TypeScript 7 currently fails lint. TypeScript 5.9.3 passes the CI workflow.
- Dependabot proposes npm and GitHub Actions updates against `development`.
- Vercel's Git integration is the deployment provider; it should use `main` as the production branch and Node.js 24.x. `development` should receive preview deployments.
- The Vercel project connection, production-branch selection, and environment variables must be configured in Vercel's dashboard. Keep secrets out of the repository and GitHub Actions workflow.
