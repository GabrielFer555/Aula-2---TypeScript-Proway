export class Veiculo{

    public constructor(protected placa:string, protected marca:string){
        this.placa = placa;
        this.marca = marca;
    }
    public getPlaca():string{
        return this.placa;
    }
    public getMarca():string{
        return this.marca;
    }
}