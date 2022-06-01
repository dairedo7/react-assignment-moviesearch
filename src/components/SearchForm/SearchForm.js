import styles from './SearchForm.module.css';
import PropTypes from 'prop-types';

export default function SearchForm({ query, onSubmit, onChange }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="inp" className={styles.input__field}>
        <input
          className={styles.input}
          id="inp"
          onChange={onChange}
          value={query}
          placeholder="&nbsp;"
          type="text"
        />

        <span className={styles.label}>Movie Name</span>
        <span className={styles.focus__bg}></span>
      </label>
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
