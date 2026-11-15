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

- `development`: integration branch for completed features and fixes.
- `main`: release candidate.
- `production`: production release branch used by Vercel.

Use this promotion flow:

```text
feature/fix/Dependabot branch -> development -> main -> production
```

For every pull request, **base is the destination** and **compare is the source**:

| Work | Compare (source) | Base (destination) |
|---|---|---|
| Feature, fix, or dependency update | Work branch | `development` |
| Promote tested changes | `development` | `main` |
| Release to production | `main` | `production` |

Do not push work directly to protected branches. Require the `Lint and build` status check in the rulesets for all three long-lived branches. Use squash merges for short-lived work branches into `development`; use merge commits for promotions between long-lived branches when available, to preserve their history.

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

The `CI` workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs `npm ci`, `npm run lint`, and `npm run build` on PRs and pushes to `development`, `main`, and `production`.

## Vercel deployment

Connect this GitHub repository to a Vercel project. In Vercel project settings, set **Production Branch** to `production` and Node.js to 24.x. Vercel creates preview deployments from other branches and production deployments from the configured production branch.

Store environment variables in Vercel project settings and assign the appropriate environment scope. Do not commit secrets, `.env` files, or Vercel deployment tokens. The repository's [`vercel.json`](vercel.json) configures response security headers; it does not connect the project to Vercel.
