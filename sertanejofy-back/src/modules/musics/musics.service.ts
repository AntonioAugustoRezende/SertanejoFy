import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicRepository } from './repositories/music.repository';

@Injectable()
export class MusicsService {
  constructor(private musicRepository: MusicRepository) {}
  async create(createMusicDto: CreateMusicDto) {
    const music = await this.musicRepository.create(createMusicDto);
    return music;
  }

  async findAll(group: string | undefined) {
    return await this.musicRepository.findAll(group);
  }

  async findOne(id: string) {
    const musicFind = this.musicRepository.findOne(id);
    if (!musicFind) {
      throw new NotFoundException('Music not found.');
    }
    return musicFind;
  }
}
