// docusaurus.config.js
// Minimal working Docusaurus config for your project

// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Portfolio',
  tagline: 'By Riya Chawla',
  url: 'https://Documentation-portfolio.github.io', // change to your site URL (used for sitemap)
  baseUrl: '/Docs-as-code/',
  favicon: 'img/favicon.ico',
  organizationName: 'Documentation-portfolio', // GitHub org/user
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
            href: 'https://github.com/Documentation-portfolio/docs-as-code',
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
