//1Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2Crea una lista de lenguajes de programación llamada
//"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//3Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
function agregarNuevosLenguajes() {
  lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
}
agregarNuevosLenguajes();

//4Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementosLista() {
  console.log(lenguagesDeProgramacion);
}

mostrarElementosLista();

//5Crea una función que muestre en la consola todos
//los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarElementosInversaLista() {
  let listainversa = lenguagesDeProgramacion.reverse();
  console.log("Lista inversa", listainversa);
}
mostrarElementosInversaLista();

//6Crea una función que calcule el promedio de los elementos en una lista de números.
//declaracion de lista
let listaNumeros = [1, 3, 4, 5, 6, 7, 40, 2, 1];
let promedio = 0;
let sumaDeNumeros = 0;
listaNumeros.forEach(function (numero) {
  sumaDeNumeros = numero + sumaDeNumeros;
});
promedio = sumaDeNumeros / listaNumeros.length;
console.log("Promedio de la lista de numeros: ", promedio);

//7Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let listaDeNumeros = [3, 2, 3, 4, 5, 6, 7, 8, 19, 2, 1];

//Funcion que encuentra el numero minimo de una lista
function mostrarNumeroMenor() {
  let menorNumero = listaDeNumeros[0];
  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] < menorNumero) {
      menorNumero = listaDeNumeros[i];
    }
  }
  console.log("Numero menor ", menorNumero);
}
//Funcion que encuentra el numero mayor de una lista
function mostrarNumeroMayor() {
  let mayorNumero = listaDeNumeros[0];
  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] > mayorNumero) {
      mayorNumero = listaDeNumeros[i];
    }
  }
  console.log("Numero mayor ", mayorNumero);
}

//Llamado de la funcion
mostrarNumeroMayor();
mostrarNumeroMenor();

//8 Crea una función que devuelva la suma de todos los elementos en una lista.

let listaNumeros2 = [1, 3, 6, 5, 4, 3, 2, 4, 67, 3, , 1];
let sumaNumeros = 0;
//Funcion se encarga de sumar los numeros de la lista
function SumaDeNumeros() {
  listaNumeros2.forEach(function (numero) {
    sumaNumeros = sumaNumeros + numero;
  });
  return console.log(sumaNumeros);
}
//Llamado de la funcion
SumaDeNumeros();

//9Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
//o -1 si no existe en la lista.

//Esta funcion se encarga de mostrar las posiciones o posicion del valor buscado dentro de una lista
function encontrarPosicionEnLista() {
  let listaNumero3 = [4, 2, 7, 5, 5, 6, 7, 8, 9, 8, 7, 6, 4];
  let posicionesEcontradas = [];
  let valorBuscado = 10;
  for (let i = 0; i <= listaNumero3.length; i++) {
    if (listaNumero3[i] === valorBuscado) {
      posicionesEcontradas.push(i);
    }
  }
  if (posicionesEcontradas[0]==null){
    return console.log(-1);
  }else{
    return console.log(
    `Valor Buscado ${valorBuscado}`,
    "Posicion econtrada de ese numero en la lista: ",
    posicionesEcontradas
  );
  }
  
}

//Llamado de la funcion
encontrarPosicionEnLista();

//10Crea una función que reciba dos listas de números del mismo tamaño y
//devuelva una nueva lista con la suma de los elementos uno a uno.

let lista1 = [3, 4, 5, 6, 1];
let lista2 = [2, 5, 3, 7, 8];
let listaNueva = [4];

function sumaDeDosListas(lista1, lista2) {
    for(let i=0;i<=lista1.length;i++){
        listaNueva[i]=lista1[i]+lista2[i];
    }
    listaNueva.pop();
    return console.log(`Lista nueva: ${listaNueva}`);
}
//Llamado de la funcion
sumaDeDosListas(lista1, lista2);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let lista4=[3,4,7,8,6,5,4,2,1,9,9,0];
let numero1=0;
let listaNueva2=[];
function cuadradoDeLaLista(lista4){
    for(let i=0;i<=lista4.length;i++){
        
        listaNueva2[i]=lista4[i]*lista4[i];
    }
    listaNueva2.pop();
    return console.log(listaNueva2);
}

cuadradoDeLaLista(lista4);

