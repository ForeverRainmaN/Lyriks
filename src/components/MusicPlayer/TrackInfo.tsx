import React, { FC } from "react";
import { Song } from "../../redux/services/types";

interface TrackInfoProps {
  isPlaying: boolean;
  activeSong: Song;
}

export const TrackInfo: FC<TrackInfoProps> = ({ activeSong, isPlaying }) => (
  <div className="flex">
    <div
      className={`${
        isPlaying ? "animate-[spin_3s_linear_infinite]" : ""
      } sm:block h-16 w-16 mr-4`}
    >
      <img
        src={activeSong.images.coverart}
        alt="Cover art"
        className="rounded-full"
      />
    </div>
    <div className="flex flex-col">
      <p className="text-white truncate font-bold lg:text-lg text-sm">
        {activeSong.title}
      </p>
      <p className="text-white truncate font-bold lg:text-lg text-sm">
        {activeSong.subtitle}
      </p>
    </div>
  </div>
);
