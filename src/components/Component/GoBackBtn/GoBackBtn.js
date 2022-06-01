import { useNavigate, useLocation } from 'react-router';

import styles from './GoBackBtn.module.scss';

export default function GoBackBtn() {
  const navigate = useNavigate();
  // console.log(navigate);
  const location = useLocation();

  const onBtnClick = () => {
    if (location.search) {
      console.log(location.pathname);
      console.log(navigate);
      navigate(`/movies${location.search}`, {});
    } else {
      navigate('/home');
    }
  };
  return (
    <button className={styles.btn} type="button" onClick={onBtnClick}>
      Return
    </button>
  );
}
