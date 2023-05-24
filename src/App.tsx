import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import CategoryPage, { loader as categoryLoader } from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./Layout";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ 
				path: "/", 
				element: <HomePage /> 
			}, { 
				path: "/items/:filter/:filterVal",
				element: <CategoryPage />,
				loader: categoryLoader
			}, { 
				path: "/about",
				element: <AboutPage /> 
			},
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;