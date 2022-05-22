import styles from './MovieCard.module.css';

import defaultImage from '../../../images/unavailableIMG.png';
console.log(defaultImage);
export default function MovieCard({ movieDetails }) {
  const {
    backdrop_path,
    tagline,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;
  return (
    <div className={styles.movie_box}>
      <img
        className={styles.movie_img}
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : defaultImage
        }
        alt={tagline}
      />

      <div className={styles.descriptionBox}>
        <h2 className={styles.title}>
          {title} {release_date ? `${release_date}` : ''}
        </h2>
        <p className={styles.userScore}>User Score: {vote_average}</p>
        <p className={styles.overview}>Overview</p>
        <p className={styles.overview__text}>{overview}</p>
        <p className={styles.genres}>Genres</p>
        <p>
          {genres.map(({ name, id }) => (
            <span className={styles.genres__name} key={id}>
              {name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
