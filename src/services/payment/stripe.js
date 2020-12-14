import { loadStripe } from '@stripe/stripe-js'
import Http from '../http'

const PK_STRIPE = 'pk_test_51HkktyJc2DIm0ASQXNJkULs2w7SFabjvHbdC6Xi5koXGQxWU4JGfU9AFdvnpsssQ009i6MYyHZalYM3E8IMQJ62b008eLiJPxk'
const stripePromise = loadStripe(PK_STRIPE)

export default async function stripeCheckout(value, quantity, orderId) {
	const stripe = await stripePromise
	const payload = { path: '/create-customer-order/stripe', body: {value, quantity, orderId}}
	const response = await Http.post(payload)
	const session = await response.json()

	// When the customer clicks on the button, redirect them to Checkout.
	const result = await stripe.redirectToCheckout({
		sessionId: session.id
	})

	if (result.error) {
		console.log(result.error.message)
	}
}