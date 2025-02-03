import { useRef } from "react";
import { usePlayer } from "~/hooks/usePlayer";

import { PiPlayBold, PiPauseBold, PiSpeakerLowThin } from "react-icons/pi";
import { IoRadioButtonOnOutline } from "react-icons/io5";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { togglePlayPause, isPlaying, volume, handleVolumeChange } =
    usePlayer(audioRef);

  return (
    <div className="w-full dark:bg-white dark:text-black h-16 md:h-24 flex items-center justify-around px-4">
      <audio
        ref={audioRef}
        src="https://cast1.my-control-panel.com/proxy/radiochi/stream"
      />

      <div className="flex gap-4 items-center flex-1 md:flex-none">
        <div className="flex gap-1 items-center">
          <IoRadioButtonOnOutline
            color={isPlaying ? "red" : "grey"}
            className={`text-base md:text-3xl ${
              isPlaying ? "animate-pulse" : "animate-none"
            }`}
          />
        </div>

        <button
          className="text-white text-xl md:text-3xl"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <PiPauseBold color="black" />
          ) : (
            <PiPlayBold color="black" />
          )}
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm font-bold">
        <p className="text-xs md:text-base flex items-center gap-2">
          Volume <PiSpeakerLowThin color="black" />
        </p>

        <input
          className="w-1/2 md:w-full"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>
    </div>
  );
}
