import { PlayerContext } from "@/contexts/playerContext";
import { useContext } from "react";

export const usePlayer = () => useContext(PlayerContext);
