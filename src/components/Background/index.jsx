import styles from './styles.module.css';
import backgroundImage from '../../assets/background.png';

export function Background({ children }) {
  return(
    <div className={styles.contentBackground}>
      <div className={styles.contentContainer}>
        { children }
      </div>
    </div>
  )
}