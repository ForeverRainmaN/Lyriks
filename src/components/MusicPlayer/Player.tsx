import React, { useState } from "react";
import { Controls } from "./Controls";
import { VolumeBar } from "./VolumeBar";

const Player = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(30);

  return (
    <div className="w-full static bg-inherit mt-3">
      <Controls />
    </div>
  );
};

export default Player;
