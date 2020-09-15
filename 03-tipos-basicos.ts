// booleano

let success: boolean = true 


// numeros

let num: number = 10.5;

// string

let string: string = 'Typescript'

// Array

let stringArray: string[] = ['a', 'b', 'c'] // just string in the array


// Enum

enum estado_civil {solteiro, casado, divorciado};
 
let meu_estado_civil:estado_civil = estado_civil.solteiro;

if(meu_estado_civil === estado_civil.solteiro) {
    console.log('Sou solteiro')
}