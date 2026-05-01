import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightKbd from 'starlight-kbd';
import starlightGitHubAlerts from 'starlight-github-alerts';

export default defineConfig({
	site: 'https://wiki.dominants.link',
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
				starlightThemeGalaxy(),
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
				})
			],
			title: 'TeamDominant',
			customCss: ['./src/styles/custom.css'],
			logo: { src: './src/assets/logo.svg' },
			favicon: './src/assets/logo.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TeamDominant/wiki' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: 'introduction/overview' }
					],
				},
				{
					label: 'Software',
					items: [
						{ label: 'Apps', slug: 'software/apps' },
						{ label: 'Betterfox', slug: 'software/betterfox' }
					],
				},
				{
					label: 'Self-hosting',
					items: [
						{ label: 'Canary', slug: 'self-hosting/canary' },
						{ label: 'Cheat Sheet', slug: 'self-hosting/cheat-sheet' },
						{ label: 'DNS for Containers', slug: 'self-hosting/dns-for-containers' },
						{ label: 'Firehol', slug: 'self-hosting/firehol' },
						{ label: 'Geoblock', slug: 'self-hosting/geoblock' },
						{ label: 'Nextcloud', slug: 'self-hosting/nextcloud' },
						{ label: 'Simplelogin', slug: 'self-hosting/simplelogin' },
						{ label: 'SWAG', slug: 'self-hosting/swag' }
					],
				},
				{
					label: 'Other',
					items: [
						{ label: 'Arch Linux', slug: 'other/arch' },
						{ label: 'iPhone', slug: 'other/iphone' },
						{ label: 'Nothing Phone', slug: 'other/nothingphone' },
						{ label: 'Wush', slug: 'other/wush' }
					],
				},
				{
					label: 'FAQ',
					items: [
						{ label: 'Koala-Clash', slug: 'faq/koala-clash' },
					],
				},
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'ru': { label: 'Russian', lang: 'ru' },
			},
		}),
	],
});
