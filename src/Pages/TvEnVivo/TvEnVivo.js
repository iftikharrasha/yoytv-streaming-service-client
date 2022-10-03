import React, { useState } from 'react';
import { usePlanby } from '../../Utilities/Hooks/usePlanby';
import { Epg, Layout } from "planby";
import { ChannelItem, ProgramItem, Timeline } from '../../Components/TvEnVivo';
import TvEnVivoHero from '../../Components/TvEnVivo/TvEnVivoHero';

const TvEnVivo = () => {
    const { isLoading, getEpgProps, getLayoutProps } = usePlanby();

    // TODO: a default tv data will be passed initially
    const [nowPlaying, setNowPlaying] = useState({
        channelUuid: "cff6fc2b-35db-3a71-56a5-a1753afa1d5e",
        description: "After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.",
        id: "483be519-817b-2d4a-5575-aaff6e7f866e",
        image: "https://image.tmdb.org/t/p/original/gzb6P78zeFTnv9eoFYnaJ2YrZ5q.jpg",
        since: "2022-10-03T01:00:00",
        till: "2022-10-03T02:01:01",
        title: "The Simpsons Movie",
        video: "https://mibucketyoytv.s3.amazonaws.com/SV-2022-08-05-23-00-17-dc791f38fef8c4194d9c0e14b29d1d46178ba05f.mp4",
        Rated: "TV-Y7"
    });

    return (
        <>
            <TvEnVivoHero nowPlaying={nowPlaying}/>
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