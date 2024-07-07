let id = 1;
function proximoId() {
	return id++;
}

const usuarios = [
	{
		id: proximoId(),
		nome: 'Gabriel',
		email: 'gabriel@email.com',
		idade: 23,
		perfil_id: 1,
		status: 'ATIVO',
	},
	{
		id: proximoId(),
		nome: 'Mateus',
		email: 'Mateus@email.com',
		idade: 31,
		perfil_id: 2,
		status: 'INATIVO',
	},
	{
		id: proximoId(),
		nome: 'Raquel',
		email: 'Raquel@email.com',
		idade: 14,
		perfil_id: 2,
		status: 'BLOQUEADO',
	},
];

const perfis = [
	{
		id: proximoId(),
		nome: 'Comum',
	},
	{
		id: proximoId(),
		nome: 'Administrador',
	},
];

export { perfis, usuarios, proximoId };
