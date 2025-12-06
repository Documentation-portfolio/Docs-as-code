// docusaurus.config.js
module.exports = {
  title: 'Docs as Code',
  tagline: 'Documentation portfolio',
  favicon: 'img/favicon.ico',

  // GitHub Pages settings — exact values for your repo
  url: 'https://Documentation-portfolio.github.io',
  baseUrl: '/docs-as-code/',

  organizationName: 'Documentation-portfolio',
  projectName: 'docs-as-code',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  themeConfig: {
    navbar: {
      title: 'Docs as Code',
      logo: { alt: 'Docs logo', src: 'img/logo.svg' },
      items: [
        { to: 'docs/', label: 'Docs', position: 'left' },
        { href: 'https://github.com/Documentation-portfolio/docs-as-code', label: 'GitHub', position: 'right' }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Getting Started', to: 'docs/' }] }
      ],
      copyright: `© ${new Date().getFullYear()} Documentation-portfolio`,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};
