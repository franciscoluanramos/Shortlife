import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

import { Background } from "../../components/Background/index";
import { Post } from "../../components/Post/Post";
import { Header } from "../../components/Header/index";


export function Quotes() {

    const items = [
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        },
        {
            content: "Time is an absurdity. An abstraction. The only thing that matters is this moment. This moment a million times over...",
            author: "― Jonathan Nolan, Memento Mori"
        }
    ];

    return (
        <>
            <Background>
                <Header/>
                <div id={styles.contentContainer}>
                    <div style={{
                        border: '1px solid red'
                    }}>
                        <div id={styles.quotes}>
                            {
                                items.map((item, index) => {
                                    return(
                                        <Post 
                                            content={item.content}
                                            author={item.author}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </Background>
        </>
    )
}