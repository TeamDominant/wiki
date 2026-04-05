import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'

import { themes as prismThemes } from 'prism-react-renderer'

const siteUrl = process.env.DOCS_SITE_URL ?? 'https://wiki.dominants.link'
const baseUrl = process.env.DOCS_BASE_URL ?? '/'

const config: Config = {
    title: 'TeamDominant Wiki',
    tagline: 'Practical guides, answers, and real-world documentation.',
    favicon: 'img/favicon.svg',
    url: siteUrl,
    baseUrl,
    trailingSlash: false,
    organizationName: 'TeamDominant',
    projectName: 'wiki',
    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru']
    },

    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: 'throw'
        }
    },
    themes: ['@docusaurus/theme-mermaid'],

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'docs',
                    routeBasePath: 'docs',
                    sidebarPath: './sidebars.ts',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false,
                    editUrl: 'https://github.com/TeamDominant/wiki/tree/main/'
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],

    plugins: [
        async function mantinePlugin() {
            return {
                name: 'docusaurus-mantineui',
                configurePostCss(postcssOptions) {
                    // Appends Mantine-friendly PostCSS helpers used by the original panel theme.
                    // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
                    postcssOptions.plugins.push(require('postcss-preset-mantine'))
                    // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
                    postcssOptions.plugins.push(require('postcss-simple-vars'))
                    return postcssOptions
                }
            }
        },
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'faq',
                path: 'faq',
                routeBasePath: 'faq',
                sidebarPath: require.resolve('./sidebarsFaq.ts'),
                showLastUpdateAuthor: false,
                showLastUpdateTime: false,
                editUrl: 'https://github.com/TeamDominant/wiki/tree/main/'
            }
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false
        },
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: false
            }
        },
        navbar: {
            title: 'TeamDominant Wiki',
            logo: {
                alt: 'TeamDominant Wiki',
                src: 'logo/dark.svg',
                href: '/'
            },
            items: [
                {
                    to: '/docs/',
                    label: 'Docs',
                    position: 'left',
                    activeBaseRegex: '^/docs(?:/|$)'
                },
                {
                    to: '/faq/',
                    label: 'Faq',
                    position: 'left',
                    activeBaseRegex: '^/faq(?:/|$)'
                },
                {
                    href: 'https://github.com/TeamDominant',
                    label: 'GitHub',
                    position: 'right'
                },
                {
                    type: 'localeDropdown',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [{ label: 'Start here', to: '/docs/' }]
                },
                {
                    title: 'Faq',
                    items: [{ label: 'Common answers', to: '/faq/' }]
                },
                {
                    title: 'More',
                    items: [{ label: 'GitHub', href: 'https://github.com/TeamDominant' }]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} TeamDominant`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.vsDark
        }
    }
}

export default config
