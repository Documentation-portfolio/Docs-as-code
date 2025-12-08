---
id: pr-preview
title: PR Preview Workflow
slug: /guides/pr-preview
sidebar_label: Setup a PR Preview Workflow
---
# Setup a PR Preview Workflow
Create a workflow to build a temporary preview document each time a pull request is raised. The preview file is rendered as a live site before changes are merged. Reviewers can review the preview file to give feedback. The preview file ensures review accuracy and reduces regression.
This procedure uses **Netlify** as a host for temporary links.

Before you begin, perform the following:
1. Sign up to **Netlify** and create a **Netlify** site for your project.
2. Create a **Netlify** personal access token.
3. In your repository, add the following secrets:
- `NETLIFY_AUTH_TOKEN` = `<your-netlify-token>`
- `NETLIFY_SITE_ID` = `<your-site-id>`

## Setup a PR Preview Workflow
Step 1. In the **Workflow** folder, create a `pr-review.yaml` file.


Step 2. Paste the following code in the `pr-review.yaml` file.
```
name: PR Preview — Netlify

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  build-and-deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install deps
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Netlify (preview)
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          PR_NUMBER: ${{ github.event.number }}
        run: |          
          npx netlify-cli deploy --dir=./build --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN --message="Preview PR #${PR_NUMBER}" --json > /tmp/netlify.json
          PREVIEW_URL=$(cat /tmp/netlify.json | jq -r '.url')
          echo "preview_url=$PREVIEW_URL" >> $GITHUB_OUTPUT

      - name: Comment preview URL on PR
        uses: peter-evans/create-or-update-comment@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          issue-number: ${{ github.event.number }}
          body: |
            ✅ Netlify preview ready: ${{ steps.build-and-deploy-preview.outputs.preview_url }}
```
Step 2. Commit and push the file. 


In your terminal, run: 
```
git add .github/workflows/pr-preview-netlify.yml
git commit -m "Add PR preview deploy to Netlify"
git push
```
Each time a pull request is raised, a preview file is hosted in **Netlify**, and is posted in the pull review comments.