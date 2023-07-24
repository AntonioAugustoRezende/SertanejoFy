import { Injectable } from '@nestjs/common';
import { MusicRepository } from '../music.repository';
import { CreateMusicDto } from '../../dto/create-music.dto';
import { Music } from '../../entities/music.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MusicPrismaRepository implements MusicRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateMusicDto): Promise<Music> {
    const music = new Music();
    Object.assign(music, {
      ...data,
    });

    const newMusic = await this.prisma.music.create({
      data: { ...music },
    });
    return newMusic;
  }
  async findOne(id: string): Promise<Music> {
    const music = await this.prisma.music.findUnique({
      where: {
        id: id,
      },
    });

    return music;
  }
  private groupBy(music: Music[], key: string) {
    return music.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }
  async findAll(group: string): Promise<object | Music[]> {
    const musics = await this.prisma.music.findMany();
    if (group) {
      return this.groupBy(musics, group);
    }
    return musics;
  }
}
