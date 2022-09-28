import React from "react";
import {
  BsArrowRepeat,
  FaPauseCircle,
  IoShuffleOutline,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/all";

interface ControlsProps {
  repeat: () => void;
  play: () => void;
  pause: () => void;
  shuffle: () => void;
  previous: () => void;
  next: () => void;
}

export const Controls = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-60 justify-between items-baseline">
        <BsArrowRepeat size={20} className="text-white" />
        <MdSkipPrevious size={20} className="text-white" />
        <FaPauseCircle size={30} className="text-white" />
        <MdSkipNext size={20} className="text-white" />
        <IoShuffleOutline size={20} className="text-white" />
      </div>
    </div>
  );
};
