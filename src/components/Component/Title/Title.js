import styles from './Title.module.css';
import propTypes from 'prop-types';
export default function Title({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}

Title.propTypes = {
  title: propTypes.string.isRequired,
};
