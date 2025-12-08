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
            'guides/ci-cd-workflow-setup/workflow-intro',
            'guides/validation',
            'guides/deployment',
            'guides/pr-preview',
          ],
        },
      ],
    },

  ],
};

export default sidebars;
