import z from "zod";

export const MusicSchema = z.object({
  id: z.string(),
  name: z.string(),
  album: z.string(),
  genre: z.string(),
  artist: z.string(),
  year: z.string(),
  cover_image: z.string(),
  music_url: z.string(),
});

export type musicData = z.infer<typeof MusicSchema>;
