import styles from './Highbar.module.css';

export default function Highbar({ text }) {
    return <>
        <div className={styles.highbar}>
            {text}
        </div>
    </>
}