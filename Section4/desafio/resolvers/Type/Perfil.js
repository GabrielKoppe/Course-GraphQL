const db = require('../../config/db');
// Meu
module.exports = {
	usuarios(perfil) {
		return db('usuarios')
			.join('usuarios_perfis', 'usuarios.id', 'usuarios_perfis.perfil_id')
			.where({
				perfil_id: perfil.id,
			});
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
