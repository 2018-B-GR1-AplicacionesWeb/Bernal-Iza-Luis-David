/*
const nuevaPromesa = new Promise(
    (resolve, reject)=>{
        fs.readFile('06-texto02.txt','utf-8',
            (err, contenidoArchivo)=>{
                if (err){
                    reject();
                } else{
                    resolve();
                }
            }
            );
    }
);

console.log(nuevaPromesa);

nuevaPromesa.then(
    (resultadoOK)=> {
        console.log('Todo bien', resultadoOK);
    }
).catch(
    (resultadoError)=>{
        console.log('Algo malo Paso',resultadoError);
    }
);*/
const promesaEjercicio = new Promise(
    (resolve)=>{
        appendFile('06-texto02.txt',
            '\n Adios mundo',
            (contenidoArchivo) => {
                console.log(contenidoArchivo);
            }
        );
    }
);
console.log(nuevaPromesa2);
nuevaPromesa2.then(
    (resultadoOK)=> {
        console.log('Todo bien', resultadoOK);
    }
nuevaPromesa2.then(
    (resultadoOK)=> {
        console.log('Todo bien', resultadoOK);
    }
nuevaPromesa2.then(
    (resultadoOK)=> {
        console.log('Todo bien', resultadoOK);
    }
);

