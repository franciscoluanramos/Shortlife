import sticker from "../../assets/Images/amor fati sticker.png"
import styles from "./styles.module.css"

export function sticker() {
    
    return (
      <>
        <img className={styles.sticker} src={sticker} alt="" />
      </>
    )
}