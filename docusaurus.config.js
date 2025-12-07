// @ts-check
// Note: type annotations allow type checking and IDEs to inspect the config type

import { themes as prismThemes } from 'prism-react-renderer';

// Detect Netlify Deploy Preview or Netlify Production
const isNetlify = process.env.NETLIFY === 'true';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- Site Metadata ---
  title: "Docs as Code",
  tagline: "Documentation deployed to GitHub Pages",
  favicon: "img/favicon.ico",

  // --- Required URL fields ---
  // Base site URL → Use your GitHub Pages root URL
  url: "https://documentation-portfolio.github.io",

  // Dynamic baseUrl:
  // - On Netlify (including Deploy Previews): use root "/"
  // - On GitHub Pages: use repo subpath "/Docs-as-code/"
  baseUrl: isNetlify ? "/" : "/Docs-as-code/",

  organizationName: "documentation-portfolio",
  projectName: "Docs-as-code",
  trailingSlash: false,

  // --- Build settings ---
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: (params) => {
        console.warn(
          `[onBrokenMarkdownLinks] Source: ${params.filePath}, Link: ${params.link}`
        );
      },
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/documentation-portfolio/Docs-as-code/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/documentation-portfolio/Docs-as-code/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Docs as Code",
      logo: {
        alt: "My Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/documentation-portfolio/Docs-as-code",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial Intro",
              to: "/docs/intro",
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
  },
};

export default config;
