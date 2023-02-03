const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  En caso de que la lista esté vacía, retornar 0
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

LinkedList.prototype.count = function() {                 //siemore va a haber un current en este tipo de ejercicios..
  // Tu código aca: 
  var current = this.head
  var suma = 0                                     //la iniciamos en 0, por que? no se, preguntare... sino no funciona claramente

  while (current) {                     // metemos bucle para iterar en cada caso de current... hasta que sea "null"
    suma = suma + current.value            //suma es igual a suma mas lo que valga ese current en cada iteracion
    current = current.next                //entonces current que valga a lo que apunta su next o sea otro valor de current
  }

  return suma             //retorna la suma todal de elementos
}

// No modifiques nada debajo de esta linea //

module.exports = LinkedList;