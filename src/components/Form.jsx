const Form = ({ newPerson, newNumber, addContact, handleContactChange, handleNumberChange }) => (
	<form onSubmit={addContact}>
		<div>
			name: <input onChange={handleContactChange} value={newPerson} />
		</div>
		<div>
			number: <input onChange={handleNumberChange} value={newNumber} />
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
)
export default Form
