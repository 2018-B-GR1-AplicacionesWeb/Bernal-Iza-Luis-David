import {Injectable} from "@nestjs/common";
import {Usuario} from "./app.controller";

@Injectable()
export class UsuarioService {

    arreglo:Usuario[]=[
        {
            id:1,
            nombre:'david',
            apellido:'bernal',
            cedula: 1724387293,
            telefono:1234567
        },
        {
            id:2,
            nombre:'Juan',
            apellido:'Loren',
            cedula: 987452121,
            telefono:12548
        },
        {
            id:3,
            nombre:'Pablo',
            apellido:'Avila',
            cedula: 1724387293,
            telefono:1234567
        }
    ]

    numeroRegistro = 5;

    crear(usuario:Usuario):Usuario{
        usuario.id=this.numeroRegistro;
        this.numeroRegistro++;
        this.arreglo.push(usuario);
        return usuario;
    }

    eliminar(idUsuario:number):Usuario{
        const indiceUsuario = this.arreglo
            .findIndex(
                (usuario)=>{
                    return usuario.id === idUsuario
                }
            );
        const registroEliminado = JSON.parse(JSON.stringify(this.arreglo[indiceUsuario]));
        this.arreglo.splice(indiceUsuario,1);
        return registroEliminado;
    }

    actualizar(idUsuario: number,nuevoUsuario:Usuario){
        const indiceUsuario = this.arreglo
            .findIndex(
                (usuario)=>{
                    return usuario.id === idUsuario
                }
            );
        this.arreglo[indiceUsuario]=nuevoUsuario;
        return this.arreglo[indiceUsuario];
    }

    buscarPorId(idUsuario: number): Usuario{
        const indiceUsuario = this.arreglo
            .findIndex(
                (usuario)=>{
                    return usuario.id === idUsuario
                }
            );
        return this.arreglo[indiceUsuario];
    }
}