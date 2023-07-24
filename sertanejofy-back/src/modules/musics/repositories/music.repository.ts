import { CreateMusicDto } from '../dto/create-music.dto';
import { Music } from '../entities/music.entity';

export abstract class MusicRepository {
  abstract create(data: CreateMusicDto): Promise<Music> | Music;
  abstract findOne(id: string): Promise<Music | undefined> | Music;
  abstract findAll(group: string | undefined): Promise<Music[] | object>;
}
