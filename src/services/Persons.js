import axios from "axios"

const getAll = async () => {
	try {
		const response = await axios.get("/api/persons")
		return response.data
	} catch (err) {
		console.log(">>>> err from getall", err.response?.data ?? err)
	}
}

const create = async (personObject) => {
	try {
		const resp = await axios.post("/api/persons", personObject)
		console.log(">>>>>> perob", resp.data)
		return resp.data
	} catch (err) {
		console.log(">>>> err from create", err.response?.data?.message)
		const errorMessage =
			err.response?.data?.errorType === "ValidationError" ? err.response?.data?.message : "An unknown error occurred while creating a contact."
		throw new Error(errorMessage)
		//throw new Error("err.response?.data ?? err")
	}
}

const remove = async (id, persons) => {
	try {
		const resp = await axios.delete(`/api/persons/${id}`)
		const modifiedData = persons.filter((note) => note.id !== id)
		console.log("??????????? mo", modifiedData)
		return modifiedData
	} catch (err) {
		throw new ("Err from delete contact", err.response?.data ?? err)()
	}
}
export default { getAll, create, remove }
