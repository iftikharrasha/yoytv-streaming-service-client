import React from 'react';
import { Epg, Layout } from "planby";
import { usePlanby } from '../../Utilities/Hooks/usePlanby';
import { ChannelItem, ProgramItem, Timeline } from '../../Components/TvEnVivo';
import Loader from '../../Components/Custom/Loaders/Loader';
import TvEnVivoPlayer from '../../Components/TvEnVivo/TvEnVivoPlayer';

const TvEnVivo = () => {
    const { isLoading, getEpgProps, getLayoutProps, nowPlaying, setNowPlaying } = usePlanby();

    return (
        <>
            {
                isLoading ? <Loader /> : 
                <TvEnVivoPlayer nowPlaying={nowPlaying}/>
            }
            
            <section className="tvEnVivo__epg">
                <Epg isLoading={isLoading} {...getEpgProps()}>
                    <Layout
                        {...getLayoutProps()}
                        renderTimeline={(props) => <Timeline {...props} />}
                        renderProgram={({ program, ...rest }) => (
                            <ProgramItem key={program.data.id} setNowPlaying={setNowPlaying} program={program} {...rest} />
                        )}
                        renderChannel={({ channel }) => (
                            <ChannelItem key={channel.uuid} channel={channel} nowPlaying={nowPlaying}/>
                        )}
                    />
                </Epg>
            </section>
        </>
    );
};

export default TvEnVivo;