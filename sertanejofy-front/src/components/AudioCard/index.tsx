"use client";

import Image from "next/image";
import PlayerButton from "./Button";
import { useState } from "react";
import { Track } from "@/contexts/playerContext";
import { usePlayer } from "@/hooks/usePlayer";

interface AudioCardProps {
  track: Track;
}

export default function AudioTrack({ track }: AudioCardProps) {
  const { currentTrack, isPlaying, handlePause, updateCurrentTrack } =
    usePlayer();

  const handlePlay = () => {
    updateCurrentTrack(track.music_url);
  };

  const isCurrentTrackPlaying =
    isPlaying && currentTrack?.src == track.music_url;

  const callback = isPlaying ? handlePause : handlePlay;
  return (
    <li
      onClick={callback}
      className="bg-white/5 group p-3 flex flex-col absolute gap-3 rounded-md hover:bg-white/10 cursor-pointer"
    >
      <Image
        src={track.cover_image}
        className="w-full"
        alt="Capa do album"
        width={86}
        height={86}
      />
      <strong className="font-semibold">{track.name}</strong>
      <span className="text-sm text-zinc-400">
        Gusttavo Lima, Gustavo Mioto and more
      </span>
      <PlayerButton isPlaying={isCurrentTrackPlaying} />
    </li>
  );
}
