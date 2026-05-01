import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  @IsNotEmpty()
  text!: string;
}
