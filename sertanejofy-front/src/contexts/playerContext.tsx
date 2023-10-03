"use client";
import Player from "@/components/Player";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface Track {
  id: number;
  name: string;
  cover_image: string;
  music_url: string;
}

interface ProviderValues {
  currentTrack: HTMLAudioElement | null;
  playList: Track[];
  setPlayList: Dispatch<SetStateAction<Track[]>>;
  handlePlay: () => void;
  handlePause: () => void;
  isPlaying: boolean;
  updateCurrentTrack: (trackUrl: string) => void;
}
export const PlayerContext = createContext<ProviderValues>(
  {} as ProviderValues
);

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [playList, setPlayList] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    currentTrack?.play();
  }, [currentTrack]);

  const handlePlay = () => {
    currentTrack?.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    currentTrack?.pause();
    setIsPlaying(false);
  };

  const updateCurrentTrack = (trackUrl: string) => {
    currentTrack?.pause();
    setIsPlaying(true);
    setCurrentTrack(new Audio(trackUrl));
  };
  return (
    <PlayerContext.Provider
      value={{
        playList,
        setPlayList,
        currentTrack,
        handlePause,
        handlePlay,
        isPlaying,
        updateCurrentTrack,
      }}
    >
      {children}
      <Player />
    </PlayerContext.Provider>
  );
};
