//import {paquete Uno, paquete DOS} from 'rxjs';

/*import * as rxjs from 'rxjs';
import {Observable} from "rxjs";*/

declare var require;
declare var module: any;

const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const disctinct = require('rxjs/operators').distinct;
const observableUnos$ = rxjs.of([1,2,3],"hola",3,true,{nombre:'David'},new Date(),3,3,3,3);
//en el parentesis es lo que mandamos
//rxjs.of devuelve un observable
console.log(observableUnos$);

observableUnos$
    .pipe(
        disctinct(),
        map(
            (valor)=>{
                console.log('Valor', valor)
                return {
                    data:valor
                }
            }
        )
    )
    .subscribe(
        (ok)=>{
            console.log(ok);
        },
        (error)=>{
            console.log(error);
        },
        ()=>{
            console.log('Completado')
        }
    );

const promesa1 = () => {
    // @ts-ignore
    return new Promise(
        (resolve, reject) => {
            resolve(':)');
        }
    )
};

//hack-life

async function ejecutarCodigoSyncrono() {
    console.log('Inicio');
    //Promesa --> ejecutar
    try {
        const resultadoPromesita = await promesa1();
        console.log(resultadoPromesita);
    }catch (e) {
        console.log('Error en la promesita',e);
    }
    console.log('Fin');
}

