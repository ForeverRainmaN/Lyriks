import React, { FC } from "react";
import {
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsVolumeDownFill,
} from "react-icons/bs";

interface VolumeBarProps {
  value: number;
  min: number;
  max: number;
  setVolume: (number) => void;
  onChange: (event: any) => void;
}

export const VolumeBar: FC<VolumeBarProps> = ({
  value,
  min,
  max,
  onChange,
  setVolume,
}) => {
  const parsedValue = value;

  return (
    <div className="flex items-center justify-end">
      {parsedValue <= 1 && parsedValue > 0.5 && (
        <BsFillVolumeUpFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(0)}
        />
      )}
      {parsedValue <= 0.5 && parsedValue > 0 && (
        <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
      )}
      {parsedValue === 0 && (
        <BsFillVolumeMuteFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(1)}
        />
      )}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 mr-4 bg-black"
      />
    </div>
  );
};
