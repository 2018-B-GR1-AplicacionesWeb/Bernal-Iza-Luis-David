var inquirer = require('inquirer');
var fs = require('fs');
var menu = [{ type: type, name: name, message: message, choice: choice },];
var opciones = ['Ingresar moto', 'Buscar moto', 'actualizar moto', 'Eliminar moto'];
var preguntasIngresar = [
    { type: type, name: name, message: message },
    { type: type, name: name, message: message },
    { type: type, name: name, message: message },
];
inquirer.prompt(menu);
{
    then(opcionSelecionada);
    {
        switch (opcionSelecionada.menu) {
            case 'Ingresar moto':
                inquirer.prompt(preguntasIngresar);
                break;
            case 'Buscar moto':
                break;
            case 'actualizar moto':
                break;
            case 'Eliminar moto':
                break;
        }
    }
}
var moto = {
    "marca": "",
    "modelo": "",
    "anio": "",
    "color": ""
};
var NombreArchivo = 'Venta.json';
var leerArchivo = new Promise(function (resolve) {
    fs.readFile(NombreArchivo, 'utf-8', function (err, ContenidoArchivo) {
        if (err) {
            resolve('{"listaDeMotos": []}');
        }
        else {
            resolve(ContenidoArchivo);
        }
    });
});
var escribirArchivo = function (contenidoLeido, motoNueva) {
    return new Promise(function (resolve, reject) {
        var contenido = contenidoLeido ? contenidoLeido + motoNueva : motoNueva;
        fs.writeFile(NombreArchivo, contenido, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(contenido);
            }
        });
    });
};
var buscarArchivo = function (contenidoLeido, razon, llave) {
    return new Promise(function (resolve, reject) {
        var obj = JSON.parse(contenidoLeido);
        if (razon === 'marca') {
            obj['listaDeMotos'].forEach(function (valorActual, indiceActual, arreglo) {
                var str = JSON.stringify(obj['listaDeMotos'][indiceActual].marca);
                if (str === llave) {
                    var respuesta = JSON.stringify(obj['listaDeMotos'][indiceActual]);
                }
            });
        }
        else if (razon === 'anio') {
            obj['listaDeMotos'].forEach(function (valorActual, indiceActual, arreglo) {
                var str = JSON.stringify(obj['listaDeMotos'][indiceActual].anio);
                if (str === llave) {
                    var respuesta = JSON.stringify(obj['listaDeMotos'][indiceActual]);
                    if (respuesta) {
                        resolve(respuesta);
                    }
                    else {
                        console.log('No existe');
                        reject();
                    }
                }
            });
        }
    });
};
/*module.exports = {
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
}*/
