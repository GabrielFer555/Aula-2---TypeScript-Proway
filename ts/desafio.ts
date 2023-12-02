import {Jogador} from './classes/jogador'

const jogador = new Jogador(1,'Neymar',18);

console.log(jogador);
jogador.setIdade(16);
console.log(jogador);

const jogador2 = new Jogador(1,'Neymar');

console.log(jogador2);

const jogador3 = new Jogador(1,'Valinhos');

try{
    jogador3.setIdade(-1);
    console.log(jogador3);
}catch(error:any){
    console.log(error);
    console.log(jogador3);
}
