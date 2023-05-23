import { useState } from 'react'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
]);

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<header>Header</header>
			<RouterProvider router={router}></RouterProvider>
			<footer>Footer</footer>
		</>
	)
}

export default App
