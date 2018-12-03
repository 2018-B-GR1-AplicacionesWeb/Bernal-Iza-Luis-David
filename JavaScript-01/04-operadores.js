function ejemplo() {
}

var ejemploDos = function () {
}; // Anonymous function

var david = {
    trabajar: function () {// Anonymous function
        return 'Trabajando';
    }
};

var arregloFunciones = [function () {// Anonymous function

}];
console.log(typeof ejemplo);    //
console.log(ejemplo);   //
console.log(ejemplo());  //

var variableUno; //Nunca usar
let variableDOs = 2;   //usar mutable (este se asigna a otro valor)
variableDOs=variableDOs+1;
const pi = 3.1416;  // Intentar usar const siempre
// operadores

const

arregloDeNombres = ['A', 'b', 'C'];

arregloDeNombres.forEach(     //Escribir código que se entienda
    function (valorActual, indiceActual, arreglo) {
        console.log('Valor Actual', valorActual);
        console.log('Indice Actual', indiceActual);
        console.log('Arreglo', arreglo);
    }
);
//function con nombre
//funciones anonimas
//Fat Arrow Functions  ->  =>
arregloDeNombres.forEach(     //Escribir código que se entienda
    (valorActual, indiceActual, arreglo) => {
        console.log('Valor Actual', valorActual);
        console.log('Indice Actual', indiceActual);
        console.log('Arreglo', arreglo);
    }
);

const sumarDosNumeros = (numUno, numDos)=> {
    return numUno + numDos
};

const sumarDosNumerosV2 = (numUno, numDos) => numUno+NumDos;

const elevarAlCuadrado = (numero) => numero * numero;

const elevarAlCuadradoV2 = numero => numero * numero;  //Se puede omitir cuando se tiene una sola variable

const arregloNombresDos = ['E','F','G','H'];

const resultado = arregloDeNombres
    .map(       //muta cada elemento del arreglo
        valorActual =>{
            return valorActual + '.';
        }
    )
    .forEach(
        (valorNuevo)=>console.log(valorNuevo)

    );  //Devuelve un arreglo   devuelve undefined
console.log(resultado);

const arregloNumeros = [2,3,1,5,6,4,7,8,9,10];
//queremos los numeros mayores q 3
const resultadoFilter = arregloNumeros
    .filter(
        valorActual => valorActual % 2 == 0 //devolver una expresion
    );

console.log(resultadoFilter);

if('1' === 1){  // '1' == 1 esto es falso xq un string no es igual a un numero
    console.log('Es verdad');
}else{
    console.log('Es Falso');
}

const resultadoEvery = arregloNumeros
    .every(n => n > 0);  // si cumplen todos los elementos de mi arreglo con esa expresion nos da true caso contrario false
console.log(resultadoEvery);

const resultadoSome = arregloNumeros
    .some(n => n<0); //si uno cumple con la comdicion es true, caso contrario False
console.log(resultadoSome);

//FindIndexOf

const resultadoFindIndex = arregloNumeros
.findIndex(n => n ===7);
arregloNumeros.indexOf(7);
console.log(resultadoFindIndex);

const resultadoFind = arregloNumeros
    .find(n => n === 7);
console.log(resultadoFind);

//reduce
const resultadoReduce = arregloNumeros
    .reduce(
        (valorActualDelNumero, valorActualDelArreglo)=>{   //primer parametro acepta una funcion
            return valorActualDelNumero - valorActualDelArreglo;
        },
        100   //segundo parametro acepta un valor
    );
console.log(resultadoReduce);

//const resultadoReduceV2 = arregloNumeros
  //  .reduce((a,b)=>a+b,0);

const resultadoReduceV3 = arregloNumeros.reduceRight((a, b) => {
        if(indice>4){
            return a + b;
        }else{
            return a;
        }
    },0
);
console.log(resultadoReduceV3);

//sort
const clonArregloNumeros = JSON.parse(JSON.stringify(arregloNumeros));
const resultadoSort = arregloNumeros.sort((a,b) => a-b);
const resultadoSortV2 = conArregloNumeros.sort((a,b) => b-a);
console.log(resultadoSort);
console.log(resultadoSortV2);