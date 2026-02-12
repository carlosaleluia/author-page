import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const livros = defineCollection({
	loader: glob({ base: './src/content/livros', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			coverImage: z.string().optional(),
			goodreadsUrl: z.string().url().optional(),
			buyLinks: z.array(z.object({
				label: z.string(),
				url: z.string(),
			})).optional(),
		}),
});

const online = defineCollection({
	loader: glob({ base: './src/content/online', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		coverImage: z.string().optional(),
		externalUrl: z.string().url(),
		publication: z.string().optional(),
		description: z.string().optional(),
		language: z.string().optional(),
	}),
});

const mentions = defineCollection({
	loader: glob({ base: './src/content/mentions', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		coverImage: z.string().optional(),
		externalUrl: z.string().url(),
		source: z.string().optional(),
		description: z.string().optional(),
		language: z.string().optional(),
	}),
});

const premios = defineCollection({
	loader: glob({ base: './src/content/premios', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		coverImage: z.string().optional(),
		externalUrl: z.string().url().optional(),
		organization: z.string(),
		placement: z.string().optional(),
		description: z.string().optional(),
	}),
});

export const collections = { livros, online, mentions, premios };
