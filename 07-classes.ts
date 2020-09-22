class Animal {
    //name: string;

    constructor(public name: string) {
        // Construtor
        //this.name = name <= palavra reservada 'public' evita isso
    };
};

let myAnimal: Animal = new Animal('Peixe');

console.log(myAnimal.name);