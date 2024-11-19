const Part = ({ part }) => {
	return (
		<li>
			{part.name} {part.exercises}
		</li>
	)
}
const Content = ({ parts }) => {
	return (
		<ul>
			{parts.map((part) => (
				<Part key={part.id} part={part} />
			))}
		</ul>
	)
}
export default Content
