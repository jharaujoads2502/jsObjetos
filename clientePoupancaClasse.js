class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }

}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
     
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}


const jose = new ClientePoupanca('José Henrique','jharaujoads@gmail.com','1458745632587',50,100);

console.log(jose);

jose.depositarPoupanca(200);
console.log(jose);
jose.depositar(100);
console.log(jose);