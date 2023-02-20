/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
        // number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
        // la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16


    
  function countDeep(arr) {
  // Tu código aca:
 //  primero defino las variables de lo que me voy a encotrar asi guardo cada cosa donde corresponde
  // Tu código aca:
  var numeros = 0 // una por cada tipo de elemento
  var strings = 0
  var booleanos = 0
  var indefinidos = 0
  var arreglos = 0

  function count(elem) {
    // llamo a la funcion count y como parametro le paso su elemento
    if (Array.isArray(elem)) {
      // utilizo el metodo arrayisarray para saber si dentro de elementos hay arreglos
      arreglos++
      elem.forEach(count); // utilizando un ForEach cuento el total de elementos
    } else if (typeof elem === "number") {
      //y digo en todos los casos si el tipo de elemento es igual al caso que me interese comparar
      numeros++
    } else if (typeof elem === "string") {
      strings++
    } else if (typeof elem === "boolean") {
      booleanos++
    } else if (typeof elem === "undefined") {
      indefinidos++
    }
  }

  count(arr); //llamo a la funcion y la ejecuto NO TE OLVIDES DE EJECUTAR LAS FUNCIONS WN CTM
  return Math.pow(((arreglos - numeros) * strings) / booleanos, indefinidos); //aca esto lo busque, si sabia que necesitaba usar un Math pero no se me ocurria como
}

// No modifiques nada debajo de esta linea //

module.exports = countDeep