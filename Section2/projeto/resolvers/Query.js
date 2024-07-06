import { usuarios, perfis } from '../data/db.js';

export default {
	hello() {
		return 'Olá';
	},
	horaAtual() {
		return new Date();
	},
	usuarioLogado(obj) {
		// console.log(obj);
		return {
			id: 1,
			nome: 'Gabriel',
			email: 'gabriel@email.com',
			idade: 23,
			salario_real: 1234.56,
			vip: true,
		};
	},
	produtoEmDestaque() {
		return {
			nome: 'TV',
			preco: 1000,
			desconto: 0.5,
		};
	},
	numerosMegaSena() {
		// return [4, 8, 13, 27, 33, 54];
		return Array(6)
			.fill(0)
			.map(() => parseInt(Math.random() * 100 + 1))
			.sort((a, b) => a - b);
	},
	usuarios() {
		return usuarios;
	},
	usuario(_, { id }) {
		const selecionados = usuarios.filter((u) => u.id === id);
		if (!selecionados) {
			return null;
		}
		return selecionados[0];
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
