import { useState, useEffect } from 'react';

import { getReviewsData } from '../../Services/API';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    getReviewsData(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className="list_item">
                <p className="author">Author: {author}</p>
                <p className="review"> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews for this movie was found.</p>
      )}
    </div>
  );
}
