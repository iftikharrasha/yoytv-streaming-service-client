import {
    ProgramBox,
    ProgramContent,
    ProgramFlex,
    ProgramStack,
    ProgramTitle,
    ProgramText,
    ProgramImage,
    useProgram
  } from "planby";
import { useEffect } from "react";
  
  export const ProgramItem = ({ setNowPlaying, program, ...rest }) => {
    const {
      styles,
      formatTime,
      set12HoursTimeFormat,
      isLive,
      isMinWidth
    } = useProgram({
      program,
      ...rest
    });
  
    const { data } = program;
    const { image, title, since, till } = data;

    useEffect(() => {
      if(isLive){
        setNowPlaying(data)
      }
    }, [])
  
    const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
    const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  
    const handlePlayer = (data) => {
      setNowPlaying(data);
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    };
  
    return (
      <ProgramBox width={styles.width} style={styles.position} onClick={() => handlePlayer(data)}>
        <ProgramContent width={styles.width} isLive={isLive}>
          <ProgramFlex>
            {isMinWidth && <ProgramImage src={image} alt="Preview" />}
            <ProgramStack>
              <ProgramTitle>{title}</ProgramTitle>
              <ProgramText>
                {sinceTime} - {tillTime}
              </ProgramText>
            </ProgramStack>
          </ProgramFlex>
        </ProgramContent>
      </ProgramBox>
    );
  };
  