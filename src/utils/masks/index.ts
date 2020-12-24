export const phoneMask = (value: string) => {
	if (value.length < 11) {
		return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d{4})(\d{4})/, '($1)$2-$3')
		.replace(/(-\d{4})\d+?$/, '$1')
	}
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3')
		.replace(/(-\d{4})\d+?$/, '$1')
}

export const cepMask = (value: string) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{5})(\d{3})/, '$1-$2')
		.replace(/(-\d{3})\d+?$/, '$1')
}

export const nameMask = (name: string) => {
	return name
		.replace(/\d/g, '')
		.replace(/[.!#$%&'*+/=?^_`{|}~-]/g, '')
}

export const addressMask = (name: string) => {
	return name
		.replace(/[!#$%&'*+/=?^_`{|}~]/g, '')
}