import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
const Home = React.lazy(() => import("../Pages/Home/Home"));
const NotFound = React.lazy(() => import("../Pages/NotFound/NotFound"));
const Loader = React.lazy(() => import("../Components/Loader/Loader"));

const Main = () => {
    return (
        <>
            <main>
                <ScrollToTop>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            {/* <Route path="/profile/settings/:id" element={
                                <PrivateRoute>
                                    <Settings />
                                </PrivateRoute>}
                            /> */}
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </Suspense>
                </ScrollToTop>
            </main>
        </>
    );
};

export default Main;