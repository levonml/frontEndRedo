const Person = ({ person, deleteCont }) => {
	return (
		<div style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
			<div style={{ paddingRight: "10px" }}>
				{person.name} {person.number}
			</div>
			<button onClick={deleteCont}> delete</button>
		</div>
	)
}
export default Person
