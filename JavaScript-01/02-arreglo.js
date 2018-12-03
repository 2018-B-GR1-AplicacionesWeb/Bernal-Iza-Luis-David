var arreglo = [];

arreglo = [
    1,
    "david",
    false,
    null,
    new Date(),
    {
        nombre: "luis"
    },
    [1,2,false,true]
];

console.log(arreglo);
arreglo.push (3);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
var arregloNumeros= [1,2,3,4,5];
//arregloNumeros.splice(1,0,1.1);
//console.log(arregloNumeros);

//arregloNumeros.splice(4,1);
//console.log(arregloNumeros);

//arregloNumeros.indexOf(3);

var indiceDelNumeroDos= arregloNumeros.indexOf(2);
//console.log(indiceDelNumeroDos);

arregloNumeros.splice(indiceDelNumeroDos,0,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9);
console.log(arregloNumeros);
var indiceUnoSiete = arregloNumeros.Indexof(1.7);
console.log(arregloNumeros[indiceUnoSiete]);
console.log(arregloNumeros[0]);

var posicionInicialUnoUno = arregloNumeros.indexof(1.1);
var posicionInicialUnoNueve = arregloNumeros.indexOf(1.9);

var desdeElUnoUnoAlNueveNueve = (posicionInicialUnoNueve - posicionInicialUnoUno + 1);
arregloNumeros.splice(
    posicionInicialUnoUno,
    desdeElUnoUnoAlNueveNueve
);

//Destructuracion de objetos
var david = {
    nombre:"david",
    apellido:"Bernal",
    direccion:"Gregorio Bobadilla",
    casado:false,
    edad:29,
};
var datosDelUsuarios = {
    ...david
};
console.log(datosDelUsuarios);
//objetos
var atributosDelObjeto = Object.keys(datosDelUsuarios);
console.log(datosDelUsuarios['nombre']);
console.log(atributosDelObjeto);


