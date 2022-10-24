import React, { useCallback, useRef, useState } from "react";

function useAudio() {
  const [volume, setVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPlaying,setIsPlaying]=useState(true)

  let audio = useRef(new Audio());
  audio.current.oncanplay = function () {
    console.log("can play");
  };
  audio.current.oncanplaythrough = function () {
    console.log("can play through");
  };
  audio.current.onloadeddata = function () {
    console.log("loaded data");
  };
  const handleVolume = useCallback(() => {
    if (volume === 0) {
      setVolume(1);
      audio.current.volume = 1;
    } else {
      setVolume(0);
      audio.current.volume = 0;
    }
  }, [volume]);

  const playRadio = (src) => {
    setIsPlaying(true)
    setLoading(true);
    audio.current.src = src;
    audio.current
      .play()
      .then((response) => {
        console.log("playing", response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  const pauseRadio = () => {
    setIsPlaying(false)
    audio.current.src = null;
    audio.current.onload = null;
  };

  return {
    loading,
    setLoading,
    handleVolume,
    playRadio,
    pauseRadio,
    isPlaying,
    volume,
    setIsPlaying
  };
}

export default useAudio;
