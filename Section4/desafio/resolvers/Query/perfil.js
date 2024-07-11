const db = require('../../config/db');
const getWhere = require('../../util/filter');
// Meu
module.exports = {
	async perfis() {
		const perfis = await db('perfis');

		return perfis;
	},
	async perfil(_, { filtro }) {
		const where = getWhere(filtro);

		const perfil = await db('perfis').where(where);

		return perfil[0];
	},
};

// Resposta
// module.exports = {
// 	async perfis() {
// 		return db('perfis');
// 	},
// 	async perfil(_, { filtro }) {
// 		const where = getWhere(filtro);

// 		return db('perfis').where(where).first();
// 	},
// };
