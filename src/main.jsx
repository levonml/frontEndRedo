import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import axios from "axios"

const notes = [
	{
		id: "1",
		content: "HTML is easy",
		important: true,
	},
]
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App notes={notes} />
	</StrictMode>
)
