import React, { useState } from "react";
import { nextSong, prevSong } from "../../redux/features/playerSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Controls } from "./Controls";
import { TrackInfo } from "./TrackInfo";
import { VolumeBar } from "./VolumeBar";

import * as R from "ramda";
import { useAudio } from "../../hooks/useAudio";
import { Seekbar } from "./Seekbar";

const Player = () => {
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);

  const { activeSong, currentSongs, currentIndex } = useAppSelector(
    (state) => state.player,
  );

  const dispatch = useAppDispatch();
  const activeSongUrl = R.pathOr("", ["hub", "actions", 1, "uri"])(activeSong);
  const { player, playerProps } = useAudio(activeSongUrl);
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    setVolume,
    setTime,
    togglePlaybackStatus,
  } = playerProps;

  const handleNextSong = () => {
    togglePlaybackStatus();
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  const handleShuffle = () => {
    if (!shuffle) {
      setShuffle(true);
    } else {
      setShuffle(false);
    }
  };

  const handleRepeat = () => {
    if (!repeat) {
      console.log(repeat);
      setRepeat(true);
    } else {
      setRepeat(false);
    }
  };

  return (
    <div className="items-center w-full flex justify-between static lg:flex-row">
      <TrackInfo activeSong={activeSong!} isPlaying={isPlaying} />
      <div className="flex flex-col">
        <Controls
          player={player}
          activeSong={activeSong!}
          repeat={repeat}
          toggleRepeat={handleRepeat}
          shuffle={shuffle}
          toggleShuffle={handleShuffle}
          isPlaying={isPlaying}
          goPrevious={handlePrevSong}
          goNext={handleNextSong}
          playPause={togglePlaybackStatus}
        />
        <Seekbar
          currentTime={currentTime}
          duration={duration}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <VolumeBar
        max={1}
        min={0}
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default Player;
