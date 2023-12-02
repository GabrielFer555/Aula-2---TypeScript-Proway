"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
class Triangulo {
    base;
    altura;
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
    getBase() {
        return this.base;
    }
    setBase(base) {
        this.base = base;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    getArea() {
        return this.base * this.altura;
    }
}
exports.Triangulo = Triangulo;
