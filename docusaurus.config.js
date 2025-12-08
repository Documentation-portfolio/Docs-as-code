// docusaurus.config.js
// Minimal working Docusaurus config for your project

// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Portfolio',
  tagline: 'By Riya Chawla',

  // GitHub Pages URL structure
  url: 'https://Documentation-portfolio.github.io',
  baseUrl: '/Docs-as-code/',
  trailingSlash: true, // IMPORTANT for GitHub Pages to avoid 404s

  favicon: 'img/favicon.ico',

  // GitHub org/repo
  organizationName: 'Documentation-portfolio',
  projectName: 'Docs-as-code', // MUST match exact GitHub repo name (fixes deployment)

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          // Default docs route: https://Documentation-portfolio.github.io/Docs-as-code/docs/
          routeBasePath: 'docs',

          // Good practice for GitHub Pages
          editLocalizedFiles: false,
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
            sidebarId: 'docsAsCodeSidebar', // must match sidebars.js
            position: 'left',
            label: 'Documentation',
          },

          {
            href: 'https://github.com/Documentation-portfolio/Docs-as-code',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Docs-as-Code`,
      },
    }),
};

export default config;
