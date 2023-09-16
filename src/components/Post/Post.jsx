import styles from "./styles.module.css"

export function Post(props) {
    return (
        <div ref={props.index} id={styles.post}>
            <div>{props.content}</div>
            <div>{props.author}</div>
        </div>
    );
}