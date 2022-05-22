import styles from './SearchForm.module.css';

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
