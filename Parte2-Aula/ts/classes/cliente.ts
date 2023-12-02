export class Cliente{
    public constructor(protected id:number, protected name:string, protected email:string){
        this.id = id;
        this.name = name;
        this.email = email;
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
    public getEmail():string{
        return this.email;
    }
    public setEmail(email:string):void{
        this.email = email;
    }
}