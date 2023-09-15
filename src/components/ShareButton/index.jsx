import styles from "./styles.module.css"
import { Export } from "phosphor-react"

export const ShareButton = () => {
    return(
        <>
            <button className={styles.shareButton}>

                <Export size={"2rem"} color="#ffffffbf" />

                <div style={{ color: "#ffffffbf" }}>
                    S H A R E
                </div>
                
            </button>
        </>
    )
}