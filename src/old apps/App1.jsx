const Part = (p) => {
	return (
		<div>
			{p.part} {p.ex}
		</div>
	)
}
const Header = ({ course }) => {
	//	console.log("------------------", course)
	return (
		<>
			<h2>{course.name}</h2>
		</>
	)
}
const Content = ({ content }) => {
	console.log("------------------", content.parts[0])
	return (
		<>
			<Part part={content.parts[0].name} ex={content.parts[0].exercises} />
			<Part part={content.parts[1].name} ex={content.parts[1].exercises} />
		</>
	)
}
const Total = ({ course }) => {
	return (
		<>
			<p>The total number of exes is {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
		</>
	)
}
const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{ name: "Fundamentals of React", exercises: 10 },
			{
				name: "Using props to pass data",
				exercises: 7,
			},

			{
				name: "State of a component",
				exercises: 14,
			},
		],
	}
	return (
		<div>
			<Header course={course} />
			<Content content={course} />
			<Total course={course} />
		</div>
	)
}

export default App
