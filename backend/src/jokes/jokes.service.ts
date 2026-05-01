import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke.entity';
import { CreateJokeDto } from './dto/create-joke.dto';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke)
    private jokesRepository: Repository<Joke>,
  ) {}

  async create(createJokeDto: CreateJokeDto, userId: string): Promise<Joke> {
    const newJoke = this.jokesRepository.create({
      text: createJokeDto.text,
      user: { id: userId }, // Automatically link the joke to the logged-in user
    });
    return this.jokesRepository.save(newJoke);
  }

  async findAllForUser(userId: string): Promise<Joke[]> {
    return this.jokesRepository.find({
      where: { user: { id: userId } },
    });
  }

  async remove(id: number, userId: string): Promise<void> {
    // Ensure the user only deletes their own joke
    const result = await this.jokesRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException('Joke not found or unauthorized.');
    }
  }
}
