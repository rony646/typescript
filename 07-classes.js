var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Animal = /** @class */ (function () {
    //name: string;
    function Animal(name, color) {
        // Construtor
        //this.name = name <= palavra reservada 'public' evita isso
        this.name = name;
        this.color = color;
    }
    ;
    Animal.prototype.correr = function () {
    };
    ;
    Animal.prototype.andar = function () {
    };
    ;
    return Animal;
}());
;
var Coelho = /** @class */ (function (_super) {
    __extends(Coelho, _super);
    function Coelho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coelho.prototype.comer = function () {
        // Sobrescrevendo
        this.atributo1 = 'valor'; // Acessivel aqui!
        console.log(this.atributo1);
    };
    return Coelho;
}(Animal));
var myAnimal = new Animal('Peixe', 'Azul');
var coelho = new Coelho('Coelho', 'Branco');
console.log(coelho.name);
console.log(coelho.color);
coelho.comer();
