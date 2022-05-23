import {
  useParams,
  useLocation,
  Route,
  Routes,
  useMatch,
} from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';

import { getFilmById } from '../../components/Services/API';

import GoBackBtn from 'components/Component/GoBackBtn/GoBackBtn';
import MovieCard from 'components/Component/MovieCard/MovieCard';
import NotFoundView from 'views/NotFoundView/NotFoundView';

import styles from './MovieDetailsView.module.scss';
const Cast = lazy(() =>
  import('components/Component/Cast/Cast' /* webpackChunkName: "Cast" */)
);

const Reviews = lazy(() =>
  import(
    'components/Component/Reviews/Reviews' /* webpackChunkName: "Reviews" */
  )
);
const Trailer = lazy(() =>
  import(
    'components/Component/Trailer/Trailer' /* webpackChunkName: "Trailer" */
  )
);

// new film page
export default function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState(null);
  // console.log(movieDetails);

  const { slug } = useParams();

  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const location = useLocation();

  const match = useMatch('/movies/:slug/*');

  const urlBase = match.pathnameBase;

  // console.log(useNavigate);

  useEffect(() => {
    getFilmById(movieId).then(setMovieDetails);
    // console.log(movieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return <></>; //we need to return at least an empty fragment
  }

  return (
    <div className={styles.box}>
      <React.StrictMode>
        <GoBackBtn />
        <MovieCard movieDetails={movieDetails} />
        <hr />
        <div className={styles.boxAdditional}>
          <h2 className={styles.title}>Additional information</h2>

          <ul className={styles.crewList}>
            <li>
              <NavLink
                to={{
                  pathname: `${urlBase}/cast`,
                  state: { ...location.state, id: movieId },
                }}
                className={styles.link}
                activeclassname={styles.link_active}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${urlBase}/reviews`,
                  state: { ...location.state, id: movieId },
                }}
                className={styles.link}
                activeclassname={styles.link_active}
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${urlBase}/trailer`,
                  state: { ...location.state, id: movieId },
                }}
                className={styles.link}
                activeclassname={styles.link_active}
              >
                Trailer
              </NavLink>
            </li>
          </ul>
        </div>

        {/* nested route - page updates without reloading */}
        {/* <Suspense fallback={<Loader />}> */}
        <Suspense fallback={<h2>Loading in movie card...</h2>}>
          <Routes>
            <Route
              exact
              path={`/cast`}
              element={<Cast movieId={movieId} />}
            ></Route>

            <Route
              exact
              path={`/reviews`}
              element={<Reviews movieId={movieId} />}
            ></Route>

            <Route
              exact
              path={`trailer`}
              element={<Trailer teaser={movieId} />}
            ></Route>

            <Route element={<NotFoundView />}></Route>
          </Routes>
        </Suspense>
      </React.StrictMode>
    </div>
  );
}
