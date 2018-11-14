declare var require;
const inquirer = require('inquirer');
const fs = require('fs');

const moto = {
 "marca" = "",
 "modelo" = "",
 "anio" = "",
 "color" = ""
}

const fs = require('fs');

const NombreArchivo = 'Venta.json'


const leerArchivo = new Promise(resolve)=>{

    fs.readFile(NombreArchivo,utf-8,(err, ContenidoArchivo)=>{
        if (err){
            resolve('{"listaDeMotos": []}');
        } else{
            resolve(ContenidoArchivo);
        }
    });
};

const escribirArchivo = (contenidoLeido, motoNueva) => {
    return new Promise(
        (resolve, reject) => {

            const contenido = contenidoLeido ? contenidoLeido + motoNueva : motoNueva;

            fs.writeFile(NombreArchivo, contenido, (err,) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenido);
                    }
                });
        }
    );
};

const buscarArchivo = (contenidoLeido, razon, llave) => {
    return new Promise(
        (resolve, reject) => {
            const obj = Json.parse(contenidoLeido);
            if(razon === 'marca'){
                obj['listaDeMotos'].forEach((valorActual,indiceActual, arreglo)=>
                    const str = JSON.stringify(obj['listaDeMotos'][indiceActual].marca);
                if (str === llave){
                    let respuesta = JSON.stringify(obj['listaDeMotos'][indiceActual]);
                }
                )
            }else if (razon === 'anio'){
                obj['listaDeMotos'].forEach((valorActual,indiceActual, arreglo)=>
                const str = JSON.stringify(obj['listaDeMotos'][indiceActual].anio);
                if (str === llave){
                    let respuesta = JSON.stringify(obj['listaDeMotos'][indiceActual]);

            }         }
            if(respuesta) {
                resolve(respuesta);
            } else {
                console.log('No existe');
                reject();
            }
            }
        }
    );
};

module.exports = {
    registrarMoto: (marca,modelo,anio, color)=>{
        moto.marca = marca;
        moto.modelo = modelo;
        moto.anio = anio;
        moto.color = color;

        leerArchivo.then(
            contenido => {
                return escribirArchivo(contenido,moto);
            }
        ).catch(
            resultadoError=>{
                console.log('Paso un error', resultadoError)
            }
        );
    }
}

const menu = [{type= 'list',name='menu',message='Que quieres hacer?', choice = opciones},];

const opciones = ['Ingresar moto','Buscar moto','actualizar moto', 'Eliminar moto'];




inquirer.pro