function Cliente(nome,cpf,email,saldo){
    this.nome =nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}


const jose = new clientePoupanca('José',
                                 '22414587452',
                                 'jharaujoads@gmail.com',
                                 100,
                                 200);
console.log(jose);

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

jose.depositarPoup(150);

console.log(jose);