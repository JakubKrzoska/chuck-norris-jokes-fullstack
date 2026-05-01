import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { JokesModule } from './jokes/jokes.module';
import { Joke } from './jokes/joke.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Joke],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    JokesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
