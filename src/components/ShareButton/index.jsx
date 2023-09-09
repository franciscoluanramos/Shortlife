import styles from "./styles.module.css"
import { Export } from "phosphor-react"

export const ShareButton = () => {
    return(
        <>
            <button className={styles.shareButton}>

                <Export size={32} />

                <div>
                    S H A R E
                </div>
                
            </button>
        </>
    )
}