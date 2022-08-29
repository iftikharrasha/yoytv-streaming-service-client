import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
const Home = React.lazy(() => import("../Pages/Home/Home"));
const TvEnVivo = React.lazy(() => import("../Pages/TvEnVivo/TvEnVivo"));
const BrowseProfile = React.lazy(() => import("../Pages/Profile/BrowseProfile"));
const CreateProfile = React.lazy(() => import("../Pages/Profile/CreateProfile"));
const EditProfile = React.lazy(() => import("../Pages/Profile/EditProfile"));
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
                            <Route path="/tv-en-vivo" element={<TvEnVivo/>} />
                            <Route path="/profile/browse" element={<BrowseProfile/>} />
                            <Route path="/profile/create" element={<CreateProfile/>} />
                            <Route path="/profile/edit" element={<EditProfile/>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </Suspense>
                </ScrollToTop>
            </main>
        </>
    );
};

export default Main;