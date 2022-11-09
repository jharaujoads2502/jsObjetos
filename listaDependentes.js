const cliente = {
    nome:'André',
    idade:36,
    cpf:'25647841325',
    email:'andre@email.com',
    fones:['5532991611280','5535991721180'],
    dependentes: [{nome: "Sara Silva",
                   parentesco: "Filha",
                   dataNasc: "20/03/2011"}
                   ]
                };

cliente.dependentes.push({nome: "José",
                          parentesco: "Filho",
                          dataNasc: "20/03/1994"});
console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="20/03/2011");

console.log(filhaMaisNova[0].nome);