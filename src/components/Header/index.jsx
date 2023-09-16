import styles from "./styles.module.css"
import { ShareButton } from "../ShareButton"
import { DotsThree } from "phosphor-react"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation();
    const pathnameSegments = location.pathname.split('/'); // Divide a pathname usando '/'
    const ultimaParteDaURL = pathnameSegments[pathnameSegments.length - 1];

    return(
        <header>
            <DotsThree size={"2rem"} color="#ffffffbf" />
            <div className={styles.headerAction}>
                {
                    (ultimaParteDaURL == "quotes") ?
                        <div/> 
                    :
                        <div className={styles.quotes}><Link to={"/quotes"}>Quotes</Link></div>
                }

                <ShareButton/>
            </div>
        </header>
    )
}