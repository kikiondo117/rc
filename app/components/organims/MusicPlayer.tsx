import { useRef } from "react";
import { usePlayer } from "~/hooks/usePlayer";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { togglePlayPause, isPlaying, volume, handleVolumeChange } =
    usePlayer(audioRef);

  return (
    <div className="w-full dark:bg-white dark:text-black h-12 md:h-24 flex items-center justify-around px-4">
      <audio
        ref={audioRef}
        src="https://cast1.my-control-panel.com/proxy/radiochi/stream"
      />
      <button
        className="bg-green-500 rounded-full p-2 text-white text-xs"
        onClick={togglePlayPause}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <label className="flex items-center gap-2 text-sm">
        Volume:
        <input
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
