export class cliente {
    idCliente: number
    nome: string 
    bi: string 
    dataCadastro: string 

    constructor(idCliente: number, nome: string, bi: string, dataCadastro: string){
        this.idCliente = idCliente;
        this.nome = nome;
        this.bi = bi;
        this.dataCadastro = dataCadastro
    }
}