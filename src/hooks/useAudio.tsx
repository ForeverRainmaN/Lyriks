import React, { useEffect, useRef, useState } from "react";

interface Audio {
  player: React.ReactNode;
  playerProps: {
    currentTime: number;
    duration: number;
    volume: number;
    isPlaying: boolean;
    setTime: (seconds: number) => void;
    setVolume: (volume: number) => void;
    togglePlaybackStatus: () => void;
  };
}

export function useAudio(url: string): Audio {
  const audioRef: any = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [_, setLoading] = useState<boolean>(true);
  const [volume, setVolumeLocal] = useState<number>(1 / 3);

  useEffect(() => {
    setLoading(true);
  }, [url]);

  const audio = {
    player: (
      <audio
        key={0}
        src={url}
        hidden
        ref={audioRef}
        onLoadedData={() => {
          setLoading(false);
          setDuration(audioRef!.current!.duration);
          setIsPlaying(true);
          audioRef!.current!.play();
        }}
        onTimeUpdate={() => setCurrentTime(audioRef!.current!.currentTime)}
      />
    ),

    playerProps: {
      isPlaying,
      currentTime,
      duration,
      volume,
      setTime: (seconds: number) => {
        audioRef!.current!.currentTime = seconds;
      },
      setVolume: (volume: number) => {
        audioRef!.current!.volume = volume;
        setVolumeLocal(audioRef!.current!.volume);
      },
      togglePlaybackStatus: () => {
        if (isPlaying) {
          audioRef!.current!.pause();
          setIsPlaying(false);
        } else {
          audioRef!.current!.play();
          setIsPlaying(true);
        }
      },
    },
  };
  return audio;
}
