import { readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightKbd from 'starlight-kbd';
import starlightGitHubAlerts from 'starlight-github-alerts';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// Everything except the FAQ moved under /docs/ — keep the old URLs (and their /ru/ versions) working.
const LEGACY_PAGES = [
	'introduction/overview',
	'software/apps',
	'self-hosting/canary',
	'self-hosting/cheat-sheet',
	'self-hosting/dns-for-containers',
	'self-hosting/firehol',
	'self-hosting/geoblock',
	'self-hosting/nextcloud',
	'self-hosting/simplelogin',
	'self-hosting/swag',
	'other/arch',
	'other/iphone',
	'other/nothingphone',
	'other/wush',
];
const legacyRedirects = Object.fromEntries(
	['', '/ru'].flatMap((prefix) => LEGACY_PAGES.map((page) => [`${prefix}/${page}`, `/docs/${page}/`]))
);

// Russian moved from /ru/ to the root locale (English is under /en/ now) — keep the old /ru/ URLs working.
const RU_PAGES = readdirSync(new URL('./src/content/docs/', import.meta.url), { recursive: true })
	.filter((file) => /\.mdx?$/.test(file) && !file.startsWith('en/'))
	.map((file) => file.replace(/(^|\/)index\.mdx?$|\.mdx?$/, ''));
const ruRedirects = Object.fromEntries(
	RU_PAGES.map((page) => (page ? [`/ru/${page}`, `/${page}/`] : ['/ru', '/']))
);

export default defineConfig({
	site: 'https://wiki.dominants.link',
	redirects: { ...legacyRedirects, ...ruRedirects },
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
			},
		},
	},
	integrations: [
		starlight({
			plugins: [
				starlightGitHubAlerts(),
				starlightScrollToTop({
					showTooltip: false,
					borderRadius: '25',
				}),
				starlightKbd({
					globalPicker: false,
					types: [
						{ id: 'mac', label: 'macOS' },
						{ id: 'windows', label: 'Windows', default: true },
						{ id: 'linux', label: 'Linux' },
					]
				}),
				starlightSidebarSwipe(),
				// Two sections with their own sidebars: Wiki (/faq/) and Docs (/docs/), switched with the
				// Wiki / Docs buttons in the header (src/components/Header.astro).
				starlightSidebarTopics([
					{
						label: { en: 'Wiki', ru: 'Вики' },
						link: '/faq/',
						items: [
							{ label: 'FAQ', translations: { ru: 'Частые вопросы' }, slug: 'faq' },
							{
								label: 'Getting started',
								translations: { ru: 'Начало работы' },
								items: [
									{ label: 'Installation', translations: { ru: 'Установка' }, slug: 'faq/install' },
									{ label: 'Subscription & devices', translations: { ru: 'Подписка и устройства' }, slug: 'faq/subscription' },
									{ label: 'Payments', translations: { ru: 'Оплата' }, slug: 'faq/payments' }
								],
							},
							{
								label: 'Apps',
								translations: { ru: 'Приложения' },
								items: [
									{ label: 'Koala Clash', slug: 'faq/koala-clash' },
									{ label: 'FlClashX', slug: 'faq/flclashx' },
									{ label: 'Rabbit Hole', slug: 'faq/rabbit-hole' },
									{ label: 'Routers', translations: { ru: 'Роутеры' }, slug: 'faq/routers' }
								],
							},
							{
								label: 'Troubleshooting',
								translations: { ru: 'Решение проблем' },
								items: [
									{ label: 'Something is not working', translations: { ru: 'Что-то не работает' }, slug: 'faq/troubleshooting' },
									{ label: 'Routing rules', translations: { ru: 'Правила маршрутизации' }, slug: 'faq/routing-rules' }
								],
							},
							{
								label: 'Service',
								translations: { ru: 'Сервис' },
								items: [
									{ label: 'Rules & limits', translations: { ru: 'Правила и ограничения' }, slug: 'faq/limits' },
									{ label: 'Alerts channel', translations: { ru: 'Канал оповещений' }, slug: 'faq/alerts' },
									{ label: 'Support', translations: { ru: 'Поддержка' }, slug: 'faq/support' },
									{ label: 'Terms of service', translations: { ru: 'Условия использования' }, slug: 'faq/terms' }
								],
							},
						],
					},
					{
						label: { en: 'Docs', ru: 'Документация' },
						link: '/docs/',
						items: [
							{ label: 'Docs', translations: { ru: 'Документация' }, slug: 'docs' },
							{
								label: 'Introduction',
								translations: { ru: 'Введение' },
								items: [
									{ label: 'Overview', translations: { ru: 'Обзор' }, slug: 'docs/introduction/overview' }
								],
							},
							{
								label: 'Software',
								translations: { ru: 'Программы' },
								items: [
									{ label: 'Apps', translations: { ru: 'Приложения' }, slug: 'docs/software/apps' }
								],
							},
							{
								label: 'Self-hosting',
								items: [
									{ label: 'Canary', slug: 'docs/self-hosting/canary' },
									{ label: 'Cheat Sheet', translations: { ru: 'Шпаргалка' }, slug: 'docs/self-hosting/cheat-sheet' },
									{ label: 'DNS for Containers', translations: { ru: 'DNS для контейнеров' }, slug: 'docs/self-hosting/dns-for-containers' },
									{ label: 'Firehol', slug: 'docs/self-hosting/firehol' },
									{ label: 'Geoblock', slug: 'docs/self-hosting/geoblock' },
									{ label: 'Nextcloud', slug: 'docs/self-hosting/nextcloud' },
									{ label: 'Simplelogin', slug: 'docs/self-hosting/simplelogin' },
									{ label: 'SWAG', slug: 'docs/self-hosting/swag' }
								],
							},
							{
								label: 'Other',
								translations: { ru: 'Разное' },
								items: [
									{ label: 'Arch Linux', slug: 'docs/other/arch' },
									{ label: 'iPhone', slug: 'docs/other/iphone' },
									{ label: 'Nothing Phone', slug: 'docs/other/nothingphone' },
									{ label: 'Wush', slug: 'docs/other/wush' }
								],
							},
						],
					},
				])
			],
			title: 'TeamDominant',
			customCss: [
				'@fontsource-variable/inter',
				'@fontsource-variable/manrope',
				'./src/styles/custom.css',
			],
			favicon: '/favicon.svg',
			editLink: {
				baseUrl: 'https://github.com/TeamDominant/wiki/edit/main/docs/',
			},
			components: {
				Header: './src/components/Header.astro',
				Hero: './src/components/Hero.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
				MobileMenuFooter: './src/components/MobileMenuFooter.astro',
				PageTitle: './src/components/PageTitle.astro',
				Sidebar: './src/components/Sidebar.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			expressiveCode: {
				themes: ['github-dark-default', 'github-light-default'],
				styleOverrides: {
					borderRadius: '0.875rem',
					borderColor: 'var(--td-border)',
					codeBackground: 'var(--td-surface)',
					codeFontSize: '0.875rem',
					frames: {
						shadowColor: 'transparent',
						editorTabBarBackground: 'var(--td-muted)',
						editorActiveTabBackground: 'var(--td-surface)',
						editorActiveTabIndicatorTopColor: 'var(--td-brand)',
						editorTabBarBorderBottomColor: 'var(--td-border)',
						terminalTitlebarBackground: 'var(--td-muted)',
						terminalTitlebarBorderBottomColor: 'var(--td-border)',
						terminalBackground: 'var(--td-surface)',
						inlineButtonBorder: 'var(--td-border)',
					},
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TeamDominant/wiki' }],
			// Russian is the default language and lives at the root, English is under /en/.
			defaultLocale: 'root',
			locales: {
				root: { label: 'Русский', lang: 'ru' },
				en: { label: 'English', lang: 'en' },
			},
		}),
	],
});
