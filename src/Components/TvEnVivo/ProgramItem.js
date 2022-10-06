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
import { notyf } from "../../Utilities/Hooks/useNotification";
  
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

  
    const handlePlayer = (data, isLive) => {
      if(isLive){
        setNowPlaying(data);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
      }else{
        notyf.open({
          type: 'error',
          message: "We're not broadcasting this now"
      });
      }
    };
  
    return (
      <ProgramBox width={styles.width} style={styles.position} onClick={() => handlePlayer(data, isLive)}>
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
  