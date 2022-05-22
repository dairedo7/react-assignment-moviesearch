import { useNavigate, useLocation } from 'react-router';

import styles from './GoBackBtn.module.scss';

export default function GoBackBtn() {
  const navigate = useNavigate();
  // console.log(navigate);
  const location = useLocation();
  // console.log(location);

  const onBtnClick = () => {
    // console.log(state.from);
    if (location.pathname) {
      console.log(navigate);
      console.log(location.pathname.slice(0, -10));
      navigate(`/movies?query=${location.pathname}`, {
        pathname: { name: 'query' },
      });
    }
  };
  return (
    <button className={styles.btn} type="button" onClick={onBtnClick}>
      Return
    </button>
  );
}
