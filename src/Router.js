import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const Search = lazy(() => import('./components/Search'));
const Moviedetails = lazy(() => import('./components/Moviedetails'));
const Watchlist = lazy(() => import('./components/Watchlist'));





function Router(props) {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/movie/:id' element={<Moviedetails />} />
                    <Route path='/watchlist' element={<Watchlist />} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
