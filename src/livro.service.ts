import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Livro } from "./livro.model";

@Injectable()
export class LivroService{

    constructor(
        @InjectRepository(Livro)
        private livroRepositorio: Repository<Livro>)
        {}

    async obterTodos(): Promise<Livro[]>{
        return this.livroRepositorio.find();
    }

    async obterUm(id: number): Promise<Livro>{
        return this.livroRepositorio.findOneBy({id});
    }

    async criar(livro: Livro): Promise<Livro>{
        return this.livroRepositorio.save(livro);
    }

    async alterar(id: number, livro: Livro): Promise<Livro>{
        if(this.obterUm(id) != null){
            this.livroRepositorio.update(id, livro)
            return this.livroRepositorio.findOneBy({id});
        }

        throw new HttpException(`Livro ${id} não existe no sistema`, HttpStatus.NOT_FOUND);
    }

    async deletar(id: number){
        this.livroRepositorio.delete(id)
    }

}