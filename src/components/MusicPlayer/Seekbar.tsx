import React, { FC } from "react";

interface SeekBarProps {
  duration: number;
  currentTime: number;
  isSeeking: boolean;
  setSeeking: () => void;
}

function formatTime(seconds) {
  return [Math.floor(seconds / 60), Math.floor(seconds % 60)]
    .map((x) => x.toString())
    .map((x) => (x.length === 1 ? `0${x}` : x))
    .join(":");
}

export const Seekbar: FC<SeekBarProps> = ({
  duration,
  isSeeking,
  currentTime,
}) => {
  console.log(duration);
  return (
    <div>
      <input type="range" value={duration}></input>
      <div>{isSeeking ? "buffering..." : formatTime(currentTime)}</div>
      <div>{formatTime(duration)}</div>
    </div>
  );
};
