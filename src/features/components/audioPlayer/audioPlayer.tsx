import React, { useState, useRef, useEffect } from "react";
import "./audioPlayer.css";

interface QuranAudioPlayerProps {
  audioSrc: string;
  surahName: string;
  audioData: any;
}

export const QuranAudioPlayer: React.FC<QuranAudioPlayerProps> = ({
  audioSrc,
  surahName,
  audioData
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedReciter, setSelectedReciter] = useState("");
 
  useEffect(() => {
    // Reset player when audioSrc changes
    setIsPlaying(false);
    setCurrentTime(0);
  }, [audioSrc, selectedReciter]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        duration,
      );
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // let selectedReciter = audioData?.filter(()))

  return (
    <div className="quran-audio-player" dir="ltr" lang="ar">
      <audio
        ref={audioRef}
        src={selectedReciter ? audioData?.audio.find((e: any) => e.reciter === selectedReciter)?.surah_audio : audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Reciter & Surah Info */}
      <div className="player-info">
        <span className="player-surah">{surahName}</span>

        <span className="player-reciter">
          <select
            className="reciter-select"
            onChange={(e) => setSelectedReciter(e.target.value)}
          >
            {audioData?.audio.map((e: any) => (
              <option key={e.reciter} value={e.reciter}>
                {e.reciter}
              </option>
            ))}
          </select>
         &nbsp;&nbsp;: أختر القارئ
        </span>


      </div>

      {/* Main Controls */}
      <div className="player-controls">
        {/* Skip Forward 10s (Left in RTL) */}
      

         <button
          className="control-btn secondary-btn"
          onClick={() => skipTime(-10)}
          title="تأخير 10 ثوان"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M11.5 12l8.5 6V6l-8.5 6zm-9 0l8.5 6V6l-8.5 6z" />
          </svg>
        </button>

        {/* Play / Pause Button */}
        <button
          className="control-btn play-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>


          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Rewind 10s (Right in RTL) */}
         <button
          className="control-btn secondary-btn"
          onClick={() => skipTime(10)}
          title="تقديم 10 ثوان"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
          </svg>
        </button>
      </div>

      {/* Progress / Seek Bar */}
      <div className="player-progress-wrapper" dir="ltr">
        <span className="time-label">{formatTime(currentTime)}</span>
        <input
          type="range"
          className="quran-seek-slider"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          style={{
            backgroundSize: `${duration ? (currentTime / duration) * 100 : 0}% 100%`,
          }}
        />
        <span className="time-label">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
