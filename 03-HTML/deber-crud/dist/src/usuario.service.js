"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let UsuarioService = class UsuarioService {
    constructor() {
        this.arreglo = [
            {
                id: 1,
                nombre: 'david',
                apellido: 'bernal',
                cedula: 1724387293,
                telefono: 1234567
            },
            {
                id: 2,
                nombre: 'Juan',
                apellido: 'Loren',
                cedula: 987452121,
                telefono: 12548
            },
            {
                id: 3,
                nombre: 'Pablo',
                apellido: 'Avila',
                cedula: 1724387293,
                telefono: 1234567
            }
        ];
        this.numeroRegistro = 5;
    }
    crear(usuario) {
        usuario.id = this.numeroRegistro;
        this.numeroRegistro++;
        this.arreglo.push(usuario);
        return usuario;
    }
    eliminar(idUsuario) {
        const indiceUsuario = this.arreglo
            .findIndex((usuario) => {
            return usuario.id === idUsuario;
        });
        const registroEliminado = JSON.parse(JSON.stringify(this.arreglo[indiceUsuario]));
        this.arreglo.splice(indiceUsuario, 1);
        return registroEliminado;
    }
    actualizar(idUsuario, nuevoUsuario) {
        const indiceUsuario = this.arreglo
            .findIndex((usuario) => {
            return usuario.id === idUsuario;
        });
        this.arreglo[indiceUsuario] = nuevoUsuario;
        return this.arreglo[indiceUsuario];
    }
    buscarPorId(idUsuario) {
        const indiceUsuario = this.arreglo
            .findIndex((usuario) => {
            return usuario.id === idUsuario;
        });
        return this.arreglo[indiceUsuario];
    }
};
UsuarioService = __decorate([
    common_1.Injectable()
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map