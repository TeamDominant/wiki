/**
 * Header links shown after the Wiki / Docs topic buttons (those come from `starlightSidebarTopics` in
 * astro.config.mjs). Labels are i18n keys (see `src/content/i18n/*.json`), paths are locale-less.
 */
export const NAV_LINKS = [{ label: 'nav.terms', path: '/faq/terms/' }] as const;

/** Support lives in the personal account on the website (the old support bot is retired). */
export const SUPPORT_URL = 'https://infra.dominants.link/';

/** Prefixes a locale-less path with the current locale (the root locale has no prefix). */
export function localizedPath(path: string, locale: string | undefined): string {
	return locale ? `/${locale}${path}` : path;
}
