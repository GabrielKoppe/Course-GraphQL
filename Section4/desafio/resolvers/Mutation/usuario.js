const db = require('../../config/db');
const getWhere = require('../../util/filter');
const perfil = require('./perfil');

module.exports = {
	async novoUsuario(_, { dados }) {
		console.log(dados);
		if (
			!dados.nome ||
			!dados.email ||
			!dados.senha ||
			!dados.perfis ||
			dados.perfis.length <= 0
		) {
			throw new Error('Dados de entrada faltando');
		}

		const [usuarioId] = await db('usuarios').insert({
			nome: dados.nome,
			email: dados.email,
			senha: dados.senha,
		});

		dados.perfis.forEach(async (perfil) => {
			const where = getWhere(perfil);

			const perfilId = (await db('perfis').where(where).first()).id;

			await db('usuarios_perfis').insert({
				usuario_id: usuarioId,
				perfil_id: perfilId,
			});
		});

		const novoUsuario = await db('usuarios').where({ id: usuarioId }).first();

		return novoUsuario;
	},
	async excluirUsuario(_, { filtro }) {
		const where = getWhere(filtro);

		const usuario = await db('usuarios').where(where).first();

		const usuarioId = usuario.id;

		await db('usuarios_perfis').where({ usuario_id: usuarioId }).delete();

		await db('usuarios').where({ id: usuarioId }).delete();

		return usuario;
	},
	async alterarUsuario(_, { filtro, dados }) {
		const where = getWhere(filtro);

		const usuario = await db('usuarios').where(where).first();

		const usuarioId = usuario.id;

		const novoUsuario = {};

		if (dados.nome) novoUsuario.nome = dados.nome;
		if (dados.email) novoUsuario.email = dados.email;
		if (dados.senha) novoUsuario.senha = dados.senha;

		if (Object.keys(novoUsuario).length > 0) {
			await db('usuarios').where({ id: usuarioId }).update(novoUsuario);
		}

		if (!!dados.perfis || dados.perfis > 0) {
			await db('usuarios_perfis').where({ usuario_id: usuarioId }).delete();

			dados.perfis.forEach(async (perfil) => {
				const where = getWhere(perfil);

				const perfilId = (await db('perfis').where(where).first()).id;

				await db('usuarios_perfis').insert({
					usuario_id: usuarioId,
					perfil_id: perfilId,
				});
			});
		}

		return await db('usuarios').where({ id: usuarioId }).first();
	},
};

// Resposta
// const { perfil: obterPerfil } = require('../Query/perfil');
// const { usuario: obterUsuario } = require('../Query/usuario');
// module.exports = {
// 	async novoUsuario(_, { dados }) {
// 		try {
// 			const idsPerfis = [];
// 			if (dados.perfis) {
// 				for (let filtro of dados.perfis) {
// 					const perfil = await obterPerfil(_, {
// 						filtro,
// 					});
// 					if (perfil) idsPerfis.push(perfil.id);
// 				}
// 			}

// 			delete dados.perfis;
// 			const [id] = await db('usuarios').insert(dados);

// 			for (let perfil_id of idsPerfis) {
// 				await db('usuarios_perfis').insert({ perfil_id, usuario_id: id });
// 			}

// 			return db('usuarios').where({ id }).first();
// 		} catch (e) {
// 			throw new Error(e.sqlMessage);
// 		}
// 	},
// 	async excluirUsuario(_, args) {
// 		try {
// 			const usuario = await obterUsuario(_, args);
// 			if (usuario) {
// 				const { id } = usuario;
// 				await db('usuarios_perfis').where({ usuario_id: id }).delete();
// 				await db('usuarios').where({ id }).delete();
// 			}
// 			return usuario;
// 		} catch (e) {
// 			throw new Error(e.sqlMessage);
// 		}
// 	},
// 	async alterarUsuario(_, { filtro, dados }) {
// 		try {
// 			const usuario = await obterUsuario(_, { filtro });
// 			if (usuario) {
// 				const { id } = usuario;
// 				if (dados.perfis) {
// 					await db('usuarios_perfis').where({ usuario_id: id }).delete();

// 					for (let filtro of dados.perfis) {
// 						const perfil = await obterPerfil(_, {
// 							filtro,
// 						});

// 						if (perfil) {
// 							await db('usuarios_perfis').insert({
// 								perfil_id: perfil.id,
// 								usuario_id: id,
// 							});
// 						}
// 					}
// 				}

// 				delete dados.perfis;
// 				await db('usuarios').where({ id }).update(dados);
// 			}
// 			return !usuario ? null : { ...usuario, ...dados };
// 		} catch (e) {
// 			throw new Error(e);
// 		}
// 	},
// };
