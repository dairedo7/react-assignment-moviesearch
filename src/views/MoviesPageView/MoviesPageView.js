import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFilmsBySearchQuery } from 'components/Services/API';

import Title from '../../components/Component/Title/Title';
import SearchForm from 'components/SearchForm/SearchForm';
import styles from './MoviesPageView.module.css';

const MoviesList = lazy(() =>
  import(
    '../../components/Component/MoviesList/MoviesList' /* webpackChunkName: "MoviesList" */
  )
);

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query'); //parse value of query param with location.search

  useEffect(() => {
    if (searchQuery) {
      getFilmsBySearchQuery(searchQuery).then(setMovie);
    }
  }, [searchQuery]);

  const onChange = evt => {
    setQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();

    getFilmsBySearchQuery(query).then(setMovie);

    navigate({
      pathname: navigate.location,
      search: `?query=${query}`,
    });
    // navigate(`?query=${query}`, { search: `?query=${query}` });
  };

  return (
    <div className={styles.movie_box}>
      <Title title="Search results" />
      <SearchForm query={query} onSubmit={onSubmit} onChange={onChange} />

      <Suspense fallback={<h2>Loading movie list...</h2>}>
        {movie.length === 0 && searchQuery ? (
          <h2 className={styles.results__error}>
            There's no movies for your search request!
          </h2>
        ) : (
          <MoviesList movies={movie} />
        )}
      </Suspense>
    </div>
  );
}
