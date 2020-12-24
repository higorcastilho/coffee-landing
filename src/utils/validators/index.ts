export const emailValidator = (email: string) => {		
	const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	const isValid = email.match(mailFormat)
	return isValid
}