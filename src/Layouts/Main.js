import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
const Home = React.lazy(() => import("../Pages/Home/Home"));
const OnDemand = React.lazy(() => import("../Pages/OnDemand/OnDemand"));
const TvEnVivo = React.lazy(() => import("../Pages/TvEnVivo/TvEnVivo"));
const SeriesDetails = React.lazy(() =>
  import("../Pages/OnDemand/SeriesDetails")
);
const MovieDetails = React.lazy(() => import("../Pages/OnDemand/MovieDetails"));
const Search = React.lazy(() => import("../Pages/Search/Search"));
const BrowseProfile = React.lazy(() =>
  import("../Pages/Profile/BrowseProfile")
);
const CreateProfile = React.lazy(() =>
  import("../Pages/Profile/CreateProfile")
);
const EditProfile = React.lazy(() => import("../Pages/Profile/EditProfile"));
const SettingsProfile = React.lazy(() =>
  import("../Pages/Profile/SettingsProfile")
);
const ViewMore = React.lazy(() => import("../Pages/ViewMore/ViewMore"));
const MiLista = React.lazy(() => import("../Pages/Profile/MiLista"));
const Subscription = React.lazy(() =>
  import("../Pages/Subscription/Subscription")
);
const Registration = React.lazy(() =>
  import("../Pages/Subscription/Registration")
);
const NotFound = React.lazy(() => import("../Pages/NotFound/NotFound"));
const Loader = React.lazy(() => import("../Components/Custom/Loaders/Loader"));

const Main = () => {
  return (
    <>
      <main>
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/tv-en-vivo" element={<TvEnVivo />} />
              <Route path="/search" element={<Search />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/registration" element={<Registration />} />
              <Route
                path="/on-demand/series-details/:id"
                element={<SeriesDetails />}
              />
              <Route
                path="/on-demand/movie-details/:id"
                element={<MovieDetails />}
              />
              <Route
                path="/view-more/:pageId"
                element={
                  <PrivateRoute>
                    <ViewMore />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/browse/:token"
                element={
                  <BrowseProfile />
                  //   <PrivateRoute>
                  //   </PrivateRoute>
                }
              />
              <Route
                path="/profile/create/:token"
                element={
                  <CreateProfile />
                  //   <PrivateRoute>
                  //   </PrivateRoute>
                }
              />
              <Route
                path="/profile/edit/:token"
                element={
                  <EditProfile />
                  //   <PrivateRoute>
                  //   </PrivateRoute>
                }
              />
              <Route
                path="/profile/settings/:token"
                element={
                  <SettingsProfile />
                  //   <PrivateRoute>
                  //   </PrivateRoute>
                }
              />
              <Route
                path="/profile/mi-lista/:token"
                element={
                  <PrivateRoute>
                    <MiLista />
                  </PrivateRoute>
                }
              />
              <Route
                path="/on-demand"
                element={
                  <PrivateRoute>
                    <OnDemand />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>
    </>
  );
};

export default Main;
