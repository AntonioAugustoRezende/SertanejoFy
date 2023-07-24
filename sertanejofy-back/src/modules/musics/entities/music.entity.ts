import { randomUUID } from 'node:crypto';

export class Music {
  readonly id: string;
  name: string;
  album: string;
  genre: string;
  artist: string;
  year: string;
  cover_image: string | null;
  music_url: string | null;

  constructor() {
    this.id = randomUUID();
  }
}
