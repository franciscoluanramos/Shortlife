import styles from './styles.module.css';

export function InputForm({ title }) {
  return(
    <div className={styles.contentContainer}>
      <p className={styles.title}>{ title }</p>
      <input 
        className={styles.input} 
        type="text"
      />
    </div>
  )
}