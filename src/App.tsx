import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
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
				path: "/category/:category", 
				element: <CategoryPage /> 
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