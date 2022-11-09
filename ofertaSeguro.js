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


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log('Deseja seguro?');
    }else{
        console.log('Não Oferecer seguro');
    }
}

oferecerSeguro(cliente);
