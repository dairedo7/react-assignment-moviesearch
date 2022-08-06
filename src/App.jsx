import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Normalize from 'react-normalize';
import Navigation from 'components/Navigation/Navigation';

import './index.css';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView" */)
);
const MoviesView = lazy(() =>
  import(
    './views/MoviesPageView/MoviesPageView' /* webpackChunkName: "MoviesView" */
  )
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */
  )
);
const NotFound = lazy(() =>
  import('./views/NotFoundView/NotFoundView' /* webpackChunkName: "NotFound" */)
);

export function App() {
  return (
    <div>
      <Normalize />
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes path="*">
          <Route
            index
            element={<HomeView /> && <Navigate to="/home" />}
          ></Route>
          <Route path="/home" element={<HomeView />}></Route>
          <Route
            exact
            path="movies/:slug/*"
            element={
              <div className="container">
                <MovieDetailsView />
              </div>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <div>
                <MoviesView />
              </div>
            }
          ></Route>

          <Route
            path="*"
            element={
              <div>
                <NotFound />
              </div>
            }
          ></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
