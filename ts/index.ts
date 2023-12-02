import { Person} from "./classes/person"
import { Produto} from "./classes/produto"
console.log("Hello World")

const ob1 = new Person();
ob1.name = "Marcos"
ob1.idade = 14;

console.log(ob1);


const prod = new Produto(1,'Milho',1.75);
console.log(prod);

prod.setDescricao("Pão de batata")
prod.setVal(2);
console.log(prod.getDescricao())
console.log(prod)

prod.setId(3);
console.log(prod)

const prod2 = new Produto(1,'ca',3.50)

console.log(prod2);