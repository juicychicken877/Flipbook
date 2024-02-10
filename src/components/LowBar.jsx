import { useState } from 'react';
import styles from './LowBar.module.css';

export default function LowBar({ goToLastPage, goPagesForward, goToFirstPage, goPagesBackward, pages, maxPage }) {
    const [isVolumeOn, setVolumeOn] = useState(true);

    function customInputValue(left, right) {
        if (left === 0)
            return right + '/' + maxPage;
        else if (right === maxPage+1)
            return left + '/' + maxPage;
        else
            return left + '-' + right + '/' + maxPage;
    }

    function handleVolumeChange() {
        setVolumeOn(!isVolumeOn);
    }

    function changeInputValue(eventTarget) {
        eventTarget.value = customInputValue(pages.left, pages.right);
    }

    return <div id={styles.lowbar}>
        <div>
            <button 
                className={styles.barButton}
            >
                <i className="fa-solid fa-list"></i>
            </button>

            <button
                className={styles.barButton}
            >
                <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>
        </div>

        <div id={styles.middlebar}>
            <button 
                className={styles.barButton}
                onClick={() => goToFirstPage()}
            >
                <i className="fa-solid fa-backward-fast"></i>
            </button>

            <button 
                className={styles.barButton}
                onClick={() => goPagesBackward(11)}
            >
                <i className="fa-solid fa-angles-left"></i>
            </button>

            <button 
                className={styles.barButton}
                onClick={() => goPagesBackward(1)}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <input type='text' value={ customInputValue(pages.left, pages.right)} 
                onChange={event => changeInputValue(event.target)}
            ></input>

            <button 
                className={styles.barButton}
                onClick={() => goPagesForward(1)}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            
            <button 
                className={styles.barButton}
                onClick={() => goPagesForward(11)}
            >
                <i className="fa-solid fa-angles-right"></i>
            </button>

            <button 
                className={styles.barButton}
                onClick={() => goToLastPage()}
            >
                <i className="fa-solid fa-forward-fast"></i>
            </button>
        </div>
        
        <div>
            <button
                className={styles.barButton}
                onClick={() => handleVolumeChange()}
            >
                {isVolumeOn ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}
            </button>
            <button
                className={styles.barButton}
            >
                <i className="fa-solid fa-expand"></i>
            </button>
        </div>
    </div>
}