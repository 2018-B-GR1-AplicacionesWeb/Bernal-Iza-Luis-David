//import {paquete Uno, paquete DOS} from 'rxjs';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const disctinct = require('rxjs/operators').distinct;
const observableUnos$ = rxjs.of([1, 2, 3], "hola", 3, true, { nombre: 'David' }, new Date(), 3, 3, 3, 3);
//en el parentesis es lo que mandamos
//rxjs.of devuelve un observable
console.log(observableUnos$);
observableUnos$
    .pipe(disctinct(), map((valor) => {
    console.log('Valor', valor);
    return {
        data: valor
    };
}))
    .subscribe((ok) => {
    console.log(ok);
}, (error) => {
    console.log(error);
}, () => {
    console.log('Completado');
});
const promesa1 = () => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        resolve(':)');
    });
};
//hack-life
function ejecutarCodigoSyncrono() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Inicio');
        //Promesa --> ejecutar
        try {
            const resultadoPromesita = yield promesa1();
            console.log(resultadoPromesita);
        }
        catch (e) {
            console.log('Error en la promesita', e);
        }
        console.log('Fin');
    });
}
