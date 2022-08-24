import React from 'react';
import { usePlanby } from '../../Utilities/Hooks/usePlanby';
import { Epg, Layout } from "planby";
import { ChannelItem, ProgramItem, Timeline } from '../../Components/TvEnVivo';

const TvEnVivo = () => {
    const { isLoading, getEpgProps, getLayoutProps } = usePlanby();

    return (
        <>
            <section className="tvEnVivo">
                <Epg isLoading={isLoading} {...getEpgProps()}>
                    <Layout
                    {...getLayoutProps()}
                    renderTimeline={(props) => <Timeline {...props} />}
                    renderProgram={({ program, ...rest }) => (
                        <ProgramItem key={program.data.id} program={program} {...rest} />
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