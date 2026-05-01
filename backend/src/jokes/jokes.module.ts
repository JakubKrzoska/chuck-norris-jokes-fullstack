import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { Joke } from './joke.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Joke])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
