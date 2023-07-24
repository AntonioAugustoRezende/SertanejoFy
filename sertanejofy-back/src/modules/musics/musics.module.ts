import { BadRequestException, Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { MusicRepository } from './repositories/music.repository';

import { PrismaService } from 'src/database/prisma.service';
import { MusicPrismaRepository } from './repositories/prisma/prisma.repository';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname);
        },
      }),
      fileFilter: (_, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'audio/mpeg') {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('Only jpeg and mp3 format allowed'),
            false,
          );
        }
      },
    }),
  ],
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
