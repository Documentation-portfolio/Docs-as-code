# CI/CD Configuration for Docs-as-Code

The purpose of this document is to help you configure your repository and environment for Continous Integration and Continious Deployment (CI/CD) workflows for Docs-as-Code.

## Overview
Docs-as-Code is a documentation approach that uses the same tools for documentation creation and maintanence as the tools used for code.
You can set up automated workflows in the CI/CD pipeline for Docs-as-Code approach that help you save time and ensure quality documentation deployment.
use source documentation, built the documentation into a static site, test for 

## Prerequisites
Before you begin, ensure the following:
- You have a GitHub repository to host your Docusaurus source files.
- All documents are inside the `docs/` folder of the GitHub repository. 
- You have the **Administrator** or **Write** access to the repository to commit and push changes to the documents.
- Docusaurus spported Node.js version is installed locally
- The GitHub Pages deployment settings are updated:
    - 
- You have GitHub Actions set up.
- You have the following scripts defined in the package.json:
```
"scripts": {
  "build": "docusaurus build",
  "start": "docusaurus start",
  "lint": "markdownlint docs/**/*.md",
  "linkcheck": "docusaurus linkcheck"
}
```


