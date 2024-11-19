import { useState } from "react"
import Note from "../components/Notes"

const App = (props) => {
	const [notes, setNotes] = useState(props.notes)
	const [newNote, setNewNote] = useState("a new note...")
	const [showAll, setShowAll] = useState(true)

	const notesToShow = showAll ? notes : notes.filter((note) => note.important === true)
	const addNote = (event) => {
		event.preventDefault()
		console.log("button clicked", event.target)
		setNotes(notes.concat({ content: newNote, important: Math.random() < 0.5, id: String(notes.length + 1) }))
		setNewNote("")
	}
	const handleNoteChange = (event) => {
		setNewNote(event.target.value)
		//const a = notes.concat(newNote)
		console.log(">>>", newNote)
	}
	const handleToggle = () => {
		setShowAll(!showAll)
	}

	return (
		<div>
			<h1>Notes</h1>
			<ul>
				{notesToShow.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<button onClick={handleToggle}>show {showAll ? "important" : "all"}</button>
			<form onSubmit={addNote}>
				<input onChange={handleNoteChange} value={newNote} />
				<button type="submit">save</button>
			</form>
		</div>
	)
}

export default App
