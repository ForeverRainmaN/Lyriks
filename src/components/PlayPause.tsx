import React, { FC } from 'react';

interface PlayPayseProps {
  isPlaying: boolean
  activeSong: any,
  song: any
  handlePause: () => void
  handlePlay: () => void
}


const PlayPause: FC<PlayPayseProps> = ({
   handlePause, 
   isPlaying, 
   handlePlay, 
   song, 
   activeSong 
}) => (
  <div>Loader</div>
);

export default PlayPause;
