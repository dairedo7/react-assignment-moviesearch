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

  return (
    <>
      <ul className={styles.trailersContainer}>
        {trailer.map(({ key, id, name }) => (
          <li className={styles.trailerItem}>
            <iframe
              src={`http://www.youtube.com/embed/${key}`}
              key={id}
              width="800px"
              height="500px"
              title={name}
              allowFullScreen
              className="myClassname"
              display="initial"
            ></iframe>
          </li>
        ))}
      </ul>
    </>
  );
}

Trailer.propTypes = {
  teaser: PropTypes.string.isRequired,
};