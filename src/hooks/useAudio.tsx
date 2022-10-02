import React, { useEffect, useRef, useState } from "react";
import { propOr } from "ramda";

interface Audio {
  player: React.ReactNode;
  playerProps: {
    currentTime: number;
    duration: number;
    volume: number;
    isPlaying: boolean;
    isSeeking: boolean;
    progress: number;
    setTime: (seconds: number) => void;
    setVolume: (volume: number) => void;
    togglePlaybackStatus: () => void;
  };
}

export function useAudio(url: string): Audio {
  console.log("govno");
  const audioRef: any = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [_, setLoading] = useState<boolean>(true);
  const [isSeeking, setSeeking] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    setLoading(true);
  }, [url]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const audio = {
    player: (
      <audio
        key={0}
        src={url}
        hidden
        ref={audioRef}
        onLoadedData={() => {
          setIsPlaying(false);
          setLoading(false);
          setDuration(audioRef!.current!.duration);
        }}
        onSeeking={() => setSeeking(true)}
        onSeeked={() => setSeeking(false)}
        onTimeUpdate={() => setCurrentTime(audioRef!.current!.currentTime)}
      />
    ),
    playerProps: {
      currentTime,
      duration,
      isPlaying,
      isSeeking,
      volume: audioRef.current?.volume,
      progress: (currentTime / duration) * 100,
      setTime: (seconds) => {
        audioRef!.current!.currentTime = seconds;
      },
      setVolume: (volume) => {
        audioRef!.current!.volume = volume;
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
