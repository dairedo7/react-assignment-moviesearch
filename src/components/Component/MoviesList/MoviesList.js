import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';

import slugify from 'slugify';

const slug = string => slugify(string, { lower: true });

export default function MovieList({ movies }) {
  const location = useLocation();
  const defaultImg = `https://image.tmdb.org/t/p/w500`;
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id} className={styles.list__item}>
          <Link
            className={styles.list__link}
            to={{
              pathname:
                `/movies/${slug(`${title} ${id}`)}` ||
                `/movies/${slug(`${name} ${id}`)}`,
              search: location.search,
              state: {
                from:
                  location.pathname === '/' ? '/' : '/movies' + location.search,
              },
            }}
          >
            <img
              className={styles.itemLogo}
              src={`${defaultImg}${poster_path}`}
              alt={title || name}
            />

            <h2 className={styles.itemHeader}>{title || name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
