import { Cliente } from "./cliente";

export class ClienteJuri extends Cliente{
    public constructor(protected id:number, protected name:string, protected email:string, private cnpj:string, private inscricaoEstadual:string){
        super(id, name, email);
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }
    public getCnpj():string{
        return this.cnpj;
    }
    public setCnpj(cnpj:string):void{
        this.cnpj = cnpj;
    }
    public getInscricaoEstadual():string{
        return this.inscricaoEstadual;
    }
    public setInscricaoEstadual(inscricaoEstadual:string):void{
        this.inscricaoEstadual = inscricaoEstadual;
    }
}