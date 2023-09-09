import styles from './styles.module.css';

export function Quote({ children, description, citation, strongCitation }) {
  return(
    <div className={styles.contentContainer}>
      <p className={styles.description}
        style={strongCitation && {
          fontWeight: 900,
          fontSize: 30
        }}
      >
        { description }
      </p>
      <p className={styles.quoteCitation}>
        { citation }
      </p>
    </div>
  )
}