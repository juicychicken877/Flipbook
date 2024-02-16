import styles from './Book.module.css';

export default function Book({ pages, maxPage, currentBook}) {
    return <>
        <div id={styles.book} className="boxshadow">
            {pages.right === 1 ? null :
                <div id={styles.leftpage}>
                    <img src={`${currentBook.path + pages.left + currentBook.extension}`} alt='nie znaleziono'></img>
                </div>
            }
            {pages.left === maxPage ? null : 
                <div id={styles.rightpage}>
                    <img 
                        src={`${currentBook.path + pages.right + currentBook.extension}`} 
                        alt='nie znaleziono'>
                    </img>
                </div>
            }
        </div>
    </>
}