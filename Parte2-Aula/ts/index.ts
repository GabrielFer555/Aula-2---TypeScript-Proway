import { Cliente } from "./classes/cliente"
import { ClienteFisico } from "./classes/clienteFisico"
import {Moto} from "./classes/moto"
import { Veiculo } from "./classes/veiculo"

const moto = new Moto('def-08080','Honda',300)

console.log(moto)

const cliente:Cliente = new ClienteFisico(1,'Marcos', "marcos@hotmail.com",'112.090.080-10', '11111111');

console.log(cliente)