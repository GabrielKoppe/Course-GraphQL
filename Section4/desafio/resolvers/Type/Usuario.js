const db = require('../../config/db');
// Meu
module.exports = {
	async perfis(usuario) {
		const usuarios_perfis = await db('usuarios_perfis').where({
			usuario_id: usuario.id,
		});

		const perfis = await db('perfis').whereIn(
			'id',
			usuarios_perfis.map((up) => up.perfil_id),
		);

		return perfis;
	},
};

// Resposta
// module.exports = {
// 	async perfis(usuario) {
// 		return db('perfis')
// 			.join('usuarios_perfis', 'perfis.id', 'usuarios_perfis.perfil_id')
// 			.where({
// 				usuario_id: usuario.id,
// 			});
// 	},
// };
