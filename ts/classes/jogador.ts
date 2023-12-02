import {Categoria} from "../enums/categoria"
export class Jogador{
    private id:number;
    private name:string;
    private idade:number = 1;
    private Categoria:Categoria;

    public constructor(id:number, name:string, idade?:number){/** */
        this.id = id;
        this.name = name;
        if(idade == null || idade == undefined){/**Sobrecarga */
            this.idade = 0;
            this.setCategoria(0)
        }else{
            this.idade = idade;
            this.setCategoria(idade)
        }
    }
    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id = id; 
    } 
    public getName():string{
        return this.name;
    }
    public setName(name:string):void{
        this.name = name;
    }
    public getIdade():number{
        return this.idade;
    }
    public setIdade(idade:number):void{
        if(idade < 0){
            throw 'Idade não pode ser negativa'
        }
        else{
            this.idade = idade;
            this.setCategoria(idade);
        }
    }
    public setCategoria(idade:number):void{
        if(this.idade <= 12){
            this.Categoria = Categoria.Infatil
        }
        if(idade > 12 && idade < 18){
            this.Categoria = Categoria.Juvenil;
        }
        if(idade > 18){
            this.Categoria = Categoria.Adulto;
        }
    }
    public getCategoria():Categoria{
        return this.Categoria;
    }

}