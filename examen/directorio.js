// 1) Busque los tipos de "gender" en el arreglo `people.json`
const inquirer = require ('inquirer');
const fs = require('fs');
/*
function buscarGender() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            );

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

let contador = 0

var arregloMale = []

buscarGender()
    .then(
        (contenidoArchivo)=>{
            contenidoArchivo.map(
                (personas)=>{
                    if (personas === 'male'){
                        arregloMale.push(personas);
                       console.log(arregloMale.length)
                    }
                }
            );
        }
    ).catch(
    (resultadoError)=>{
        console.log('Algo malo paso',resultadoError);
    }
)
// 2) Busque los tipos de "eye_color" en el arreglo `people.json`

function buscarEye() {
    return new Promise(
        (resolve,reject)=>{
            fs.readFile('people.json','UTF-8',(err,contenido)=>{
               if (err){
                   reject({mensaje:'Errorsito'})
               } else{
                   const basesita = JSON.parse(contenido);
                   const respuesBusqueda = basesita.persona
                       .map(
                       (people)=>{
                           return people.eye_color;
                       }
                   )
                   resolve(respuesBusqueda);

               }
            });
        }
    );
}

buscarEye()

.then(
    (contenidoOjos)=>{
        console.log(contenidoOjos)
    }
).catch(
    (resultadoError)=>{
        console.log(resultadoError)
    }
)



// 3) Busque los tipos de "skin_color" en el arreglo `people.json`

function skinColor() {
    return new Promise(
        (resolve, reject)=>{
            fs.readFile('people.json','UTF-8',(err,contenido)=>{
                if(err){
                    reject({mensaje:'errores'})
                }else{
                    const basesita = JSON.parse(contenido);
                    const respuestaSkin = basesita.persona.map(
                        (people)=>{
                            return people.skin_color;
                        }
                    );
                    resolve(respuestaSkin);
                }
                }

            );
        }

    );
}
skinColor()
    .then(
        (respuestaojos)=>{
            console.log(respuestaojos);c
        }
    ).catch(
    (error)=>{
        console.log(error);
    }
)

// 4) Busque los tipos de "hair_color" en el arreglo `people.json`

function hairColor() {
    return new Promise(
        (resolve, reject)=>{
            fs.readFile('people.json','UTF-8',(err,contenido)=>{
                    if(err){
                        reject({mensaje:'errores'})
                    }else{
                        const basesita = JSON.parse(contenido);
                        const respuestahair = basesita.persona.map(
                            (people)=>{
                                return people.hair_color;
                            }
                        );
                        resolve(respuestahair);
                    }
                }

            );
        }

    );
}
hairColor()
    .then(
        (respuestaHair)=>{
            console.log(respuestaHair);
        }
    ).catch(
    (error)=>{
        console.log(error);
    }
)*/

// 5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
// EJ: Si hay gender `Male` y `Female`, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean `Male` y `Female`

function clasificarGender() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            );

                        resolve(respuestaFind);
                    }
                });
        }
    );
}
var arregloFemale = []
var arregloMale = []

clasificarGender()
    .then(
        (contenidoArchivo)=>{
            contenidoArchivo.map(
                (personas)=>{
                    if (personas === 'male'){
                        arregloMale.push(personas);
                        console.log(arregloMale);
                    }else{(personas ==='female')
                        arregloFemale.push(personas);
                        console.log(arregloFemale);
                    }
                }
            );
        }
    ).catch(
    (resultadoError)=>{
        console.log('Algo malo paso',resultadoError);
    }
)


/* 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.

    Ejemplo de respuesta:

    ```typescript
const arregloRespuesta =[
    {
        a:true
    },
    {
        b:false
    },
];
*/


const arregloRespuesta =[

];

function buscarABECEDARIO() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.name;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}



buscarABECEDARIO()
    .then(
        (contenidoArchivo)=>{
            console.log(contenidoArchivo)
            contenidoArchivo.map(
                (usuarios)=>{
                    if(usuarios === 'a'|usuarios === 'b'|usuarios === 'c'|usuarios === 'd'|usuarios === 'e'){
                        arregloRespuesta.push()
                    }
                }
            )
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )