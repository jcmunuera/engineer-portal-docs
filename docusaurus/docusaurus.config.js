// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Knowledge Base for Engineers',
  tagline: 'Engineering Portal Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jcmunuera.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/engineer-portal-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'github.com/jcmunuera', // Usually your GitHub org/user name.
  projectName: 'engineer-portal-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add Mermaid theme to the themes array
  themes: ['@docusaurus/theme-mermaid'],

  // Enable Mermaid parsing in Markdown
  markdown: {
    mermaid: true,
  },

  plugins: [
    require.resolve('./src/plugins/first-doc-path.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: '../docs',
          routeBasePath: '/docs/',
          editUrl:
            'https://github.com/jcmunuera/engineer-portal-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'My Site',
        hideOnScroll: false,
        logo: {
          alt: 'Knowledge Area Portal Logo',
          src: 'img/librox32-light.png', // Ruta al logo personalizado
          srcDark: 'img/librox32-dark.png',
          href: '/', // Redirige el logo a la documentación
          target: '_self',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Knowledge Area',
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
                label: 'Fusion Engineering Portal',
                to: '/docs/FusionEngineeringPortal',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'MS Teams',
                href: 'https://teams.microsoft.com/l/channel/19%3a4f0b1c5d6e2b4c8f9e7d8c9b0a1b2c3d%40thread.tacv2/Engineering%2520Portal',
              },
              {
                label: 'email',
                href: 'mailto:support@example.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: 'https://example.com/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jcmunuera/engineer-portal-docs',
              },
            ],
          },
        ],
        copyright: `Fusion Engineering Portal - ${new Date().getFullYear()} Knowledge Area. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
