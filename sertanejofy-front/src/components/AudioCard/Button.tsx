import { GrPlayFill, GrPauseFill } from "react-icons/gr";

interface PlayButtonProps {
  isPlaying: boolean;
}

export default function PlayerButton({ isPlaying }: PlayButtonProps) {
  const Icon = isPlaying ? GrPauseFill : GrPlayFill;
  return (
    <button
      type="button"
      className={`w-12 h-12 ${
        isPlaying && "pl-0.5"
      } bg-green-400 text-black rounded-full flex items-center justify-center invisible group-hover:visible absolute right-8 bottom-24`}
    >
      <Icon />
    </button>
  );
}
