
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  var numOrdenado = []                 //el array que me pide retornar
  //iteramos con un for in y pusheamos dentro de numOrd el valor de ese objeto
for (let key in obj) {
numOrdenado.push(obj[key])
}
numOrdenado = numOrdenado.concat(array)        //CONCATENAR NO ES SUMAR, PERO SI LO ES

              // aca estoy usando el metodo bubblesort
for (let i = 0; i < numOrdenado.length; i++) {        //primer bucle para recorrer mi arreglo
for (let j = 0; j < numOrdenado.length; j++) {    //segundo bucle que ira hasta el final del arreglo MENOS "i" valor de iteracion anterior
if (numOrdenado[j] > numOrdenado[j + 1]) {                      //si el numero en j es mayor al numero en j+1
var temp = numOrdenado[j]                             //en una variable auxiliar guardo el valor de j, lo igual al valor que tenia j+1
numOrdenado[j] = numOrdenado[j + 1]
numOrdenado[j + 1] = temp                              //y ahora j+1 es igual al valor
}
}
}
return numOrdenado
}


//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
