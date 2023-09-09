import styles from './styles.module.css';

export function Quote({ children, description, citation }) {
  return(
    <div className={styles.contentContainer}>
      <p className={styles.description}>
        { description }
      </p>
      <p className={styles.quoteCitation}>
        { citation }
      </p>
    </div>
  )
}