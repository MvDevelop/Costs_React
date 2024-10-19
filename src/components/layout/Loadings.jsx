
import loading from '../../img/loading.svg';
import styles from './Loadings.module.css';

function Loadings() {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} alt='loading'/>
    </div>
  )
}

export default Loadings;
