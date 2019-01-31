//pagina.entity.ts

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ArticuloEntity} from "../articulo/articulo.entity";
import {NoticiaEntity} from "../noticia/noticia-entity";

@Entity('pagina')

export class PaginaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    numero: number;

    @ManyToOne(
        type => NoticiaEntity, //Tipo Tabla
        noticia => noticia.paginas
    )
    noticia: NoticiaEntity;

    @OneToMany(
        type => ArticuloEntity,
        articulo => articulo.pagina
    )
    articulos: ArticuloEntity[]
}