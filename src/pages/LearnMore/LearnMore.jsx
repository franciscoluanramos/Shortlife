import { Background } from "../../components/Background"
import styles from "./styles.module.css"
import sticker from "../../assets/Images/amor fati sticker.png"
import { Header } from "../../components/Header"
import { Link } from "react-router-dom"

export function LearnMore() {
    return (
        <div id={styles.all}>
            <Background>
                <Header/>
                <div id={styles.contentBox}>
                    <div id={styles.text}>
                        <h1>How is the percentage calculated?</h1><br/><br/>
                        The life expectancy is calculated based on average number in your country provided by the World Health Organization (WHO). The name of the game here is average life expectancy. And we wanted to keep it as simple as possible, so it's based on the absolute minimum of variables: your age and your gender. Obviously, in reality, there are a lot of variables that go into your specific life expectancy, including, well, random chance.
                        The calculations come courtesy of Social Security, which publishes an actuarial life table showing the average years of life remaining for men and women at all ages from 0 to 119.
                        <br/><br/>
                        <Link to={"https://www.washingtonpost.com/news/wonk/wp/2015/09/04/find-out-how-much-of-your-life-youve-lived-and-how-much-time-you-have-left/"}>https://www.washingtonpost.com/news/wonk/wp/2015/09/04/find-out-how-much-of-your-life-youve-lived-and-how-much-time-you-have-left/</Link>
                    </div>
                    <div id={styles.logo}>
                        <img src={sticker}/>
                    </div>
                </div>
            </Background>
        </div>
    )
}