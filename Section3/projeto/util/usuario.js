import { usuarios, perfis } from '../data/db.js';

export function indiceUsuario(filtro) {
	if (!filtro) return -1;

	const { id, email } = filtro;

	if (id) {
		return usuarios.findIndex((u) => u.id === id);
	}

	if (email) {
		return usuarios.findIndex((u) => u.email === email);
	}

	return -1;
}

export function indicePerfil(filtro) {
	if (!filtro) return -1;

	const { id, nome } = filtro;

	if (id) {
		return perfis.findIndex((p) => p.id === id);
	}

	if (nome) {
		return perfis.findIndex((p) => p.nome === nome);
	}

	return -1;
}
