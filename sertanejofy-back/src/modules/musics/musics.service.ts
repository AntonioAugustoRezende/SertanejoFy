import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Injectable()
export class MusicsService {
  create(createMusicDto: CreateMusicDto) {
    return 'This action adds a new music';
  }

  findAll() {
    const user = 'teste oi dfasd fdasdf';

    console.log(user);

    return `This action returns all musics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} music`;
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return `This action removes a #${id} music`;
  }
}
