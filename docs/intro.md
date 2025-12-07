---
sidebar_position: 1
---

# Documentation Portfolio: Docs-as-code CI/CD workflow

## Overview
This documentation describes how to configure, build, test, and publish documentation using Docs-as-Code approach with CI/CD automation. It is intended for teams using a node-based static site generator (such as Docusaurus), GitHub (Repository and Actions), and optional GitHub Pages for publishing.

I have created this documentation using Docusaurus and deployed via GitHub Pages. 

I have implemented a basic CI/CD pipeline for documentation workflows that cover the following:
1. Content quality check every time a push or pull request is raised before merging the changes: 
  - Verify all links are working 
  - Content formatting check using Prettier
  - Content standards and consistency check using markdownlint
2. Preview a document every time a PR is raised
3. Build and publish the final version of the document every time a branch is merged to the main branch.

