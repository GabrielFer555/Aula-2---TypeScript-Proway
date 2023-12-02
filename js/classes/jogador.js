"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
const categoria_1 = require("../enums/categoria");
class Jogador {
    id;
    name;
    idade = 1;
    Categoria;
    constructor(id, name, idade) {
        this.id = id;
        this.name = name;
        if (idade == null || idade == undefined) { /**Sobrecarga */
            this.idade = 0;
            this.setCategoria(0);
        }
        else {
            this.idade = idade;
            this.setCategoria(idade);
        }
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (idade < 0) {
            throw 'Idade não pode ser negativa';
        }
        else {
            this.idade = idade;
            this.setCategoria(idade);
        }
    }
    setCategoria(idade) {
        if (this.idade <= 12) {
            this.Categoria = categoria_1.Categoria.Infatil;
        }
        if (idade > 12 && idade < 18) {
            this.Categoria = categoria_1.Categoria.Juvenil;
        }
        if (idade > 18) {
            this.Categoria = categoria_1.Categoria.Adulto;
        }
    }
    getCategoria() {
        return this.Categoria;
    }
}
exports.Jogador = Jogador;
