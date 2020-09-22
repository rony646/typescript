var Animal = /** @class */ (function () {
    //name: string;
    function Animal(name) {
        this.name = name;
        // Construtor
        //this.name = name <= palavra reservada 'public' evita isso
    }
    ;
    return Animal;
}());
;
var myAnimal = new Animal('Peixe');
console.log(myAnimal.name);
