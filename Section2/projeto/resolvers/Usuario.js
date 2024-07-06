import { perfis } from '../data/db.js';

export default {
	salario(usuario) {
		// console.log(usuario);
		return usuario.salario_real;
	},
	perfil(usuario) {
		const perfil = perfis.filter((p) => p.id === usuario.perfil_id);
		if (!perfil) {
			return null;
		}
		return perfil[0];
	},
};
