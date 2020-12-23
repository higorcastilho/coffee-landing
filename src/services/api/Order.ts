import Http from '../http'

interface OrderInfoProps {
	name: string
	email: string
	phone: string
	address: string
	zip: string
	paymentMethod: string
	price: number
	quantity: string
	orderStatus: string
}

class Order {
	
	async createOrder (orderInfo: OrderInfoProps) {
		const payload = { path: '/manage-order', body: orderInfo }
		const response = await Http.post(payload)
		const data = await response.json() //quero o data.orderId pra passar pro activateSelectedPayment(data.orderId)
		console.log(data)
		return new Promise( (resolve, reject) => {
			const id = data.orderId
			if (id) resolve(id)
			else reject({error: 'Id not found'})
		})
	}
}

export default new Order()