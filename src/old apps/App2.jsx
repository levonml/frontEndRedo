import { useState } from "react"

const anecdotes = [
	"If it hurts, do it more often.",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	"The only way to go fast, is to go well.",
]

const Title = ({ title }) => <h2>{title}</h2>
const Button = ({ chrtik, text }) => <button onClick={chrtik}>{text}</button>

const Stats = ({ left, right, mid }) => {
	return (
		<>
			<p>good {left}</p>
			<p>neutral {mid}</p>
			<p>bad {right}</p>
			<p>all {left + right + mid}</p>
			<p>avarage {(left - right) / (left + right + mid)}</p>
		</>
	)
}
const VotesStats = ({ votes }) => <div>has {votes} votes</div>
const VoteBut = ({ next, text }) => <button onClick={next}>{text}</button>
const AnecBut = ({ next, text }) => <button onClick={next}>{text}</button>
const App = () => {
	const arr = Array(anecdotes.length).fill(0)

	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [mid, setMid] = useState(0)
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(arr)
	console.log(">>>>>", votes)
	const handleLeftClick = () => {
		setLeft(left + 1)
	}
	const handleRightClick = () => {
		setRight(right + 1)
	}
	const handleMidClick = () => {
		setMid(mid + 1)
	}
	const newVotes = () => {
		const updatedVotes = [...votes]
		updatedVotes[selected]++
		return updatedVotes
	}
	const handleNextAnec = () => setSelected() //setSelected(Math.floor(Math.random() * anecdotes.length))
	const handleVotes = () => setVotes(newVotes(a))

	return (
		<div>
			{/* <Title title="give feedback" />
			<Button chrtik={handleLeftClick} text="left" />
			<Button chrtik={handleMidClick} text="neutral" />
			<Button chrtik={handleRightClick} text="right" />
			<Stats left={left} right={right} mid={mid} /> */}
			<p>{anecdotes[selected]}</p>
			<VotesStats votes={votes[selected]} />
			<VoteBut next={handleVotes} text="vote" />
			<AnecBut next={handleNextAnec} text="next anecdote" />
		</div>
	)
}

export default App
