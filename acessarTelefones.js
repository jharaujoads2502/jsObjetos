const cliente = {
    nome:'André',
    idade:36,
    cpf:'25647841325',
    email:'andre@email.com',
    fones:['5532991611280','5535991721180']};

cliente.fones.forEach((fone,indice) => {
    console.log(`Telefone ${indice+1}: ${fone}`);
});