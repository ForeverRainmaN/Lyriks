import React, { useState } from "react";
import { nextSong, prevSong } from "../../redux/features/playerSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Controls } from "./Controls";
import { TrackInfo } from "./TrackInfo";
import { VolumeBar } from "./VolumeBar";

import * as R from "ramda";
import { useEffect } from "react";
import { useAudio } from "../../hooks/useAudio";

const Player = () => {
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);

  const { activeSong, currentSongs, currentIndex, isActive } = useAppSelector(
    (state) => state.player,
  );

  const dispatch = useAppDispatch();
  const activeSongUrl = R.pathOr("", ["hub", "actions", 1, "uri"])(activeSong);
  const { player, playerProps } = useAudio(activeSongUrl);

  const [volume, setVolume] = useState<number>(playerProps.volume);

  const handleNextSong = () => {
    playerProps.togglePlaybackStatus();
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
    <div className="flex-col items-center w-full flex justify-between static lg:flex-row">
      <TrackInfo activeSong={activeSong!} isPlaying={playerProps.isPlaying} />
      <Controls
        player={player}
        activeSong={activeSong!}
        repeat={repeat}
        toggleRepeat={handleRepeat}
        shuffle={shuffle}
        toggleShuffle={handleShuffle}
        isPlaying={playerProps.isPlaying}
        goPrevious={handlePrevSong}
        goNext={handleNextSong}
        playPause={playerProps.togglePlaybackStatus}
      />
      <VolumeBar
        max={1}
        min={0}
        value={volume}
        onChange={(e) => playerProps.setVolume(e.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default Player;
