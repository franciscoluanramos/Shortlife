import styles from "./styles.module.css"
import { Background } from "../../components/Background/index"
import { Post } from "../../components/Post/Post"
import { Header } from "../../components/Header/index"

export function Quotes() {
    return (
        <>
            <Background>
                <Header/>
                <div id={styles.contentContainer}>
                    <div id={styles.quotes}>
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    /><Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    /><Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    <Post 
                        content="Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over..."
                        author="― Jonathan Nolan, Memento Mori"
                    />
                    </div>
                </div>
            </Background>
        </>
    )
}