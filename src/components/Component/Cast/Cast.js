import { useState, useEffect } from 'react';

import { getCastData } from '../../Services/API';
import PropTypes from 'prop-types';
import styles from './Cast.module.scss';

import unavailableImage from '../../../images/unavailableIMG.png';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastData(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.crewList}>
      {cast.map(({ id, profile_path, name, character }) => {
        // console.log(actor);

        return (
          <li key={id} className={styles.item}>
            <img
              className={styles.image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : unavailableImage
              }
              alt={name}
            />

            <p className={styles.name}>{name}</p>
            <p className={styles.name}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
