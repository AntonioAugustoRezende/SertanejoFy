"use client";
import { Track } from "@/contexts/playerContext";
import AudioTrack from "../AudioCard";
import { usePlayer } from "@/hooks/usePlayer";
import { useEffect } from "react";

interface TrackListProps {
  tracks: Track[];
}

export default function ListTracks({ tracks }: TrackListProps) {
  const { setPlayList } = usePlayer();

  useEffect(() => {
    setPlayList(tracks);
  }, [tracks, setPlayList]);
  return (
    <ul className="grid grid-cols-6 mt-6 p-6 gap-4">
      {tracks.map((track) => (
        <AudioTrack key={track.id} track={track} />
      ))}
    </ul>
  );
}
