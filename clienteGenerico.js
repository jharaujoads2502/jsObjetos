function Cliente(nome,cpf,email,saldo){
    this.nome =nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const andre = new Cliente('André',
                          '12354875230',
                          'email@email.com',
                          1000);
console.log(andre);