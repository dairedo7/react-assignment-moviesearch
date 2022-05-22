import { useState, useEffect, Suspense } from 'react';

import { getTrendingFilms } from 'components/Services/API';
import MoviesList from 'components/Component/MoviesList/MoviesList';
import styles from './HomeView.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const getTrending = await getTrendingFilms();
      console.log(getTrending);
      setMovies(getTrending);
    }
    getFilms();
  }, []);
  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      <Suspense fallback={<h2>Loading movies list...</h2>}>
        <MoviesList movies={movies} />
      </Suspense>
    </>
  );
}
