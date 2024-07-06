const usuarios = [
	{
		id: 1,
		nome: 'Gabriel',
		email: 'gabriel@email.com',
		idade: 23,
		salario_real: 1234.56,
		vip: true,
		perfil_id: 1,
		status: 'ATIVO',
	},
	{
		id: 2,
		nome: 'Mateus',
		email: 'Mateus@email.com',
		idade: 31,
		salario_real: 2000.56,
		vip: false,
		perfil_id: 2,
		status: 'INATIVO',
	},
	{
		id: 3,
		nome: 'Raquel',
		email: 'Raquel@email.com',
		idade: 14,
		salario_real: 400.56,
		vip: true,
		perfil_id: 2,
		status: 'BLOQUEADO',
	},
];

const perfis = [
	{
		id: 1,
		nome: 'Comum',
	},
	{
		id: 2,
		nome: 'Administrador',
	},
];

export { perfis, usuarios };
