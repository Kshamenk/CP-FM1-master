const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.orderList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  // esto es para prueba
  if (!this.head) return false     //Si no hay cabeza retorname falso

  var curr = this.head;
  var auxiliar                         //definimos una variable para guardar momentaneamente el valor del nodo
  while (curr) {                        //mientras haya curr 
    var nodoSiguiente = curr.next;
    while (nodoSiguiente) {
      if (curr.value < nodoSiguiente.value) {     // aca le digo que si el valor de curr es menor al del noso siguiente:
        auxiliar = curr.value;                       //ahora auxiliar vale ese curr que es menor 
        curr.value = nodoSiguiente.value;            //el curr vale lo que vale el nodo siguiente
        nodoSiguiente.value = auxiliar;                  // y que el valor del nodo siguiente se guarde en auxiliar
      }
      nodoSiguiente = nodoSiguiente.next;            //el valor de "nodo siguiente" ahora sera a donde apunte la flecha (next)
    }
    curr = curr.next;                                // aca esta el caso de recursion en este ejercicio (esperemos)
  }
};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};