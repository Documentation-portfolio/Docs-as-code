// docusaurus.config.js
// Minimal working Docusaurus config for your project

// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs-as-Code',
  tagline: 'Documentation site',
  url: 'https://example.com', // change to your site URL (used for sitemap)
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'your-github-username-or-org', // GitHub org/user
  projectName: 'docs-as-code', // repo name

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs', // docs served under /docs
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation Portfolio by Riya',
        logo: {
          alt: 'Docs-as-Code Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsAsCodeSidebar', // <-- must match sidebars.js
            position: 'left',
            label: 'Documentation',
          },
          // Add other navbar items here
          {
            href: 'https://github.com/your-github-username/docs-as-code',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer optional — keep minimal to avoid errors
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Docs-as-Code`,
      },
    }),
};

export default config;
