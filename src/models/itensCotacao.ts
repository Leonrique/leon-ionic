export class ItensCotacao {
    codigo: number;
    descricao: string;
    qtde: number;
    preco: number;
    total: number;
    marca: string;
    codigoFornecedor: number;
    descricaoFornecedor: string

    
    constructor(codigo: number, descricao: string, qtde: number, preco: number, total: number,
        marca: string, codigoFornecedor: number, descricaoFornecedor: string) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.qtde = qtde;
        this.preco = preco;
        this.total = total;
        this.marca = marca;
        this.codigoFornecedor = codigoFornecedor;
        this.descricaoFornecedor = descricaoFornecedor;
    }
}