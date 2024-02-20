import styles from './Book.module.css';

export default function Book({ pages, maxPage, currentBook}) {
    let leftPageImage = `${currentBook.path + pages.left + currentBook.extension}`
    let rightPageImage = `${currentBook.path + pages.right + currentBook.extension}`

    return <>
        <div id={styles.book} className="boxshadow">
            {pages.right === 1 ? null :
                <div id={styles.leftpage}>
                    <img 
                        src={leftPageImage} 
                        alt='nie znaleziono'>
                    </img>
                </div>
            }
            {pages.left === maxPage ? null : 
                <div id={styles.rightpage}>
                    <img 
                        src={rightPageImage} 
                        alt='nie znaleziono'>
                    </img>
                </div>
            }
        </div>
    </>
}