import styles from './styles.module.css';

export function InputForm({ title, value, setValue }) {
  return(
    <div className={styles.contentContainer}>
      <p className={styles.title}>{ title }</p>
      <input 
        className={styles.input}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}