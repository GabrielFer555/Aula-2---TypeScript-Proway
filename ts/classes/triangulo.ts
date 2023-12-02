import { IShape } from "../interfaces/IShape";

export class Triangulo implements IShape{
    public constructor(private base:number, private altura:number){
        this.base = base
        this.altura = altura
    }
    public getBase():number {
        return this.base
    }
    public setBase(base:number):void{
        this.base = base;
    }
    public getAltura():number {
        return this.altura
    }
    public setAltura(altura:number):void{
        this.altura = altura
    }
    public getArea():number {
        return this.base * this.altura;
        
    }
}