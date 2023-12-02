import {IShape} from "../interfaces/IShape"

export class Quadrado implements IShape {
    private lado: number;
    
    public constructor(lado: number){
        this.lado = lado;
    }
    public getLado():number{
        return this.lado;
    }
    public getArea(): number{
        return this.lado * this.lado;
    };
}