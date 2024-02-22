import { useState } from 'react';
import styles from './LowBar.module.css';

export default function LowBar({ goToLastPage, goPagesForward, goToFirstPage, goPagesBackward, pages, maxPage, handleSwitch }) {
    const [isVolumeOn, setVolumeOn] = useState(true);
    const [isInZoom, setIsInZoom] = useState(false);
    const [isInFullscreen, setIsInFullscreen] = useState(false);

    function customInputValue(left, right) {
        if (left === 0)
            return right + '/' + maxPage;
        else if (right === maxPage+1)
            return left + '/' + maxPage;
        else
            return left + '-' + right + '/' + maxPage;
    }

    function handleFullscreen() {
        if (isInFullscreen) {
            // close fullscreen
            if (document.exitFullscreen) 
                document.exitFullscreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen)
                document.msExitFullscreen();
        }
        else {
            let element = document.documentElement;

            if (element.requestFullscreen)
                element.requestFullscreen();
            else if (element.webkitRequestFullscreen) 
                element.webkitRequestFullscreen();
            else if (element.msRequestFullscreen)
                element.msRequestFullscreen();
        }

        setIsInFullscreen(!isInFullscreen);
    }

    function handleZooming() {
        setIsInZoom(!isInZoom);
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
                onClick={() => handleSwitch()}
                title='wroc do menu ksiazek'
            >
                <span className="material-symbols-outlined">library_books</span>
            </button>

            <button
                className={styles.barButton}
                title='przybliz'
                onClick={() => handleZooming()}
            >
                {isInZoom ? <span class="material-symbols-outlined">zoom_out</span> : <span className="material-symbols-outlined">zoom_in</span> }
            </button>
        </div>

        <div id={styles.middlebar}>
            <button 
                className={styles.barButton}
                onClick={() => goToFirstPage()}
                title='na poczatek ksiazki'
            >
                <span className="material-symbols-outlined">arrow_left_alt</span>
            </button>

            <button 
                className={styles.barButton}
                onClick={() => goPagesBackward(11)}
                title='10 do tylu'
            >
                <span className="material-symbols-outlined">keyboard_double_arrow_left</span>            
            </button>

            <button 
                className={styles.barButton}
                onClick={() => goPagesBackward(1)}
                title='1 do tylu'
            >
                <span className="material-symbols-outlined">keyboard_arrow_left</span>
            </button>

            <input type='text' value={ customInputValue(pages.left, pages.right)} 
                onChange={event => changeInputValue(event.target)}
            ></input>

            <button 
                className={styles.barButton}
                onClick={() => goPagesForward(1)}
                title='1 do przodu'
            >
                <span className="material-symbols-outlined">keyboard_arrow_right</span>            
            </button>
            
            <button 
                className={styles.barButton}
                onClick={() => goPagesForward(11)}
                title='10 do przodu'
            >
                <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>

            <button 
                className={styles.barButton}
                onClick={() => goToLastPage()}
                title='na koniec ksiazki'
            >
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
        </div>
        
        <div>
            <button
                className={styles.barButton}
                onClick={() => handleVolumeChange()}
                title='wylacz/wlacz dzwiek'
            >
                {isVolumeOn ? <span className="material-symbols-outlined">volume_up</span> : <span class="material-symbols-outlined">volume_off</span>}
            </button>
            <button
                className={styles.barButton}
                onClick={() => handleFullscreen()}
                title='pelny ekran'
            >
                <span className="material-symbols-outlined">fullscreen</span>
            </button>
        </div>
    </div>
}