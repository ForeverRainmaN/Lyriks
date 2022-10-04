import React, { FC, useEffect, useState } from "react";

import { compose } from "ramda";

interface SeekBarProps {
  duration: number;
  currentTime: number;
  onChange: any;
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
  const [value, setValue] = useState(currentTime);
  const [isSeeking, setSeeking] = useState<boolean>(false);

  useEffect(() => {
    const onMouseDown = (e: Event) => {
      if (e.type === "mousedown") {
        setSeeking(true);
      }
    };

    const onMouseUp = (e: Event) => {
      if (e.type === "mouseup") {
        setSeeking(false);
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    if (isSeeking) {
      return;
    } else {
      setValue(currentTime);
    }

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [currentTime]);

  const handleChange = (e) => compose(setValue, parseInt)(e.target.value);

  return (
    <div className="flex items-baseline mt-3">
      <div className="text-base text-white">{formatTime(currentTime)}</div>
      <input
        min={0}
        max={duration ? duration : 0}
        type="range"
        onMouseUp={onChange}
        onChange={handleChange}
        value={value}
        className="2xl:w- md:w-48 h-1 mr-4 ml-4 self-center bg-black"
      />
      <div className="text-white">{formatTime(duration)}</div>
    </div>
  );
};
