"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const usuario_service_1 = require("./usuario.service");
let AppController = class AppController {
    constructor(_appService, _usuarioService) {
        this._appService = _appService;
        this._usuarioService = _usuarioService;
    }
    inicio(response) {
        response.render('inicio');
    }
    listaClientes(response, consulta, accion, nombre) {
        let mensaje = undefined;
        if (accion && nombre) {
            switch (accion) {
                case 'borrar':
                    mensaje = `Cliente ${nombre} eliminado`;
                    break;
                case 'crear':
                    mensaje = `Cliente ${nombre} creado`;
                    break;
                case 'actualizar':
                    mensaje = `Cliente ${nombre} actualizado`;
                    break;
            }
        }
        response.render('listaClientes', {
            usuario: 'david',
            arreglo: this._usuarioService.arreglo,
            mensaje: mensaje
        });
    }
    eliminar(response, idUsuario) {
        const usuarioBorrado = this._usuarioService.eliminar(Number(idUsuario));
        const parametrosConsulta = `?accion=borrar&nombre=${usuarioBorrado.nombre}`;
        response.redirect('/listaClientes' + parametrosConsulta);
    }
    crearUsuarioRuta(response) {
        response.render('crearUsuario');
    }
    crearUsuarioFuncion(response, usuario) {
        const usuarioCreado = this._usuarioService.crear(usuario);
        const parametrosConsulta1 = `?accion=crear&nombre=${usuarioCreado.nombre}`;
        response.redirect('/listaClientes' + parametrosConsulta1);
    }
    actualizarUsuario(response, idUsuario) {
        const usuarioEncontrado = this._usuarioService
            .buscarPorId(+idUsuario);
        response.render('crearUsuario', {
            usuario: usuarioEncontrado
        });
    }
    actualizarUsuarioMetodo(response, idUsuario, usuario) {
        usuario.id = +idUsuario;
        const usuarioActualizado = this._usuarioService.actualizar(+idUsuario, usuario);
        const parametrosConsulta = `?accion=actualizar&nombre=${usuarioActualizado.nombre}`;
        response.redirect('/listaClientes' + parametrosConsulta);
    }
};
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "inicio", null);
__decorate([
    common_1.Get('listaClientes'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __param(2, common_1.Query('accion')),
    __param(3, common_1.Query('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "listaClientes", null);
__decorate([
    common_1.Post('eliminar/:idUsuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "eliminar", null);
__decorate([
    common_1.Get('crearUsuario'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "crearUsuarioRuta", null);
__decorate([
    common_1.Post('crearUsuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "crearUsuarioFuncion", null);
__decorate([
    common_1.Get('actualizarUsuario/:idUsuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "actualizarUsuario", null);
__decorate([
    common_1.Post('actualizarUsuario/:idUsuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idUsuario')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "actualizarUsuarioMetodo", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        usuario_service_1.UsuarioService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map