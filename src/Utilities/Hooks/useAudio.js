import React, { useCallback, useRef, useState } from "react";

function useAudio() {
  const [volume, setVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);
    audio.current.src = src;
    audio.current
      .play()
      .then((response) => {
        console.log("playing", response);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error please reload the page");
        setLoading(false);
      });
  };
  const pauseRadio = () => {
    audio.current.src = null;
    audio.current.onload = null;
  };

  return {
    loading,
    setLoading,
    error,
    handleVolume,
    playRadio,
    pauseRadio,
  };
}

export default useAudio;
