import { Background } from '../../components/Background';
import { Quote } from '../../components/Quote';

import styles from './styles.module.css';

export function Register() {
  return(
    <Background>
      <div className={styles.contentContainer}>
        <div className={styles.messageContainer}>
          <Quote 
            description={"“...For what is your life? It is even a vapor that appeareth for a little time, and then vanisheth away. ”"}
            citation={"- James 4:14, Holy Bible"}
          />
          <Quote 
            description={"“...For what is your life? It is even a vapor that appeareth for a little time, and then vanisheth away. ”"}
            citation={"- James 4:14, Holy Bible"}
          />
        </div>
        <form
          className={styles.form} 
          action=""
        >

        </form>
      </div>
    </Background>
  )
}