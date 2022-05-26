import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import slugify from 'slugify';

const slug = string => slugify(string, { lower: true });

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link
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
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
