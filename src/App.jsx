import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes path="*">
          <Route index element={<HomeView />}></Route>
          <Route path="/home" element={<HomeView />}></Route>
          <Route
            exact
            path="movies/:slug/*"
            element={
              <div>
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
    </>
  );
}
