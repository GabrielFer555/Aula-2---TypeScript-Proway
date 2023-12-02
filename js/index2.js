"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quadrado_1 = require("./classes/quadrado");
const triangulo_1 = require("./classes/triangulo");
let qr1 = new quadrado_1.Quadrado(10);
console.log(qr1.getArea());
const r1 = new triangulo_1.Triangulo(8, 15);
console.log(r1.getArea());
