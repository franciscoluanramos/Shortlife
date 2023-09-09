import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ShareButton } from "../../components/ShareButton";
import { Skull } from "../../components/Skull";
import styles from "./styles.module.css"

export function Home() {
    return(
        <div>
            <Background>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.hero}>
                        <div className={styles.title}>Time fleeth away <br/> without delay </div>
                        <div className={styles.author}>- English proverb</div>
                        {/* <div className={styles.secondRow}>
                            <div className={styles.title}>without delay</div>
                            <div className={styles.author}>- English proverb</div>
                        </div> */}
                    </div>
                    <div className={styles.descriptionText}>“Amor fati é uma expressão latina que significa 'amor ao destino', 'amor ao fado'. No estoicismo e na filosofia de Friedrich Nietzsche, significa ou trata-se de aceitação integral da vida e do destino humano mesmo em seus aspectos mais cruéis e dolorosos...”</div>
                    <ShareButton/>
                    
                    <div className= {styles.skullList}>
                        <Skull/>
                        <Skull/>
                        <Skull/>
                        <Skull/>
                        <Skull/>
                    </div>
                         
                </div>

                
            </Background>
        </div>
    )
}