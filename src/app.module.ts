import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { LivroController } from './livro.controller';
import { Livro } from './livro.model';
import { LivroService } from './livro.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'livraria',
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([Livro])
  ],
  controllers: [ LivroController],
  providers: [AppService, LivroService],
})
export class AppModule {}
