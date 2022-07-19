import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity('livro')
export class Livro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    nome: string;

    @Column()
    preco: number;
}