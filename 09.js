const { BinarySearchTree } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// EJERCICIO 09
// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado

BinarySearchTree.prototype.insertWord = function (palabra) {
// Tu código acá
if (palabra === "") return false          //facil, si no hay nada que retorne falso

    function insert(node, palabra) {          //como dice la funcion insert recibe como parametro el nodo y la palabra
        if (palabra.length < node.value.length) {    //digo que cuando el largo de la palabra sea menos al largo del valor del nodo
            if (node.left) return insert(node.left, palabra)  //si hay nodo a la izq retorname la funcion con esos parametros
            node.left = new BinarySearchTree(palabra)         //el nodo izq se vuelve una nueva instancia de nuestro arbol binario 
        } else if (palabra.length > node.value.length) {          //si es mayor el elemento palabra repetimos lo mismo para su nodo derecho
            if (node.right) return insert(node.right, palabra)
            node.right = new BinarySearchTree(palabra)      
        } else {
            return false                 //si es que  la palabra es un string vacío, entonces se retorna false
        }
        return palabra              
    }
    return insert(this, palabra)    // se llama a la funcion. this hace referencia al objeto que llama la funcion, como segundo, la palabra que vamos a agregar
}




//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { BinarySearchTree };
