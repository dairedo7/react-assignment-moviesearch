import { useState, useEffect } from 'react';
import { getTrailerData } from 'components/Services/API';
// import iframe from 'react-iframe';

import PropTypes from 'prop-types';
import styles from './Trailer.module.scss';

export default function Trailer({ teaser }) {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    getTrailerData(teaser).then(setTrailer);
  }, [teaser]);
  const { key, id, name } = trailer;
  return (
    <>
      <ul className={styles.trailersContainer}>
        <li className={styles.trailerItem}>
          <iframe
            src={`https://www.youtube.com/embed/${key}`}
            key={id}
            width="270px"
            height="180px"
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.trailer}
            display="initial"
          ></iframe>
        </li>
      </ul>
    </>
  );
}

Trailer.propTypes = {
  teaser: PropTypes.string.isRequired,
};
