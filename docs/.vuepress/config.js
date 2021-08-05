module.exports = {
  title: 'docpress',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/assets/images/docpress.png' }]],
  serviceWorker: true,
  plugins: [
    'tabs',
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.content img',
        delay: 1000,
        options: {
          margin: 24,
          scrollOffset: 0,
        },
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        // provide i18n redirection
        // it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
        locales: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-55480073-15', // UA-00000000-0
      },
    ],
  ],
  markdown: {
    toc: { includeLevel: [2] },
    extendMarkdown: (md) => {
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-footnote'));
    },
  },
  locales: {
    '/ja/': {
      lang: 'ja',
      description: 'template of vuepress',
    },
  },
  themeConfig: {
    repo: 'ShunichirouKamino/docpress',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    locales: {
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        nav: [
          { text: 'Home', link: '/ja/' },
          { text: 'Users', link: '/ja/guide/' },
          { text: 'Developers', link: '/ja/dev/' },
          {
            text: 'Inquiry',
            items: [
              {
                text: 'Bugs',
                link: 'https://github.com/ShunichirouKamino/docpress/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D',
              },
              {
                text: 'Question',
                link: 'https://github.com/ShunichirouKamino/docpress/issues/new?assignees=&labels=question&template=free-inquiry.md&title=',
              },
            ],
          },
        ],
        sidebar: {
          '/ja/guide/': [
            '/ja/guide/',
            {
              title: 'Tutorial',
              collapsable: false,
              children: ['/ja/guide/getting-started/tutorial.md'],
            },
          ],
          '/ja/dev/': [
            '/ja/dev/',
            {
              title: 'Developers',
              collapsable: false,
              children: ['/ja/dev/developers/dev1.md', '/ja/dev/developers/dev2.md'],
            },
          ],
        },
      },
    },
  },
};
