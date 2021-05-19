const fetch = require('node-fetch');
const config = require('../config/config').config;

var MeliService = {}

MeliService.search = async (obj) => {
	if (obj.search) {
		const response = await fetch(`${config.BASE_URL}${config.ENDPOINTS.search}?q=${obj.search}`).then(promisseFetch => promisseFetch.json());
		const results = response.results.slice(0, 4);
		const resObj = {
			author: {
				name: 'Lautaro Ezequiel',
				lastname: 'Murua'
			},
			item: []
		}
		results.forEach(e => {
			let decimals = e.price - Math.floor(e.price);
			decimals = decimals.toFixed(2).toString().substring(2, 4);
			let item = {
				id: e.id,
				title: e.title,
				price: {
					currency: e.currency_id,
					amount: Math.trunc(e.price),
					decimals: decimals
				},
				picture: e.thumbnail,
				condition: e.condition,
				free_shipping: e.shipping.free_shipping,
				sold_quantity: e.sold_quantity
			}
			resObj.item.push(item);
		});
		return resObj;
	} else {
		return;
	}
}

MeliService.searchById = async (id) => {
  const response = await fetch(`${config.BASE_URL}${config.ENDPOINTS.items}/${id}`).then(promisseFetch => promisseFetch.json());
	return response;
}
module.exports = MeliService;