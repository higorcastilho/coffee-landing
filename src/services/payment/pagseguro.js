export default async function pagseguroCheckout () {

	const payload = {
		"currency":"BRL",
		"itemId1": "0001",
		"itemDescription1":"Notebook Prata",
		"itemAmount1":"100.00",
		"itemQuantity1":"1",
		"itemWeight1":"1000",
		"reference":"REF1234",
		"senderName":"Jose Comprador",
		"senderAreaCode":"11",
		"senderPhone":"56713293",
		"senderCPF":"38440987803",
		"senderBornDate":"12/03/1990",
		"senderEmail":"email@sandbox.pagseguro.com.br",
		"shippingType":"1",
		"shippingAddressStreet":"Av. Brig. Faria Lima",
		"shippingAddressNumber":"1384",
		"shippingAddressComplement":"2o andar",
		"shippingAddressDistrict":"Jardim Paulistano",
		"shippingAddressPostalCode":"01452002",
		"shippingAddressCity":"Sao Paulo",
		"shippingAddressState":"SP",
		"shippingAddressCountry":"BRA",
		"extraAmount":"-0.01",
		"redirectURL":"http://sitedocliente.com",
		"notificationURL":"https://url_de_notificacao.com",
		"maxUses":"1",
		"maxAge": "3000",
		"shippingCost":"0.00"
	}

	const body = new URLSearchParams(payload)

	await fetch(`https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=castilhohf@gmail.com&token=3CEE7304837F48409D614F0955B749F2`, {
		method: 'POST',
		body: body,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1'
		}
	}).then( data => {
		console.log(data)
	})
}
