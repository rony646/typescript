let myArr: Array<number> = [];

function teste<T>(param: T): T{
    return param;
};

let variable: number = teste<number>(2)
console.log(variable)

class Lista<T> {
    items: Array<T> = [];

    add(item: T) {

    }

    remove(item: T) {

    }
}

let lista = new Lista<number>(); // Lista de número com generics