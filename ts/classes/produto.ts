export class Produto{
    private id:number;
    private descricao:string = '';/*Só posso passar o valor de atributos privados por meio do construtor ou através de métodos */
    private valorUn:number;


    public constructor(id:number, descricao:string, valorUn:number){//!Construtor da classe 
        this.id = id;
        //this.descricao = descricao;
        this.setDescricao(descricao);
        this.valorUn = valorUn;
    }
    public getId():number{
        return this.id;
    }
    public setId(val:number):void{
        this.id = val;
    }
    public setDescricao(descricao:string):void{
        if(descricao.length < 3){
            console.log('Descrição deve ter no minimo três caracteres');
            return;
        }
        this.descricao = descricao;
    }
    public getDescricao():string{
        return this.descricao;
    }
    public getValorUn():number{
        return this.valorUn;
    }
    public setVal(valorUn:number):void{
        this.valorUn = valorUn;
    }
}