---
id: ci-cd-configuration
title: CI/CD Configuration for Docs-as-Code
slug: /guides/ci-cd-configuration
sidebar_label: CI/CD Configuration for Docs-as-Code
---

## Table of contents

- [Overview](#overview)
- [Get Started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Repository structure](#repository-structure)
  - [Required files](#required-files)
  - [Branch strategy](#branch-strategy)
- [Node / Python / Tool versions](#node--python--tool-versions)



The purpose of this document is to help you configure your repository and environment for Continous Integration and Continious Deployment (CI/CD) workflows for Docs-as-Code.

## Overview
Docs-as-Code is a documentation approach that uses the same tools for documentation creation and maintanence as the tools used for code.
You can set up automated workflows in the CI/CD pipeline for Docs-as-Code approach that help you save time and ensure quality documentation deployment.

## Get Started

### Prerequisites
Before you begin, ensure the following:
- You have a **GitHub repository** to host your Docusaurus documentation source files.
- All documents are inside the folder defined in the `docusaurus.config.js` file.
- You have the **Administrator** or **Write** access to the repository to commit, push changes, and configure CI/CD settings.
- A Docusaurus spported Node.js version is installed locally.
- The **GitHub Actions** is set up.
- The **GitHub Pages** settings are configured to allow deployments from GitHub Actions.
- You have a node-based site generator, such as Docusarus, installed and configured.
- In the `package.json` file of your project, you have the following scripts defined:
```
"scripts": {
  "build": "docusaurus build",
  "start": "docusaurus start",
  "lint": "markdownlint docs/**/*.md",
  "linkcheck": "docusaurus linkcheck"
}
```

### Repository and Environment configuration

#### Repository strucutre
Ensure your repository strucutre is similar to:

```
my-docs-repo/
  ├── package.json
  ├── package-lock.json
  ├── docusaurus.config.js   # or equivalent site config
  ├── docs/                  # your documentation source
  ├── src/                   # site assets or customizations
  └── .github/
        └── workflows/       # workflows only run from this folder
             ├── ci.yml
             └── deploy.yml

```

#### Required Files
- `package.json`, `pyproject.toml`, or `requirements.txt`: lists build dependencies
- `docs/` or `website/`: documentation source folder
- `docusaurus.config.js` or `mkdocs.yml` —: site configuration files
- (optional)`.github/actions/`: custom actions
- `.github/workflows/*.yml`: workflow file

#### Branch Strategy
- `main`: primary development branch — Pull Requests (PRs) target `main` branch.
- `gh-pages` or `docs` branch: optional publish branch for GitHub Pages.
- `preview/*` branches for PR preview deployments.

### Node / Python / Tool versions
Declare explicit runtime versions in workflow files to ensure reproducible builds, for example, `node-version: 18.x` or `python-version: 3.11`.


