---
id: validation
title: Validation Workflow
slug: /guides/validation
sidebar_label: Setup a Validation Workflow
---
# Setup a Validation Workflow for Documentation
Setup a workflow to validate documentation for quality and standards each time a push or pull request is raised. This workflow validates the documentation quality by running automated formatting, markdown linting, and link validation checks.
- **Prettier** is used to enforce consistent formatting.
- **Markdownlint** is used to validate the style and structure of the Markdown files.
- **markdown-link-check** is used to ensure all internal and external links are valid.

Before you begin, perform the following:
1. Install dependencies


In your terminal, run:

```
npm install --save-dev prettier markdownlint-cli markdown-link-check
```

- `prettier`: Format and style checker
- `markdownlint-cli`: Linter to check markdown formatting
- `markdown-link-check`: Checks external and internal links in markdown files
3. In your project folder, create a `prettierrc` file.
Paste the following code in the `prettierrc` file:
```
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "proseWrap": "always"
}
```
4. In your project folder, create a `markdownlint.json` file.
Paste the following code in the `markdownlint.json` file and modify as per requirement:
```
{
  "default": true,
  "line-length": {
    "line_length": 100
  },
  "MD013": false,          // allow long lines if required
  "MD041": false           // allow files without top-level heading
}
```
5. In your project folder, create a `mlc.son` file.
Paste the following code in the `mlc.json` file:
```
{
  "ignorePatterns": [       // helps you skip ephemeral or internal URLs
    "https://example.com/.*",
    "http://localhost:.*"
  ],
  "retryOn429": true,
  "maxSockets": 10,
  "headers": {}
}
```

## Setup a validation Workflow 

Step 1. In the **Workflow** folder, create a file `ci.yaml`.


Step 2. Paste the following workflow code in the `ci.yaml` file:


```
name: Docs CI — Lint & Link Check

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

permissions:
  contents: read

jobs:
  docs-verify:
    name: Verify docs (format, lint, links)
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Cache node modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

      - name: Install dependencies
        run: npm ci

      - name: Prettier format check
        run: npm run format:check

      - name: Markdown lint
        run: npm run md:lint || npm run md:lint2

      - name: Run link checks
        run: |          
          git ls-files 'docs/**/*.md' > /tmp/md-files.txt          
          while IFS= read -r file; do
            echo "Checking links in: $file"
            npx markdown-link-check --config .mlc.json "$file" || exit 1
          done < /tmp/md-files.txt

```
Step 3. In the `package.json` file, add the following scripts.

```
"{
  "scripts": {
    "format:check": "prettier --check \"docs/**/*.md\"",
    "format:fix": "prettier --write \"docs/**/*.md\"",
    "md:lint": "markdownlint \"docs/**/*.md\" --config .markdownlint.json",
    "md:lint2": "markdownlint-cli2 \"docs/**/*.md\" --config .markdownlint.json",
    "linkcheck": "markdown-link-check --config .mlc.json \"$(git ls-files 'docs/**/*.md')\"",
    "verify-docs": "npm run format:check && npm run md:lint && npm run linkcheck"
  }
}
```

Step 4. Commit and push the file. 


In your terminal, run: 
```
git add .github/workflows/ci.yml
git commit -m "Add CI workflow"
git push
```
Each time a push or pull request is raised, the validation workflow is triggered, and the document is validated for broken links and markdown quality.