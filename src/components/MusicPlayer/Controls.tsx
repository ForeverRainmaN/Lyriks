import React, { FC } from "react";
import {
  FaPauseCircle,
  FaPlayCircle,
  MdOutlineShuffle,
  MdRepeat,
  MdRepeatOne,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/all";
import { Song } from "../../redux/services/types";

interface ControlsProps {
  player: React.ReactNode;
  activeSong: Song;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
  toggleRepeat: () => void;
  playPause: () => void;
  toggleShuffle: () => void;
  goPrevious: () => void;
  goNext: () => void;
}

export const Controls: FC<ControlsProps> = ({
  player,
  isPlaying,
  toggleRepeat,
  repeat,
  shuffle,
  playPause,
  toggleShuffle,
  goPrevious,
  goNext,
}) => {
  const repeatIcon = repeat ? (
    <MdRepeatOne
      size={20}
      onClick={toggleRepeat}
      className="cursor-pointer fill-white"
    />
  ) : (
    <MdRepeat
      size={20}
      onClick={toggleRepeat}
      className="cursor-pointer hover:fill-white fill-slate-400"
    />
  );

  const shuffleClassName = shuffle
    ? "cursor-pointer fill-white"
    : "cursor-pointer fill-slate-400 hover:fill-white";

  return (
    <div className="flex justify-center">
      <div className="flex w-60 justify-between items-baseline">
        {repeatIcon}
        <MdSkipPrevious
          size={20}
          className="cursor-pointer fill-slate-400 hover:fill-white"
          onClick={goPrevious}
        />
        {isPlaying ? (
          <FaPauseCircle
            size={30}
            className="cursor-pointer fill-white"
            onClick={playPause}
          />
        ) : (
          <FaPlayCircle
            size={30}
            className="cursor-pointer fill-white"
            onClick={playPause}
          />
        )}
        <MdSkipNext
          size={20}
          className="cursor-pointer fill-slate-400 hover:fill-white"
          onClick={goNext}
        />
        <MdOutlineShuffle
          size={20}
          className={shuffleClassName}
          onClick={toggleShuffle}
        />
        {player}
      </div>
    </div>
  );
};
