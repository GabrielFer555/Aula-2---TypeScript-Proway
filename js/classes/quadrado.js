"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
class Quadrado {
    lado;
    constructor(lado) {
        this.lado = lado;
    }
    getLado() {
        return this.lado;
    }
    getArea() {
        return this.lado * this.lado;
    }
    ;
}
exports.Quadrado = Quadrado;
