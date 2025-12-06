// @ts-check
// Note: type annotations allow type checking and IDEs to inspect type of config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- Site Metadata ---
  title: "Riya's Docs as Code", // Main site title in browser tab/metadata
  tagline: 'Documentation deployed to GitHub Pages',
  favicon: 'img/favicon.ico',

  // --- GitHub Pages Deployment Configuration (FIXED FOR BROKEN LINKS) ---
  
  // 1. GitHub Username for the domain
  url: 'https://RiyaChawla-111.github.io', 
  
  // 2. Repository Name (MUST match the name exactly, including capitalization)
  // This serves as the path prefix and resolves the broken link issue.
  baseUrl: '/Docs-as-code/', 

  // GitHub Pages deployment config.
  organizationName: 'RiyaChawla-111', // Your GitHub user name.
  projectName: 'Docs-as-code', // Your repo name.
  trailingSlash: false, // Recommended for GitHub Pages deployments

  // --- Build Settings ---
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
          // Edit URL should also use your user/repo name
          editUrl:
            'https://github.com/RiyaChawla-111/Docs-as-code/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/RiyaChawla-111/Docs-as-code/tree/main/',
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
        // Your confirmed navbar title
        title: 'Docs as Code', 
        logo: {
          alt: 'My Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          // FIX: Using 'docSidebar' with the correct ID for the Docs link.
          {
            type: 'docSidebar', 
            // 3. Main Sidebar ID
            sidebarId: 'tutorialSidebar', 
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/RiyaChawla-111/Docs-as-code',
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
                to: '/docs/intro', // Link to your first document's slug
              },
            ],
          },
          // You can customize the rest of the links here
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