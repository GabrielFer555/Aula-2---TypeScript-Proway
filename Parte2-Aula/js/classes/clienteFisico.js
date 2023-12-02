"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteFisico = void 0;
const cliente_1 = require("./cliente");
class ClienteFisico extends cliente_1.Cliente {
    constructor(id, name, email, cpf, rg) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.cpf = cpf;
        this.rg = rg;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getRg() {
        return this.rg;
    }
    setRg(rg) {
        this.rg = rg;
    }
}
exports.ClienteFisico = ClienteFisico;
