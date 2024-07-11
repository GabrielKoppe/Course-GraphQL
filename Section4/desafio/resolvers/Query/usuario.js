const db = require('../../config/db');
const getWhere = require('../../util/filter');
// Meu
module.exports = {
	async usuarios() {
		const usuarios = await db('usuarios');

		return usuarios;
	},
	async usuario(_, { filtro }) {
		const where = getWhere(filtro);

		const usuario = await db('usuarios').where(where);

		return usuario[0];
	},
};

// Resposta
// module.exports = {
// 	usuarios() {
// 		return db('usuarios');
// 	},
// 	async usuario(_, { filtro }) {
// 		const where = getWhere(filtro);

// 		return db('usuarios').where(where).first()
// 	},
// };
