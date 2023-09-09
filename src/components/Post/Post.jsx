import styles from "./styles.module.css"

export function Post(props) {
    return (
        <div id={styles.post}>
            <div>{props.content}</div>
            <div>{props.author}</div>
        </div>
    );
}