import React, { FC, useEffect } from "react";

interface SeekBarProps {
  duration: number;
  currentTime: number;
  onChange: (event: any) => void;
}

function formatTime(seconds: number) {
  return [Math.floor(seconds / 60), Math.floor(seconds % 60)]
    .map((x) => x.toString())
    .map((x) => (x.length === 1 ? `0${x}` : x))
    .join(":");
}

export const Seekbar: FC<SeekBarProps> = ({
  duration,
  currentTime,
  onChange,
}) => {
  return (
    <div className="flex items-baseline mt-3">
      <div className="text-base text-white">{formatTime(currentTime)}</div>
      <input
        onDragEnd={(e) => console.log(e)}
        min={0}
        max={duration}
        type="range"
        onChange={onChange}
        value={currentTime}
        className="2xl:w- md:w-48 h-1 mr-4 ml-4 self-center bg-black"
      />
      <div className="text-white">{formatTime(duration)}</div>
    </div>
  );
};
