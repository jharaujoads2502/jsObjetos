const cliente = {
    nome:'André',
    idade:36,
    cpf:'25647841325',
    email:'andre@email.com',
    fones:['5532991611280','5535991721180']};

cliente.dependentes = {nome: "Sara",
                       parentesco: "Filha",
                       dataNasc: "20/03/2011"};

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente);