import {Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario.service";

@Controller()
export class AppController {
    constructor(private readonly _appService: AppService,
                private readonly _usuarioService:UsuarioService) {}

    @Get('inicio')
    inicio(
        @Res() response,
    ){
        response.render('inicio')
    }

    @Get('listaClientes')
    listaClientes(
        @Res() response,
        @Query() consulta,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
    ){
        let mensaje = undefined;
        if(accion && nombre){
            switch (accion) {
                case 'borrar':
                    mensaje = `Cliente ${nombre} eliminado`
                    break;
                case 'crear':
                    mensaje = `Cliente ${nombre} creado`
                    break;
                case 'actualizar':
                    mensaje = `Cliente ${nombre} actualizado`
                    break;
            }
        }
        response.render(
            'listaClientes',{
                usuario:'david',
                arreglo:this._usuarioService.arreglo,
                mensaje:mensaje
            }
        )
    }

    @Post('eliminar/:idUsuario')
    eliminar(
        @Res() response,
        @Param('idUsuario') idUsuario: string,
    ){
        const usuarioBorrado = this._usuarioService.eliminar(Number(idUsuario));
        const parametrosConsulta = `?accion=borrar&nombre=${
            usuarioBorrado.nombre
            }`;
        response.redirect('/listaClientes'+parametrosConsulta)
    }

    @Get('crearUsuario')
    crearUsuarioRuta(
        @Res() response,
    ){
        response.render('crearUsuario')
    }

    @Post('crearUsuario')
    crearUsuarioFuncion(
        @Res() response,
        @Body() usuario:Usuario
    ){
        const usuarioCreado = this._usuarioService.crear(usuario);
        const parametrosConsulta1 = `?accion=crear&nombre=${
            usuarioCreado.nombre
            }`;

    response.redirect('/listaClientes'+parametrosConsulta1)
}

@Get('actualizarUsuario/:idUsuario')
actualizarUsuario(
    @Res() response,
    @Param('idUsuario') idUsuario:string,
){
    //el "+" transforma un numero a un string
    const usuarioEncontrado = this._usuarioService
        .buscarPorId(+idUsuario);

    response.render(
        'crearUsuario',
        {
            usuario: usuarioEncontrado
        }
    )
}

@Post('actualizarUsuario/:idUsuario')
actualizarUsuarioMetodo(
    @Res() response,
    @Param('idUsuario') idUsuario:string,
    @Body() usuario
){
    usuario.id = +idUsuario;

    const usuarioActualizado = this._usuarioService.actualizar(+idUsuario, usuario);
    const parametrosConsulta = `?accion=actualizar&nombre=${
        usuarioActualizado.nombre
        }`;
    response.redirect(
        '/listaClientes'+parametrosConsulta
    )

}
}

export interface Usuario{
    id?:number;
    nombre:string;
    apellido:string;
    cedula:number;
    telefono:number;
}
