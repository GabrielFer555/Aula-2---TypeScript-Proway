"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clienteFisico_1 = require("./classes/clienteFisico");
const moto_1 = require("./classes/moto");
const moto = new moto_1.Moto('def-08080', 'Honda', 300);
console.log(moto);
const cliente = new clienteFisico_1.ClienteFisico(1, 'Marcos', "marcos@hotmail.com", '112.090.080-10', '11111111');
console.log(cliente);
