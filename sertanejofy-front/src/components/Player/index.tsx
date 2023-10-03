"use client";
import Image from "next/image";
import { BsFilePlay, BsPcDisplay } from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { HiOutlineQueueList } from "react-icons/hi2";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { RiRepeatFill } from "react-icons/ri";
import { RxShuffle } from "react-icons/rx";
import PlayerButtonFooter from "./ButtonPlayFooter";
import { usePlayer } from "@/hooks/usePlayer";

export default function Player() {
  const { handlePause, handlePlay, isPlaying } = usePlayer();
  return (
    <footer className=" px-6 py-6 flex items-center justify-between w-full bg-black h-[96px]">
      <div className="flex items-center gap-2">
        <Image src="/images.jpeg" alt="Capa do album" width={56} height={56} />
        <div className="flex flex-col ">
          <strong className="font-normal">Porta malas </strong>
          <span className="text-xs text-zinc-400">Gusttavo Lima</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-6">
          <RxShuffle size={20} className="text-zinc-200 cursor-pointer" />
          <IoPlaySkipBackSharp
            size={20}
            className="text-zinc-200 cursor-pointer"
          />

          <PlayerButtonFooter
            handlePause={handlePause}
            handlePlay={handlePlay}
            isPlaying={isPlaying}
          />

          <IoPlaySkipForwardSharp
            size={20}
            className="text-zinc-200 cursor-pointer"
          />
          <RiRepeatFill size={20} className="text-zinc-200 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600 ">
            <div className="h-1 w-40 bg-white rounded-full"></div>
          </div>
          <span className="text-sm text-zinc-400">2:45</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BsFilePlay size={20} className="cursor-pointer" />
        <HiOutlineQueueList size={20} className="cursor-pointer" />
        <BsPcDisplay size={20} className="cursor-pointer" />
        <IoVolumeHighOutline size={25} className="cursor-pointer" />
        <div className="h-1 w-24 rounded-full bg-white "></div>
        <FiMaximize2 size={20} className="cursor-pointer" />
      </div>
    </footer>
  );
}
