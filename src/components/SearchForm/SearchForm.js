import styles from './SearchForm.module.css';
import PropTypes from 'prop-types';

export default function SearchForm({ query, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={onChange}
        value={query}
        type="text"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
