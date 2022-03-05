import React from 'react';
import { Player } from 'video-react';

export default function Props() {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="../../video.mp4"
    />
  );
};