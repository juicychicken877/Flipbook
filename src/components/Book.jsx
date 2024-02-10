import styles from './Book.module.css';

export default function Book({ pages, maxPage}) {
    return <>
        <div id={styles.book}>
            {pages.right == 1 ? null : <div id={styles.leftpage}>{pages.left}</div>}
            {pages.left == maxPage ? null : <div id={styles.rightpage}>{pages.right}</div>}
        </div>
    </>
}