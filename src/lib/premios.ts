import { getCollection } from 'astro:content';

export async function getSortedAwards() {
	return (await getCollection('premios')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}
