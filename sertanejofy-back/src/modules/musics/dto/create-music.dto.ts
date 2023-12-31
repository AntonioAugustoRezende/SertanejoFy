import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  album: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  artist: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_image: string | null;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  music_url: string | null;
}
