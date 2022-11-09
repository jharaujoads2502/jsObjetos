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



let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
    continue;
    }else{
    relatorio += `${info}: ${cliente[info]} \n`;
    }

}
console.log(relatorio);