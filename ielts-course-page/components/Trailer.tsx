import React from 'react';
import { Media } from './types';

interface TrailerProps {
  media: Media;
}

/**
 * Displays the course trailer from a YouTube video ID.
 * @param {TrailerProps} props - Component properties.
 * @returns {JSX.Element} The video player component.
 */
const Trailer: React.FC<TrailerProps> = ({ media }): JSX.Element => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${media.youtube_video_id}`}
          title={media.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;