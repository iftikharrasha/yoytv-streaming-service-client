import React from "react";
import { usePlanby } from "../../Utilities/Hooks/usePlanby";
import { Epg, Layout } from "planby";
import { ChannelItem, ProgramItem, Timeline } from "../../Components/TvEnVivo";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TvEnVivo = () => {
  const { isLoading, getEpgProps, getLayoutProps } = usePlanby();

  // Redirect if user authenticated.
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/subscription");
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="tvEnVivo">
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={props => <Timeline {...props} />}
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
