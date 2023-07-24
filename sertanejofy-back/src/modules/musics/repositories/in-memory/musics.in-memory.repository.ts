import { Injectable } from '@nestjs/common';
import { MusicRepository } from '../music.repository';
import { Music } from '../../entities/music.entity';
import { CreateMusicDto } from '../../dto/create-music.dto';
import { UpdateMusicDto } from '../../dto/update-music.dto';

@Injectable()
export class MusicInMemoryRepository implements MusicRepository {
  update(data: UpdateMusicDto, musicId: string): Promise<Music> {
    throw new Error('Method not implemented.');
  }
  private database: Music[] = [];
  async create(data: CreateMusicDto): Promise<Music> {
    const newMusic = new Music();
    Object.assign(newMusic, {
      cover_image: data.cover_image || null,
      music_url: data.music_url || null,
      ...data,
    });

    this.database.push(newMusic);

    return newMusic;
  }
  async findOne(id: string): Promise<Music> {
    const musicOne = this.database.find((music) => music.id === id);

    return musicOne;
  }
  private groupBy(music: Music[], key: string) {
    return music.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }
  async findAll(group: string): Promise<object | Music[]> {
    if (group) {
      return this.groupBy(this.database, group);
    }
    return this.database;
  }
}
