import { useState, useEffect, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFilmsBySearchQuery } from 'components/Services/API';

import Title from '../../components/Component/Title/Title';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from '../../components/Component/MoviesList/MoviesList';

import styles from './MoviesPageView.module.css';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query'); //parse value of query param with location.search

  console.log(searchQuery);
  useEffect(() => {
    if (searchQuery) {
      getFilmsBySearchQuery(searchQuery).then(setMovie);
    }
    navigate({
      search: `?query=${query}`,
    });
  }, [searchQuery]);

  const onChange = evt => {
    setQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();

    async function getMovieByQuery() {
      evt.preventDefault();
      const getMovie = await getFilmsBySearchQuery(query);
      setMovie(getMovie);
    }

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
        <MovieList movies={movie} />
      </Suspense>
    </div>
  );
}
