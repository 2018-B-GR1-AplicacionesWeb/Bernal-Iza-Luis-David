import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario.service";

@Module({
    imports: [],   //Modulos
    controllers: [AppController],  //Controladores
    providers: [
        AppService,
        UsuarioService
    ],    //Servicios
})
export class AppModule {}
