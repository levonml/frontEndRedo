import { useState, useEffect } from "react"

import Person from "./components/Persons"
import personService from "./services/Persons"
import Form from "./components/Form"
import { ErrorNot, Notification } from "./components/Notifications"
import "./index.css"

const App = () => {
	const [persons, setPersons] = useState([])
	const [newPerson, setNewPerson] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [errorMessage, setErrorMessage] = useState(null)
	const [notificationMessage, setNotificationMessage] = useState(null)

	useEffect(() => {
		const getData = async () => {
			try {
				console.log("inside effect")
				const allpersons = await personService.getAll()
				setPersons(allpersons)
			} catch (err) {
				console.log(">>>>err", err.response?.data ?? err)
			}
		}
		getData()
	}, [])

	const handleContactChange = (event) => {
		event.preventDefault()
		setNewPerson(event.target.value)
	}
	const handleNumberChange = (event) => {
		event.preventDefault()
		setNewNumber(event.target.value)
	}

	const addContact = async (event) => {
		const duplicate = persons.some((person) => person.name === newPerson)
		event.preventDefault()
		if (duplicate) {
			alert(`${newPerson} is already added to phonebook. Do you want to add it again?`)
		}
		if (!duplicate || (duplicate && window.confirm)) {
			{
				const personObject = {
					name: newPerson,
					number: newNumber,
				}
				try {
					await personService.create(personObject)
					const allpersons = await personService.getAll()
					setPersons(allpersons)
					setNewNumber("")
					setNewPerson("")
					setNotificationMessage(`${newPerson} is added to phonebook`)
					setTimeout(() => {
						setNotificationMessage(null)
					}, 3000)
				} catch (err) {
					console.log(">>> eror from frontend crate ", err.message)
					setErrorMessage(err.message)
					setTimeout(() => {
						setErrorMessage(null)
					}, 3000)
				}
			}
		}
	}

	const handleDeleteCont = async (id) => {
		try {
			const modifiedData = await personService.remove(id, persons)
			console.log("<<<<<<< deleted --", modifiedData)
			setPersons(modifiedData)
			setErrorMessage(`A preson with ID ${id} is deleted from the phonebook`)
			setTimeout(() => {
				setErrorMessage(null)
			}, 3000)
		} catch (err) {
			setErrorMessage("something went wrong")
			setTimeout(() => {
				setErrorMessage(null)
			}, 3000)
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={notificationMessage} />
			<ErrorNot message={errorMessage} />
			<Form
				newPerson={newPerson}
				newNumber={newNumber}
				addContact={addContact}
				handleContactChange={handleContactChange}
				handleNumberChange={handleNumberChange}
			/>

			<h2>Contacts</h2>
			<div>
				{persons?.length ? persons.map((person) => <Person key={person.id} person={person} deleteCont={() => handleDeleteCont(person.id)} />) : <></>}
			</div>
		</div>
	)
}

export default App
