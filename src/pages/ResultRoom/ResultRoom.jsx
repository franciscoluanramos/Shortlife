import styles from "./styles.module.css"
import { Background } from "../../components/Background/index";
import { Header } from "../../components/Header/index"
import { Post } from "../../components/Post/Post";
import { Skull } from "../../components/Skull/index";

export function ResultRoom() {
    function calculateLifePercentageLeft() {
        return (
            <div id={styles.text2}>
                22%
            </div>
        );
    }
    
    return (
        <Background>
            <Header/>
            <div id={styles.resultRoom}>
                <aside>
                    <div className={styles.text1}>
                        YOU ALREADY LIVED
                    </div>
                        {calculateLifePercentageLeft()}
                    <div className={styles.text1}>
                        OF YOUR LIFE
                    </div>
                    <div id={styles.text3}>
                        Statistically speaking, you'll live to be about <strong>77 years old</strong>. You will probably die in the <strong>year 2077</strong>, but you have a <strong>0.1%</strong> chance of dying next year.
                    </div>
                </aside>
                <div id={styles.postsbox}>
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post
                        content="Believing the lie that time will heal all wounds is just a nice way of saying that time deadens us."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time eventually convinces most of us that forgiveness is a virtue. Conveniently, cowardice and forgiveness look identical at a certain distance." 
                        author="― Jonathan Nolan, Memento Mori"
                    />
                </div>
            </div>
        </Background>
    );
}