import { getCollection } from 'astro:content';

export async function getSortedBooks() {
	return (await getCollection('livros')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}
