/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ----- Closures -----

// EJERCICIO 5

// Enunciado:

// Implementar la función mayorMenorOIgual que recibe un parámetro
// (numFijo) y que debe retornar otra función con otro (parametro)
// a su vez la suma de ambos parametros debe retornar en el caso de que sea menor a 10: la suma es menor a 10
// en el caso de que sea mayor a 10: la suma es mayor a 10
// en el caso de que sea igual a 10: 10
// y si el parametro numFijo es igual a null o undefined debe retornar un arreglo vacio.

function mayorMenorOIgual(numFijo) {       //mirar los test, ahi hay ayudita
  // Tu código aca:
  return function (parametro) {                   //implementamos la funcion, que sabemos que recibe un "parametro"
    if (numFijo == null || numFijo == undefined) {  //y digo que si numFijo es null o undefines que retorne un arreglo vacio...
      return []
    } else {                                     //sino
      var suma = numFijo + parametro;            //en esta variable defino suma como numFijo mas ese parametro que toma la funcion
      if (suma < 10) {                           //si esa suma es menor a 10 devolve ese string
        return "la suma es menor a 10"
      } else if (suma > 10) {                     // si es mayor... devuelve este otro string
        return "la suma es mayor a 10"
      } else {                                     //y si no, que me devuelva 10    
        return 10
      }
    }
  }
}

// No modifiques nada debajo de esta linea //

module.exports = mayorMenorOIgual;
