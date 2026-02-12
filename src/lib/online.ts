import { getCollection } from 'astro:content';

export async function getSortedOnlineStories() {
	return (await getCollection('online')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}

export async function getSortedMentions() {
	return (await getCollection('mentions')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}
