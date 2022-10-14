import React, { useCallback, useRef, useState } from "react";

function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let audio = useRef(new Audio());
  audio.current.onplay = function () {
    setIsPlaying(true);
  };

  audio.current.onended = function () {
    setIsPlaying(false);
  };

  const handleVolume = useCallback(() => {
    if (volume > 0.9) {
      setVolume(0.1);
      audio.current.volume = 0.1;
    } else {
      setVolume(volume + 0.1);
      audio.current.volume = volume + 0.1;
    }
  }, [volume]);

  const playRadio = (src) => {
    setLoading(true);
    audio.current.src = src;
    audio.current
      .play()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError("Error in playing audio");
        setLoading(false);
      });
  };
  const pauseRadio = () => {
    audio.current.src = null;
  };

  return {
    loading,
    isPlaying,
    error,
    handleVolume,
    playRadio,
    pauseRadio,
  };
}

export default useAudio;
