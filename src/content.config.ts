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
			buyLinks: z.array(z.object({
				label: z.string(),
				url: z.string(),
			})).optional(),
		}),
});

export const collections = { livros };
