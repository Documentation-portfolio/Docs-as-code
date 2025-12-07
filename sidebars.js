// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsAsCodeSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Documents',     // your new top-level name
      collapsed: false,
      items: [
        'guides/ci-cd-configuration',

        // Workflow Setup as a category with ONLY its subpages (no duplicate "workflow" doc)
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

        // other top-level guides can follow here
      ],
    },
  ],
};

export default sidebars;
