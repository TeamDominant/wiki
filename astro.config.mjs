// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://wiki.teamdominant.ru",
	integrations: [
		starlight({
			title: 'TeamDominant',
			logo: {
				src: './src/assets/logo.png',
			},
			editLink: {
				baseUrl: "https://github.com/TeamDominant/wiki/edit/master/",
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TeamDominant/wiki' }],
			defaultLocale: "root",
			locales: {
				root: {
				label: "English",
				lang: "en",
				},
				ru: {
				label: "Русский",
				lang: "ru",
				},
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'introduction/overview' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
