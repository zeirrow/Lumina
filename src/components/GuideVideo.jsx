import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { videoSrc } from "../../data/data";

const GuideVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    resetControlsTimer();
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    resetControlsTimer();
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration || 1;
    setProgress((videoRef.current.currentTime / duration) * 100);
  };

  const seekVideo = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
    resetControlsTimer();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    resetControlsTimer();
  };

  const resetControlsTimer = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(controlsTimeout.current);
  }, []);

  return (
    <div
      className={`relative group bg-[#F9F6F2] rounded-2xl overflow-hidden ${
        isFullscreen ? "fixed inset-0 z-[9999] bg-black" : "max-w-4xl mx-auto"
      }`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc.videoUrl}
        muted={isMuted}
        onClick={togglePlay}
        onTimeUpdate={handleProgress}
        onEnded={() => setIsPlaying(false)}
        onMouseMove={resetControlsTimer}
        className="w-full h-full object-cover cursor-pointer"
        poster={videoSrc.posterUrl}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Controls Container */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress Bar */}
        <div
          className="relative h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer"
          onClick={seekVideo}
        >
          <div
            className="absolute top-0 left-0 h-full bg-[#C28F79] rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full" />
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-[#C28F79] transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>

            <button
              onClick={toggleMute}
              className="text-white hover:text-[#C28F79] transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>

            <span className="text-white text-sm font-light">
              {Math.floor(videoRef.current?.currentTime || 0)}s
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center text-white text-sm">
              <MdHighQuality className="mr-1" /> 4K
            </span>

            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-[#C28F79] transition-colors"
              aria-label="Fullscreen"
            >
              <FaExpand size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Center (shown when paused) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className={`absolute inset-0 m-auto w-16 h-16 bg-[#C28F79]/90 text-white rounded-full flex items-center justify-center transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Play"
        >
          <FaPlay size={24} className="ml-1" />
        </button>
      )}

      {/* Brand Watermark */}
      <div className="absolute top-4 left-4">
        <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
          Lumina
        </span>
      </div>
    </div>
  );
};

export default GuideVideo;
