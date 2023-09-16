import styles from "./styles.module.css"
import { ShareButton } from "../ShareButton"
import { DotsThree } from "phosphor-react"
export const Header = () => {
    return(
        <header>
            <DotsThree size={32} color="#ffffffbf" />
            <div className={styles.headerAction}>
                <a className= {styles.quotes} href="">Quotes</a>
                <ShareButton/>
            </div>
        </header>
    )
}