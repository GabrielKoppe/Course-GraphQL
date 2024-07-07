import { usuarios, proximoId } from '../../data/db.js';
import { indiceUsuario } from '../../util/usuario.js';

export default {
	// { nome, email, idade }
	novoUsuario(_, { dados }) {
		const emailRepetido = usuarios.some((u) => u.email === dados.email);

		if (emailRepetido) {
			throw new Error('Email cadastrado');
		}

		const novo = {
			id: proximoId(),
			...dados,
			perfil_id: 1,
			status: 'ATIVO',
		};

		usuarios.push(novo);
		return novo;
	},
	excluirUsuario(_, { filtro }) {
		const i = indiceUsuario(filtro);

		if (i < 0) return null;

		const excluidos = usuarios.splice(i, 1);

		if (!excluidos) return null;

		return excluidos[0];
	},
	alterarUsuario(_, { filtro, dados }) {
		const i = indiceUsuario(filtro);

		if (i < 0) return null;

		const usuario = {
			...usuarios[i],
			...dados,
		};

		usuarios.splice(i, 1, usuario);

		return usuario;
	},
};
