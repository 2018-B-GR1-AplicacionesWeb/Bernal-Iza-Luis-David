//tipados Int edad =1 ;
var edad = 1; //
var sueldo = 1.01;
var nombre = "David";
var nombre = `David`;
var casado = false;
var hijos = null;
var cuatrobrazos;
var fecha = new Date();
console.log(typeof edad);
console.log(typeof sueldo);
console.log(typeof nombre);
console.log(typeof casado);
console.log(typeof hijos);
console.log('cuatrobrazos', cuatrobrazos);
console.log(typeof cuatrobrazos);
console.log('fecha',fecha);
console.log(typeof fecha);

var davidJSON={
    "nombre":"David",
    "edad": 12,
    "sueldo": 12.2,
    "casado": false,
    "hijos": null,
    "mascota":{
    "nombre":"cachetes"
    }
};
var david = {
    'nombre':'David',
    edad:29,
    sueldo:12.2,
    casado:false,
    hijos:null,
    deberes:undefined,
    mascota:{
        nombre:'Cachetes'
    },
};
console.log(david.casado);
//truthy
//falsy

if(undefined && false){
    console.log("Si");
}else{
    console.log("No");
}



