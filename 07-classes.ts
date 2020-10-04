interface AnimalInterface {
    name: string;
    color: string;
};

class Animal implements AnimalInterface {
    private atributo; // Atributo privado
    protected atributo1
    //name: string;

    constructor(public name: string, public color: string) {
        // Construtor
        //this.name = name <= palavra reservada 'public' evita isso

    };

    correr() {
        
    };

    andar() {

    };
};

class Coelho extends Animal {
   comer() {
       // Sobrescrevendo
       this.atributo1 = 'valor' // Acessivel aqui!
       console.log(this.atributo1)
   }

}

let myAnimal: Animal = new Animal('Peixe', 'Azul');
let coelho: Coelho = new Coelho('Coelho', 'Branco',)

console.log(coelho.name)
console.log(coelho.color)
coelho.comer()