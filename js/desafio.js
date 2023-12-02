"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jogador_1 = require("./classes/jogador");
const jogador = new jogador_1.Jogador(1, 'Neymar', 18);
console.log(jogador);
jogador.setIdade(16);
console.log(jogador);
const jogador2 = new jogador_1.Jogador(1, 'Neymar');
console.log(jogador2);
const jogador3 = new jogador_1.Jogador(1, 'Valinhos');
try {
    jogador3.setIdade(-1);
    console.log(jogador3);
}
catch (error) {
    console.log(error);
    console.log(jogador3);
}
