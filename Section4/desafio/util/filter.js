module.exports = function getWhere(filtro) {
	if (!filtro) {
		throw new Error('Não foi enviado nenhum filtro!');
	}

	const where = {};

	const filtroChaves = Object.keys(filtro);

	filtroChaves.forEach((chave) => {
		where[chave] = filtro[chave];
	});

	return where;
};
