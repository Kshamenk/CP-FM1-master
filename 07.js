/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 7
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    restArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var restArray = function(array){
    // Tu código acá
 // Tu código acá
    // var suma = 0                    //necesito dos variables, una para la suma total y otra para el contador
    // var contadorArray = 0
  
    // for (let i = 0; i < array.length; i++) {     //iteramos en el array
    //   if (Array.isArray(array[i])) {              //quiero saber si el valor dentro de las iteraciones de array es en efecto un array
    //     contadorArray++                                //cuando lo sea que contador aumente
    //     suma = suma + restArray(array[i])              // ahora suma va a valer suma + la funcion rest array sobre esa posicion del array
    //   } else {                                          //si no es un array
    //     suma = suma + array[i]                        // a suma agregale el valor de lo que hay en esa iteracion de array
    //   }
    // }
    // return suma - contadorArray                  // retornams el resultado de suma menos el valor del contador de arrays

    var arr = array.flat(Infinity)
    var total = arr.reduce((acc,curr) => acc + curr, 0)

    return (arr.length) ? total : -1
}


// No modifiques nada debajo de esta linea //

module.exports = restArray