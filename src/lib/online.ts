import { getCollection } from 'astro:content';

export async function getSortedOnlineStories() {
	return (await getCollection('online')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}
