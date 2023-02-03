const { LinkedList } = require('./DS');
// No modifiques nada arriba de esta linea //

/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá filtrar 
los elementos repetidos de nuestra lista enlazada y crear una nueva lista con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null
ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */

LinkedList.prototype.simplifyList = function () {
  // Tu código aca:
  if (!this.head) return false;     //si la lista esta vacia

  var values = new Set()           //con el obj Set guardamos los valores 
  var curr = this.head
  var listaNueva = null             //es la forma en que se controla el primer elemento de la nueva lista enlazada, si no fuera null sabriamos que ya hay algo en esa lista (creo)
  while (curr) {
    if (values.has(curr.value)) {     //verificamos que si el valor actual ya existe antes de agregarlo.
                                        
      listaNueva.next = curr.next      //salta ese elemento y actualiza el valor de listaNueva.next
    } else {
      values.add(curr.value)          //Si el valor no esta, se lo agrega 
      listaNueva = curr                 //que la lista nueva aora tenga el valor de curr
    }
    curr = curr.next              //tenemos el caso de recursion aca
  }

}
// No modifiques nada debajo de esta linea //
module.exports = {
  LinkedList
};