

const apiBaseUrl = 'http://localhost:3001'

type Article = {
	name: string;
	imageUrl: string;
	sport: string;
	type: string;
	price: number;
}
type Category = {
	id: string;
	title: string;
	subtitle: string;
}

async function getArticlesByType(type: string): Promise<Article[]> {
	return getArticles(`type=${type}`);
}
async function getArticlesBySport(sport: string): Promise<Article[]> {
	return getArticles(`sport=${sport}`);
}
async function getArticles(query?: string): Promise<Article[]> {
	const response = await fetch(`${apiBaseUrl}/articles?${query}`)

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return response.json() as Promise<Article[]>;
}

async function getCategoryData(category: string): Promise<Category[]> {
	const response = await fetch(`${apiBaseUrl}/categories?id=${category}`)

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return response.json() as Promise<Category[]>;
}

export { 
	getArticles, 
	getArticlesBySport, 
	getArticlesByType, 
	getCategoryData
};
export type { Article, Category };