import MoviesView from 'views/MoviesPageView/MoviesPageView';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import NotFound from './views/NotFoundView/NotFoundView';
import HomeView from 'views/HomeView/HomeView';
import './index.css';
import MovieDetailsView from 'views/MovieDetailsView/MovieDetailsView';

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
