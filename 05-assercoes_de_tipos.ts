let meuNome: any = 'Rony Silva';

(<string>meuNome).length; // Convertendo em string
(meuNome as string).length; // Outra maneira de converter

let obj = {
    nome: "R. Silva"
};

(<any>obj).texto = 'teste'; // Sem error ao adicionar propriedade no objeto

console.log(obj);


// Convertendo número em string

let num = 2;
let numString  = 2 + '';

console.log(typeof numString);

// Convertendo string em número

let string = '123';

let num2 = +string;

console.log(typeof num2);