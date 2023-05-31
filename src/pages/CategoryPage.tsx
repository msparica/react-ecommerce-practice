import { Await, LoaderFunction, defer, useLoaderData, useNavigate } from "react-router-dom";
import { Article, Category, getArticlesBySport, getArticlesByType, getCategoryData } from "../utils/data";
import React from "react";


export const loader = (async ({ params }) => {
	const categoryPromise = getCategoryData(params.filterVal as string);

	const articlesPromise = params.filter === "type"
		? getArticlesByType(params.filterVal as string)
		: getArticlesBySport(params.filterVal as string);

	return defer({
		data: Promise.all([ categoryPromise, articlesPromise ])
	})
}) satisfies LoaderFunction;

function CategoryPage() {
	const loaderData = useLoaderData() as { data: Promise<[Category, Article[]]> };
	const navigate = useNavigate();
	return ( 
		<React.Suspense fallback={ <section><h3>Loading category page...</h3></section>} >
			<Await
				resolve={loaderData.data}
				errorElement={ <section><h3>Error loading category page!</h3></section> }
			>
				{(data: [Category[], Article[]]) => {
					const [categories, articles] = data;
					
					if (categories.length === 0) navigate('/404');

					const [category] = categories;

					return <section>
						<h1>{category.title}</h1>
						<h2>{category.subtitle}</h2>
						
						{articles.map(i => <p>{i.name}</p>)}
					</section>
				}}
			</Await>
		</React.Suspense>
	);
}

export default CategoryPage;