import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NoticiaService} from "./noticia/noticia.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import {NoticiaEntity} from "./noticia/noticia-entity";
import {PaginaEntity} from "./pagina/pagina.entity";
import {ArticuloEntity} from "./articulo/articulo.entity";
import {NoticiaModule} from "./noticia/noticia.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario..module";

@Module({
  imports: [
      TypeOrmModule.forRoot(
          {
              type:'mysql',
              host:'localhost',
              port: 32769,
              database: 'web',
              username:'david',
              password:'david',
              synchronize:true,
              dropSchema: false,
              entities:[
                  NoticiaEntity,
                  PaginaEntity,
                  ArticuloEntity,
                  UsuarioEntity
              ]
          }
      ),
      NoticiaModule,
      UsuarioModule
  ],
    //MODULOS
  controllers: [
      AppController
  ], //CONTROLADORES
  providers: [    //SERVICIOS
      AppService
  ],
})
export class AppModule {}
