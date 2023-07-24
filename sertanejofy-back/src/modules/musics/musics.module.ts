import { Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { MusicRepository } from './repositories/music.repository';

import { PrismaService } from 'src/database/prisma.service';
import { MusicPrismaRepository } from './repositories/prisma/prisma.repository';

@Module({
  controllers: [MusicsController],
  providers: [
    MusicsService,
    PrismaService,
    {
      provide: MusicRepository,
      useClass: MusicPrismaRepository,
    },
  ],
})
export class MusicsModule {}
