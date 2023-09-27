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

const inter = Roboto_Flex({ weight: ["700"], subsets: ["latin"] });

export default function Home() {
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
          <div className=" p-6 ">
            <h1 className="font-semibold text-3xl mt-12">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <a
                href="#"
                className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/images.jpeg"
                  alt="Capa do album"
                  width={104}
                  height={104}
                />
                <strong>Gusttavo Lima </strong>
                <button className=" w-12 h-12 pl-0.5 bg-green-400 text-black rounded-full flex items-center justify-center ml-auto mr-8 invisible group-hover:visible">
                  <GrPlayFill />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/images.jpeg"
                  alt="Capa do album"
                  width={104}
                  height={104}
                />
                <strong>Gusttavo Lima </strong>
                <button className=" w-12 h-12 pl-0.5 bg-green-400 text-black rounded-full flex items-center justify-center ml-auto mr-8 invisible group-hover:visible">
                  <GrPlayFill />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/images.jpeg"
                  alt="Capa do album"
                  width={104}
                  height={104}
                />
                <strong>Gusttavo Lima </strong>
                <button className=" w-12 h-12 pl-0.5 bg-green-400 text-black rounded-full flex items-center justify-center ml-auto mr-8 invisible group-hover:visible">
                  <GrPlayFill />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/images.jpeg"
                  alt="Capa do album"
                  width={104}
                  height={104}
                />
                <strong>Gusttavo Lima </strong>
                <button className=" w-12 h-12 pl-0.5 bg-green-400 text-black rounded-full flex items-center justify-center ml-auto mr-8 invisible group-hover:visible">
                  <GrPlayFill />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/images.jpeg"
                  alt="Capa do album"
                  width={104}
                  height={104}
                />
                <strong>Gusttavo Lima </strong>
                <button className=" w-12 h-12 pl-0.5 bg-green-400 text-black rounded-full flex items-center justify-center ml-auto mr-8 invisible group-hover:visible">
                  <GrPlayFill />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/images.jpeg"
                  alt="Capa do album"
                  width={104}
                  height={104}
                />
                <strong>Gusttavo Lima </strong>
                <button className=" w-12 h-12 pl-0.5 bg-green-400 text-black rounded-full flex items-center justify-center ml-auto mr-8 invisible group-hover:visible">
                  <GrPlayFill />
                </button>
              </a>
            </div>
          </div>
          <h2 className="font-semibold text-2xl mt-10 pl-6">
            Made for Antonio Rezende
          </h2>
          <div className="grid grid-cols-6 mt-6 p-6 gap-4">
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/images.jpeg"
                className="w-full"
                alt="Capa do album"
                width={86}
                height={86}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Gusttavo Lima, Gustavo Mioto and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className=" px-6 py-4 flex items-center justify-between w-full fixed bg-black bottom-0 z-[3]">
        <div className="flex items-center gap-2">
          <Image
            src="/images.jpeg"
            alt="Capa do album"
            width={56}
            height={56}
          />
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
            <button className=" w-8 h-8 flex items-center justify-center pl-0.5 bg-white text-black rounded-full">
              <GrPlayFill />
            </button>
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
    </div>
  );
}
