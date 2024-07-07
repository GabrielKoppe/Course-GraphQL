import { perfis, proximoId } from '../../data/db.js';
import { indicePerfil } from '../../util/usuario.js';

export default {
	// { nome }
	novoPerfil(_, { dados }) {
		const nomeRepetido = perfis.some((p) => p.nome === dados.nome);

		if (nomeRepetido) {
			throw new Error('Perfil já cadastrado');
		}

		const novo = {
			id: proximoId(),
			...dados,
		};

		perfis.push(novo);
		return novo;
	},
	excluirPerfil(_, { filtro }) {
		const i = indicePerfil(filtro);

		if (i < 0) return null;

		const excluidos = perfis.splice(i, 1);

		if (!excluidos) return null;

		return excluidos[0];
	},
	alterarPerfil(_, { filtro, dados }) {
		const i = indicePerfil(filtro);

		if (i < 0) return null;

		const perfil = {
			...perfis[i],
			...dados,
		};

		perfis.splice(i, 1, perfil);

		return perfil;
	},
};
