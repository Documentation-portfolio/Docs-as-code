---
id: deployment
title: Deployment Workflow
slug: /guides/deployment
sidebar_label: Setup a Deployment Workflow
---

# Setup a Deployment Workflow to Publish Documentation
Create a workflow to build and deploy the documentation site each time changes are pushed to the `main` branch. This workflow publishes the static site to **GitHub Pages** and ensures the latest approved documentation is always live and accessible.

Before you begin, ensure the following:
1. Ensure **GitHub Pages** is setup for your repository.
2. Docusaurus outputs the static files to the `build/` directory.
In your terminal, run:
```
publish_dir: ./build
```
#### Setup a Deployment Workflow

Step 1. In the **Workflow** folder, create a file `deploy.yaml`.
Step 2. Paste the following workflow code into the `deploy.yaml` file:
```
name: Deploy Docs
on:
  push:
    branches: [ main ]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Use Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

Step 3. Commit and push the file.
In your terminal, run:
```
git add .github/workflows/deploy.yml
git commit -m "Add deployment workflow"
git push
```
Each time changes are pushed to the `main` branch, the deployment workflow is triggered, and the static site is published to **GitHub Pages**.
