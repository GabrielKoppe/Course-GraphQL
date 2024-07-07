import { perfis } from '../data/db.js';

export default {
	perfil(usuario) {
		const perfil = perfis.filter((p) => p.id === usuario.perfil_id);
		if (!perfil) {
			return null;
		}
		return perfil[0];
	},
};
