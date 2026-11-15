# GitHub and Deployment Guide

This guide covers the project layout, GitHub workflow, CI checks, and Vercel deployment.

## Project structure

```text
.github/
  dependabot.yml          Weekly npm and GitHub Actions update PRs
  workflows/ci.yml        GitHub Actions lint and build checks
public/                   Static assets
src/
  app/                    Next.js routes, layouts, and global styles
  components/             Reusable UI components
  resources/              Static or app resource data
  types/                  Shared TypeScript types
  utils/                   Shared utilities
AGENTS.md                  Instructions for coding agents
package.json               Scripts and dependencies
package-lock.json          Locked npm dependency tree
vercel.json                Vercel response security headers
```

The `@/*` TypeScript alias points to `src/*`.

## Branch and pull request workflow

Keep these long-lived branches:

- `development`: integration branch where features and fixes are tested.
- `main`: protected production branch used by Vercel.

Use this flow:

```text
feature/fix/Dependabot branch -> development -> main
```

For every pull request, **base is the destination** and **compare is the source**:

| Work | Compare (source) | Base (destination) |
|---|---|---|
| Feature, fix, or dependency update | Work branch | `development` |
| Promote tested changes to production | `development` | `main` |

Do not push directly to `main` or open feature PRs directly into it. The CI workflow rejects PRs into `main` unless their source is `development`. Protect both long-lived branches with required PRs and the `Lint and build` status check; block force pushes and deletion, and do not allow bypasses for `main`. Use squash merges for short-lived work branches into `development`, and merge commits for `development` into `main` to keep the long-lived branches aligned.

Dependabot creates its own dependency-update branches and PRs targeting `development`. Review each update and merge it only when its CI check passes. Keep TypeScript on a version supported by `typescript-eslint`; the current project uses TypeScript 5.9.3.

## Git commands

Clone the repository and update `development`:

```bash
git clone https://github.com/pyapril15/praveenyadav.git
cd praveenyadav
git switch development
git pull --ff-only origin development
```

Start a feature or fix branch from the latest `development`:

```bash
git switch -c feature/short-description
# Make and test your changes
git status --short
git add path/to/changed/files
git commit -m "feat: describe the change"
git push -u origin feature/short-description
```

Then open a PR with `feature/short-description` as **compare** and `development` as **base**. Replace the example branch name and commit message with ones that describe the actual work.

Useful status and synchronization commands:

```bash
git status --short --branch
git fetch origin
git branch -vv
git pull --ff-only origin development
```

## Local development and validation

Use Node.js 24.x to match GitHub Actions.

```bash
npm ci
npm run dev
```

Before opening a PR, run the same quality checks as CI:

```bash
npm ci
npm run lint
npm run build
```

The `CI` workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs `npm ci`, `npm run lint`, and `npm run build` on PRs and pushes to `development` and `main`. A PR to `main` must come from `development`.

## Vercel deployment

Connect this GitHub repository to a Vercel project. In Vercel project settings, set **Production Branch** to `main` and Node.js to 24.x. Vercel creates preview deployments from `development` and other branches; merging `development` into `main` triggers the production deployment.

Store environment variables in Vercel project settings and assign the appropriate environment scope. Do not commit secrets, `.env` files, or Vercel deployment tokens. The repository's [`vercel.json`](vercel.json) configures response security headers; it does not connect the project to Vercel.
