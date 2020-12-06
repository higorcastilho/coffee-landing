import Http from '../http'

class Order {
	
	async createOrder (orderInfo) {
		const payload = { path: '/customer-order/create-order', body: {orderInfo} }
		const response = await Http.post(payload)
		const data = await response.json() //quero o data.orderId pra passar pro activateSelectedPayment(data.orderId)
		return new Promise( (resolve, reject) => {
			const id = data.orderId
			if (id) resolve(id)
			else reject({error: 'Id not found'})
		})
	}
}

export default new Order