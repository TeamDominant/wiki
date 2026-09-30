import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema} from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			// Header labels, see src/nav.ts
			extend: z.object({
				'nav.terms': z.string().optional(),
				'nav.support': z.string().optional(),
			}),
		}),
	}),
};
