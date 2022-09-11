import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
const Home = React.lazy(() => import("../Pages/Home/Home"));
const TvEnVivo = React.lazy(() => import("../Pages/TvEnVivo/TvEnVivo"));
const Search = React.lazy(() => import("../Pages/Search/Search"));
const BrowseProfile = React.lazy(() => import("../Pages/Profile/BrowseProfile"));
const CreateProfile = React.lazy(() => import("../Pages/Profile/CreateProfile"));
const EditProfile = React.lazy(() => import("../Pages/Profile/EditProfile"));
const SettingsProfile = React.lazy(() => import("../Pages/Profile/SettingsProfile"));
const ViewMore = React.lazy(() => import("../Pages/ViewMore/ViewMore"));
const MiLista = React.lazy(() => import("../Pages/Profile/MiLista"));
const Subscription = React.lazy(() => import("../Pages/Subscription/Subscription"));
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
                            <Route path="/search" element={<Search/>} />
                            <Route path="/subscription" element={<Subscription/>} />
                            <Route path="/view-more/:pageId" element={
                                <PrivateRoute>
                                    <ViewMore/>
                                </PrivateRoute>}
                            />
                            <Route path="/profile/browse/:token" element={
                                <PrivateRoute>
                                    <BrowseProfile/>
                                </PrivateRoute>}
                            />
                            <Route path="/profile/create/:token" element={
                                <PrivateRoute>
                                    <CreateProfile/>
                                </PrivateRoute>}
                            />
                            <Route path="/profile/edit/:token" element={
                                <PrivateRoute>
                                    <EditProfile/>
                                </PrivateRoute>}
                            />
                            <Route path="/profile/settings/:token" element={
                                <PrivateRoute>
                                    <SettingsProfile/>
                                </PrivateRoute>}
                            />
                            <Route path="/profile/mi-lista/:token" element={
                                <PrivateRoute>
                                    <MiLista/>
                                </PrivateRoute>}
                            />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </Suspense>
                </ScrollToTop>
            </main>
        </>
    );
};

export default Main;