import React, { FC, useEffect, useRef } from "react";

interface PlayerProps {
  activeSong: any;
  isPlaying: any;
  isActive?: boolean;
  currentIndex: any;
  volume: any;
  seekTime: any;
  onEnded: any;
  onTimeUpdate: any;
  onLoadedData: any;
  repeat: any;
}

const Player: FC<PlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref: any = useRef(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
