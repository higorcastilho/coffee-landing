const API_END_POINT = 'http://localhost:5000/live-data-emitter/v2'

class Emitter {
	
	async post (payload) {

		const { path, body } = payload
		
		return await fetch(API_END_POINT + path, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			},
			body: JSON.stringify(body)
		})
	}
}

export default new Emitter()