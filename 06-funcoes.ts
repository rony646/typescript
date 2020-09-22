const soma = function(x: number, y:number): number { 
    // Parametros tipados
    return x + y;
};

let n1: number = soma(10, 10);

console.log(n1);

const sub = (x: number, y:number): number => x - y; // ShortHand Function

let n2: number = sub(5, 3);

console.log(n2);