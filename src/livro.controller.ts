import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import path from "path";
import { Livro } from "./livro.model";
import { LivroService } from "./livro.service";

@Controller('livros')
export class LivroController{

    constructor(private livroService: LivroService){

    }

    @Get('/listar')
    obterTodos(): Promise<Livro[]> {
        return this.livroService.obterTodos()
    }

    @Get('findById/:id')
    obterUm(@Param() params): Promise<Livro>{
        return this.livroService.obterUm(params.id)
    }

    @Post('insert')
    criar(@Body() livro: Livro): Promise<Livro>{
        return this.livroService.criar(livro)
    }


    @Put('update/:id')
    alterar(@Req() @Param() id: number, @Req() @Body() livro: Livro): Promise<Livro>{
        return this.livroService.alterar(id, livro)
    }

    @Delete('delete/:id')
    deletarLivro(@Param() params){
        this.livroService.deletar(params.id)
    }
}