// @ts-check

const config = {
  title: 'Docs as Code',
  tagline: 'Documentation Portfolio',
  favicon: 'img/favicon.ico',

  // --- REQUIRED FOR GITHUB PAGES DEPLOYMENT ---
  organizationName: 'Documentation-portfolio',       // GitHub org/user
  projectName: 'Docs-as-code',                       // Repo name

  url: 'https://documentation-portfolio.github.io',  // GitHub Pages URL
  baseUrl: '/Docs-as-code/',                         // MUST match the repo folder

  deploymentBranch: 'gh-pages',                      // Your Pages branch

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs as Code',
      items: [
        {
          href: 'https://github.com/Documentation-portfolio/Docs-as-code',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()}`,
    },
  },
};

module.exports = config;
