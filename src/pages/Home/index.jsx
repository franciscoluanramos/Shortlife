import { Header } from "../../components/Header";
import { ShareButton } from "../../components/ShareButton";
import styles from "./styles.module.css"

export function Home() {
    return(
        <div>
            <Header/>
            
            <div className={styles.content}>
                <div className={styles.title}>Time fleeth away </div>
                <div className={styles.secondRow}>
                    <div className={styles.title}>without delay</div>
                    <div className={styles.author}>- English proverb</div>
                </div>
                <div className={styles.descriptionText}>“Amor fati é uma expressão latina que significa 'amor ao destino', 'amor ao fado'. No estoicismo e na filosofia de Friedrich Nietzsche, significa ou trata-se de aceitação integral da vida e do destino humano mesmo em seus aspectos mais cruéis e dolorosos...”</div>
                <ShareButton/>
            </div>
        </div>
    )
}