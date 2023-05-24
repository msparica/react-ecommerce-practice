import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { Article, Category, getArticlesBySport, getArticlesByType, getCategoryData } from "../utils/data";


export const loader = (async ({ params }) => {
	const categoryData = await getCategoryData(params.filterVal as string);

	if (categoryData.length === 0) {
		return redirect('/404');
	}

	const articles = params.filter === "type"
		? await getArticlesByType(params.filterVal as string)
		: await getArticlesBySport(params.filterVal as string);

	// await new Promise(r => setTimeout(r, 1000));

	return { categoryData: categoryData[0], articles };
}) satisfies LoaderFunction;

function CategoryPage() {
	const { categoryData, articles } = useLoaderData() as { categoryData: Category, articles: Article[] };

	return ( 
		<section>
			<h1>{categoryData.title}</h1>
			<h2>{categoryData.subtitle}</h2>
			
			{articles.map(i => <p>{i.name}</p>)}
		</section>
	);
}

export default CategoryPage;