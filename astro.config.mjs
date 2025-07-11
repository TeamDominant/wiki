// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: "https://wiki.amdcloud.kz",
	integrations: [
		starlight({
			plugins: [
				starlightBlog({
					title: 'Changelog',
					prefix: 'changelog',
					authors: {
						prettyleaf: {
							name: 'Ivan Kolesnikov',
							picture: 'https://github.com/prettyleaf.png',
							url: 'httpsL://github.com/prettyleaf',
							title: 'Founder'
						}
					},
					metrics: {
						readingTime: true,
						words: 'total',
					},
				}),
			],
			title: 'TeamDominant',
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: "https://github.com/TeamDominant/wiki/edit/master/",
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TeamDominant/wiki' }],
			// defaultLocale: "root",
			// locales: {
			// 	root: {
			// 	label: "English",
			// 	lang: "en",
			// 	},
			// 	ru: {
			// 	label: "Русский",
			// 	lang: "ru",
			// 	},
			// },
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: 'introduction/overview', badge: { text: 'WIP', variant: 'caution' } },
					],
				},
				{
					label: 'Software',
					items: [
						{ label: 'Apps', slug: 'software/apps', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Betterfox', slug: 'software/betterfox', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Clash Meta', slug: 'software/clash-meta', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Clash Verge Rev', slug: 'software/clash-verge', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Discord', slug: 'software/discord', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'FlClash', slug: 'software/flclash', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'sing-box', slug: 'software/sing-box', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Telegram', slug: 'software/telegram', badge: { text: 'WIP', variant: 'caution' } },
					],
				},
				{
					label: 'Self-hosting',
					items: [
						{ label: 'Canary', slug: 'self-hosting/canary', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Cheat Sheet', slug: 'self-hosting/cheat-sheet', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'DNS for Containers', slug: 'self-hosting/dns-for-containers', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Firehol', slug: 'self-hosting/firehol', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'GeoBlock', slug: 'self-hosting/geoblock', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Jfscan', slug: 'self-hosting/jfscan', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Nextcloud', slug: 'self-hosting/nextcloud', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Scripts', slug: 'self-hosting/scripts', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Simplelogin', slug: 'self-hosting/simplelogin', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'SWAG', slug: 'self-hosting/swag', badge: { text: 'WIP', variant: 'caution' } },
					],
				},
				{
					label: 'Other',
					items: [
						{ label: 'Arch Linux', slug: 'other/archlinux', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'iPhone', slug: 'other/iphone', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Nothing Phone', slug: 'other/nothingphone', badge: { text: 'WIP', variant: 'caution' } },
						{ label: 'Wush', slug: 'other/wush', badge: { text: 'WIP', variant: 'caution' } },
					],
				},
			],
		}),
	],
});
