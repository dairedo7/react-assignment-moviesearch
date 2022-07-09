import styles from './Reviews.module.scss';
import { useState, useEffect } from 'react';

import { getReviewsData } from '../../Services/API';
import PropTypes from 'prop-types';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsData(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.reviews}>
      {reviews?.length > 0 ? (
        <ul className={styles.reviews__list}>
          {reviews.map(({ id, author, content, author_details }) => {
            const { avatar_path } = author_details;
            let url;
            let avatar_url;
            if (avatar_path !== null) {
              url = avatar_path.slice(1, avatar_path.length);
            } else {
              avatar_url = `https://www.gravatar.com/avatar/${avatar_path}`;
            }

            return (
              <li key={id} className="list_item">
                <img width="100px" src={url || avatar_url} alt="User Profile" />
                <p className="author">Author: {author}</p>
                <p className="review"> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="reviews__error">No reviews for this movie was found.</p>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
