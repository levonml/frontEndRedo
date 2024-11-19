//import "../index.css"
const Notification = ({ message }) => {
	if (message === null) {
		return null
	}

	return <div className="notification">{message}</div>
}
const ErrorNot = ({ message }) => {
	if (message === null) {
		return null
	}

	return <div className="error">{message}</div>
}
export { ErrorNot, Notification }
