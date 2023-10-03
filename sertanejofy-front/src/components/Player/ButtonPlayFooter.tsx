import { GrPlayFill, GrPauseFill } from "react-icons/gr";

interface PlayerButtonProps {
  handlePlay: () => void;
  handlePause: () => void;
  isPlaying: boolean;
}

export default function PlayerButtonFooter({
  handlePlay,
  handlePause,
  isPlaying,
}: PlayerButtonProps) {
  const callback = isPlaying ? handlePause : handlePlay;
  const Icon = isPlaying ? GrPauseFill : GrPlayFill;

  return (
    <button
      className={`w-10 h-10 flex items-center justify-center pl-0.5 bg-white text-black rounded-full`}
      type="button"
      onClick={callback}
    >
      <Icon size={14} />
    </button>
  );
}
