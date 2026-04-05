# TeamDominant Wiki

`wiki` is the new Docusaurus-based documentation site for TeamDominant.

It preserves the visual style and custom theme layer from `panel`, while the actual content, translations, logos, and media were migrated from the legacy Mintlify docs source.

## Structure

- `docs/`: main documentation pages
- `faq/`: FAQ pages kept as a separate top-level section
- `i18n/ru/`: Russian translations for both docs instances
- `src/`: theme overrides, homepage, and Mintlify-compatibility components
- `static/`: migrated logos, screenshots, images, and other public assets

## Development

This project expects Node.js `>=22`.

```bash
npm install
npm run start
```

For a production build:

```bash
npm run build
```

## GitHub Pages and custom domain

The site is configured for root hosting:

- `DOCS_SITE_URL` controls the public site URL
- `DOCS_BASE_URL` defaults to `/`

Example:

```bash
DOCS_SITE_URL=https://wiki.example.com DOCS_BASE_URL=/ npm run build
```

If you deploy with a GitHub Pages custom domain, add your real domain to `static/CNAME` before publishing.
