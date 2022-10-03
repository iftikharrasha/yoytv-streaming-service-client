import React, { useState } from 'react';
import { usePlanby } from '../../Utilities/Hooks/usePlanby';
import { Epg, Layout } from "planby";
import { ChannelItem, ProgramItem, Timeline } from "../../Components/TvEnVivo";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TvEnVivo = () => {
    const { isLoading, getEpgProps, getLayoutProps } = usePlanby();
    const [nowPlaying, setNowPlaying] = useState(null);
    console.log(nowPlaying)

    // Redirect if user authenticated.
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth.isAuthenticated && !auth.loading) {
        console.log("auth in", auth.isAuthenticated, auth.loading);
        navigate("/subscription");
      }
    }, [auth.isAuthenticated, auth.loading]);

    return (
        <>
            <section className="tvEnVivo__player">
                <div className="tvEnVivo__player__setup heroFixed">
                    {
                       nowPlaying ? <img src={nowPlaying.image} alt="now playing" /> : <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/jlruzecsif3tkCSoHlUaPR01O7U.jpg" alt="now playing" />
                    }
                </div>
            </section>
            <section className="relativeTop tvTop"></section>
            <section className="tvEnVivo__epg">
                <Epg isLoading={isLoading} {...getEpgProps()}>
                    <Layout
                        {...getLayoutProps()}
                        renderTimeline={(props) => <Timeline {...props} />}
                        renderProgram={({ program, ...rest }) => (
                            <ProgramItem key={program.data.id} setNowPlaying={setNowPlaying} program={program} {...rest} />
                        )}
                        renderChannel={({ channel }) => (
                            <ChannelItem key={channel.uuid} channel={channel} />
                        )}
                    />
                </Epg>
            </section>
        </>
    );
};

export default TvEnVivo;
