import styles from './styles.module.css';

import backgroundImage from '../../assets/background.png';

export function Background({ children }) {
  return(
    <div className={styles.contentBackground}>
      <img 
        className={styles.background}
        src={backgroundImage} 
        alt="background" 
      />
      <div className={styles.contentContainer}>
        { children }
      </div>
    </div>
  )
}