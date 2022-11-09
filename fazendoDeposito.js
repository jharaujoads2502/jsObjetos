const cliente = {
    nome:'André',
    idade:36,
    cpf:'25647841325',
    email:'andre@email.com',
    fones:['5532991611280','5535991721180'],
    dependentes: [{nome: "Sara Silva",
                   parentesco: "Filha",
                   dataNasc: "20/03/2011"},
                   {nome: "José",
                          parentesco: "Filho",
                          dataNasc: "20/03/1994"}
                   ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor;
    }

                   
                };
console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);