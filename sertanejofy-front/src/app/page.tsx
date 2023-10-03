import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GrPlayFill } from "react-icons/gr";
import { RxShuffle } from "react-icons/rx";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { RiRepeatFill } from "react-icons/ri";
import { BsFilePlay, BsPcDisplay } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { FiMaximize2 } from "react-icons/fi";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { Roboto_Flex } from "next/font/google";
import { api } from "@/services/api";
import ListTracks from "@/components/ListTracks";
import { Track } from "@/contexts/playerContext";
import Player from "@/components/Player";

const inter = Roboto_Flex({ weight: ["700"], subsets: ["latin"] });

export default async function Home() {
  const response = await api.get<Track[]>("/musics");

  return (
    <div className={`${inter.className} font-bold h-screen flex flex-col`}>
      <div className="flex flex-1 ">
        <aside className="w-72 p-6">
          <nav className="space-y-5 bg-zinc-900 p-4 rounded">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold  text-zinc-400 hover:text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold  text-zinc-400 hover:text-zinc-100"
            >
              <Search />
              Search
            </a>
          </nav>
          <nav className="mt-4 h-[87%] pt-6 flex flex-col gap-3  bg-zinc-900 p-4 rounded">
            <div className="flex items-center justify-between">
              <a
                href=""
                className="flex items-center gap-3 text-sm font-semibold  text-zinc-400 hover:text-zinc-100 mb-2"
              >
                <Library />
                Library
              </a>
              <div className="flex items-center">
                <button className="rounded-full hover:bg-black/40 p-1 flex items-center  text-zinc-400 hover:text-zinc-100">
                  <AiOutlinePlus size={20} />
                </button>
                <button className="rounded-full hover:bg-black/40 p-1 flex items-center ml-2  text-zinc-400 hover:text-zinc-100">
                  <AiOutlineArrowRight size={20} />
                </button>
              </div>
            </div>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
          </nav>
        </aside>
        <main className="flex-1 rounded mt-6 bg-gradient-to-b from-blue-900/40 from-0% to-zinc-900 to-10% text-gray-100">
          <div className="flex items-center gap-4 fixed z-[3]  rounded w-full pl-6 py-3">
            <button className="rounded-full bg-black/40 p-1 flex items-center">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1 flex items-center">
              <ChevronRight />
            </button>
          </div>
          <h2 className="font-semibold text-2xl mt-20 pl-6">
            Made for Antonio Rezende
          </h2>

          <ListTracks tracks={response.data} />
        </main>
      </div>
    </div>
  );
}
