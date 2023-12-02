"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    id;
    descricao = ''; /*Só posso passar o valor de atributos privados por meio do construtor ou através de métodos */
    valorUn;
    constructor(id, descricao, valorUn) {
        this.id = id;
        //this.descricao = descricao;
        this.setDescricao(descricao);
        this.valorUn = valorUn;
    }
    getId() {
        return this.id;
    }
    setId(val) {
        this.id = val;
    }
    setDescricao(descricao) {
        if (descricao.length < 3) {
            console.log('Descrição deve ter no minimo três caracteres');
            return;
        }
        this.descricao = descricao;
    }
    getDescricao() {
        return this.descricao;
    }
    getValorUn() {
        return this.valorUn;
    }
    setVal(valorUn) {
        this.valorUn = valorUn;
    }
}
exports.Produto = Produto;
