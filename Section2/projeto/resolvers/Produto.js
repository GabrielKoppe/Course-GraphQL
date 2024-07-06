export default {
	precoComDesconto(parent) {
		// console.log(parent);

		if (!parent.desconto) {
			return parent.preco;
		}

		return parent.preco * (1 - parent.desconto);
	},
};
