
// at top of docusaurus.config.js
const isNetlify = process.env.NETLIFY === 'true' || process.env.CONTEXT === 'deploy-preview';

module.exports = {
  // ...
  // Use GitHub Pages subpath for production (example), but root for Netlify previews
  baseUrl: isNetlify ? '/' : '/Docs-as-code/',
  // ...
};

// @ts-check
// Note: type annotations allow type checking and IDEs to inspect type of config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- Site Metadata ---
  title: "Docs as Code", 
  tagline: 'Documentation deployed to GitHub Pages',
  favicon: 'img/favicon.ico',

  // --- GitHub Pages Deployment Configuration (CRITICAL FIXES HERE) ---
  
  // 1. Your Organization/User Domain
  url: 'https://documentation-portfolio.github.io', 
  
  // 2. Your Repository Name (MUST match the name exactly, including capitalization)
  // This fixes the 'baseUrl' error shown in the image and the broken links.
  baseUrl: '/Docs-as-code/', 

  // GitHub Pages deployment config.
  organizationName: 'documentation-portfolio', // Your GitHub organization/user name.
  projectName: 'Docs-as-code', // Your repo name.
  trailingSlash: false, // Recommended for GitHub Pages deployments

  // --- Build Settings ---
  // Ensure this is set to 'throw' or 'warn' to handle broken links
  onBrokenLinks: 'throw', 
  onBrokenMarkdownLinks: 'warn',

  // Fix for the Docusaurus v4 deprecation warning
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: (params) => {
        console.warn(`[onBrokenMarkdownLinks] Source: ${params.filePath}, Link: ${params.link}`);
      },
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/documentation-portfolio/Docs-as-code/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/documentation-portfolio/Docs-as-code/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs as Code', 
        logo: {
          alt: 'My Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          // This uses 'docSidebar' to correctly link to the docs index
          {
            type: 'docSidebar', 
            sidebarId: 'tutorialSidebar', 
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/documentation-portfolio/Docs-as-code',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial Intro',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docs as Code Site. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;