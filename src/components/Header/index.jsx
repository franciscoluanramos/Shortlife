import styles from "./styles.module.css"
import { ShareButton } from "../ShareButton"
import { DotsThree } from "phosphor-react"
export const Header = () => {
    return(
        <header>
            <DotsThree size={32} />
            <div className={styles.headerAction}>
                <div className= {styles.quotes}>Quotes</div>

                <ShareButton/>
            </div>
        </header>
    )
}