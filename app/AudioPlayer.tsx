import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface AudioPlayerProps {
    src: string; // Source URL of the audio file
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
    return (
        <div>
            <ReactAudioPlayer
                src={src}
                controls // Show native controls like play, pause
                loop // Enable looping
            />
        </div>
    );
};

export default AudioPlayer;