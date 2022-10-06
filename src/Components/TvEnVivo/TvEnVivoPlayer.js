import React, { useState } from 'react';
import share from '../../Image/share_icon.svg';
import play from '../../Image/play_blue.svg';
import moment from "moment";
import TvModal from '../Custom/Modals/TvModal';
import ReactJWPlayer from 'react-jw-player';

const TvEnVivoPlayer = ({nowPlaying}) => {
    const { title, description, image, since, till, video, Rated } = nowPlaying;
    const [show, setShow] = useState(false);

    let start = moment(since);
    let end = moment(till);

    const duration = moment.duration(end.diff(start));
    let days = duration.days();
    duration.subtract(days, 'days');

    let hours = duration.hours();
    duration.subtract(hours, 'hours');

    let minutes = duration.minutes();
    duration.subtract(minutes, 'minutes');

    let seconds = duration.seconds();
    duration.subtract(seconds, 'seconds');

    let milliseconds = duration.milliseconds();
    duration.subtract(milliseconds, 'miliseconds');

    const playlist = [{
        file: video,
        image: image,
        tracks: [{
          file: 'https://link-to-subtitles.vtt',
          label: 'English',
          kind: 'captions',
          'default': true
        }],
      },
    ];

    return (
        <>
            <section className="hero onDemandHero tvEnVivo__player">
                <div className="heroFixed">
                    <div className="hero__slider">
                        <div className="heroBg">
                            <div className="jw__player">
                                <ReactJWPlayer
                                    playerId="my-unique-id"
                                    playerScript="https://cdn.jwplayer.com/libraries/CYz0ApGQ.js"
                                    playlist={playlist}
                                    isAutoPlay={true}
                                    responsive={true}
                                    aspectRatio="16:5"
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relativeTop tvTop">
                {/* Only for parallex */}
            </section>
        </>
    );
};

export default TvEnVivoPlayer;