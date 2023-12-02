import { Cliente } from "./cliente";

export class ClienteFisico extends Cliente{
    public constructor(protected id:number, protected name:string, protected email:string, private cpf:string, private rg:string){
        super(id, name, email);
        this.cpf = cpf;
        this.rg = rg;
    }
    public getCpf():string{
        return this.cpf;
    }
    public setCpf(cpf:string):void{
        this.cpf = cpf;
    }
    public getRg():string{
        return this.rg;
    }
    public setRg(rg:string):void{
        this.rg = rg;
    }
} 