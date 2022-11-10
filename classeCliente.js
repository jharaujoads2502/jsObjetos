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

const jose = new Cliente('José Henrique Araujo',
                         'jharaujoads@gmail.com',
                         '87465895120',
                         500);
console.log(jose);

jose.depositar(100);

jose.exibirSaldo();
