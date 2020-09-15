// booleano
var success = true;
// numeros
var num = 10.5;
// string
var string = 'Typescript';
// Array
var stringArray = ['a', 'b', 'c']; // just string in the array
// Enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["solteiro"] = 0] = "solteiro";
    estado_civil[estado_civil["casado"] = 1] = "casado";
    estado_civil[estado_civil["divorciado"] = 2] = "divorciado";
})(estado_civil || (estado_civil = {}));
;
var meu_estado_civil = estado_civil.solteiro;
if (meu_estado_civil === estado_civil.solteiro) {
    console.log('Sou solteiro');
}
