import { useParams } from "react-router-dom";

function CategoryPage() {
	const { category } = useParams();

	return ( 
		<section>
			Category Page: <span>{category}</span>
		</section>
	);
}

export default CategoryPage;