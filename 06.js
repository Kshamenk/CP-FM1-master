const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  // var resultado = [];
  // if (!this.root) {
  //   return resultado;
  // }
  // var curr = this.root;
  // while (curr) {
  //   resultado.push(curr.value);
  //   curr = curr.right;
  // }
  // return resultado;
  var max1 = this.value
  var max2 = this.value
  var curr = this
  var array = []
  function recorrer(curr){
    if (curr.left) {                                // caso de recursion
      recorrer(curr.left)
    }
    array.push(curr.value)
    if (curr.right) {
      recorrer(curr.right)
    }
  }
  recorrer(curr)
  for (let i = 0; i < array.length; i++) {
    if (array[i]> max1) {
      max1 = array[i]
      max2 = array[i - 1]
    }
  }
  return [max1, max2]
};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
