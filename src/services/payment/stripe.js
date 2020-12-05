import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51HkktyJc2DIm0ASQXNJkULs2w7SFabjvHbdC6Xi5koXGQxWU4JGfU9AFdvnpsssQ009i6MYyHZalYM3E8IMQJ62b008eLiJPxk")

export default async function stripeCheckout(value, quantity, orderId) {
	const stripe = await stripePromise

	const response = await fetch('http://localhost:5000/api/v1/stripe/create-session', {
		method: "POST",
		body: JSON.stringify({
			value,
			quantity,
			orderId 
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8' 
		}
	})

	const session = await response.json()

	// When the customer clicks on the button, redirect them to Checkout.
	const result = await stripe.redirectToCheckout({
		sessionId: session.id
	})

	console.log(result)

	if (result.error) {
		console.log(result.error.message)
	}
}