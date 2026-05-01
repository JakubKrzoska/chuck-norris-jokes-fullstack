import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { AuthGuard } from '@nestjs/passport';

interface RequestWithUser {
  user: {
    userId: string;
    email: string;
  };
}

@UseGuards(AuthGuard('jwt'))
@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  create(
    @Body() createJokeDto: CreateJokeDto,
    @Request() req: RequestWithUser,
  ) {
    return this.jokesService.create(createJokeDto, req.user.userId);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    return this.jokesService.findAllForUser(req.user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.jokesService.remove(+id, req.user.userId);
  }
}
