import { usuarios, perfis } from '../data/db.js';
import { indiceUsuario } from '../util/usuario.js';

export default {
	usuarios() {
		return usuarios;
	},
	usuario(_, { filtro }) {
		const i = indiceUsuario(filtro);

		if (i < 0) return null;

		return usuarios[i];
	},
	perfis() {
		return perfis;
	},
	perfil(_, { id }) {
		const perfil = perfis.filter((p) => p.id === id);
		if (!perfil) {
			return null;
		}
		return perfil[0];
	},
};
