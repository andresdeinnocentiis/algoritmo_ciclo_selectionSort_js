/*
ENTREGA 03: CREAR UN ALGORITMO UTILIZANDO UN CICLO

    by Andres De Innocentiis
*/

/*
ALGORITMO DE SELECTION SORT
*/

function crearLista() {
    const lista = [];
    let cantidad = Number(prompt("Ingrese la cantidad de números que quiere que tenga la lista:"));
    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt(`Ingrese el ${i+1}° número que desea agregar: `));
        lista.push(numero);
    }
    return lista;
}


function encontrarIndiceMenor(arr) {
    let menor = arr[0];
    let indiceMenor = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
            indiceMenor = i;
        }
    }
    return indiceMenor;
}

function selectionSortAsc(arr) {
    const nuevoArr = [];
    let cantidad = arr.length
    let menor
    for (let i = 0; i < cantidad; i++) {
        menor = encontrarIndiceMenor(arr);
        nuevoArr.push(arr[menor]);
        arr.splice(menor, 1); // Con splice(position, num) position indica a partir de qué index se empieza a eliminar, y num cuantos numeros se van a eliminar
    }
    return nuevoArr;
}

function main() {
    const lista = crearLista();
    console.log(lista);
    console.log("EL NUMERO MENOR DE LA LISTA DADA ES: ", lista[encontrarIndiceMenor(lista)]);
    console.log("SU LISTA HA SIDO ORDENADA DE MENOR A MAYOR: ", selectionSortAsc(lista));
}

main()
