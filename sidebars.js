// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsAsCodeSidebar: [
    'intro',

    // Existing Docs-as-Code category
    {
      type: 'category',
      label: 'Docs-as-Code CI/CD Workflow Configuration',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'guides/docs-as-code-ci-cd-workflow',
      },
      items: [
        'guides/ci-cd-configuration',
        {
          type: 'category',
          label: 'Workflow Setup',
          collapsed: false,
          items: [
            'guides/validation',
            'guides/deployment',
            'guides/pr-preview',
          ],
        },
      ],
    },

    // NEW: GitHub Actions CI/CD Pipeline Documentation category
    {
      type: 'category',
      label: 'GitHub Actions CI/CD Pipeline Documentation',
      collapsed: false,
      link: {
        // optional: you can create a landing doc for this category (recommended)
        type: 'doc',
        id: 'guides/github-actions-ci-cd-pipeline-docs' // create this doc (see notes below)
      },
      items: [
        'guides/ci-cd-pipeline-workflow',
        'guides/troubleshoot-workflows',
      ],
    },
  ],
};

export default sidebars;
