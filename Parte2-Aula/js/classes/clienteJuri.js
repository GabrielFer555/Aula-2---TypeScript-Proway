"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteJuri = void 0;
const cliente_1 = require("./cliente");
class ClienteJuri extends cliente_1.Cliente {
    constructor(id, name, email, cnpj, inscricaoEstadual) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getInscricaoEstadual() {
        return this.inscricaoEstadual;
    }
    setInscricaoEstadual(inscricaoEstadual) {
        this.inscricaoEstadual = inscricaoEstadual;
    }
}
exports.ClienteJuri = ClienteJuri;
