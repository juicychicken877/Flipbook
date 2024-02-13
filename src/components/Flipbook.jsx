import { useState } from 'react';
import LowBar from './LowBar.jsx';
import Book from './Book.jsx';
import Highbar from './Highbar.jsx';

export default function Flipbook({ CURRENT_BOOK, handleSwitch }) {
    const [leftPageNumber, setLeftPageNumber] = useState(0);
    const [rightPageNumber, setRightPageNumber] = useState(1);

    let MAX_PAGE = CURRENT_BOOK.pages;

    function goPagesBackward(pages) {
        setLeftPageNumber(() => {
            let page = leftPageNumber - pages;

            if (page >= 1)
                return page-1;
            else
                return 0;
        })

        setRightPageNumber(() => {
            let page = rightPageNumber - pages;

            if (page >= 1) 
                return page-1;
            else
                return 1;
        })
    }
    
    function goToFirstPage() {
        setLeftPageNumber(() => {
            return 0;
        })
        setRightPageNumber(() => {
            return 1;
        })
    }

    function goPagesForward(pages) {
        setLeftPageNumber(() => {
            let page = leftPageNumber + pages;

            if (page <= MAX_PAGE)
                return page+1;
            else
                return MAX_PAGE;
        })

        setRightPageNumber(() => {
            let page = rightPageNumber + pages;

            if (page <= MAX_PAGE) 
                return page+1;
            else
                return MAX_PAGE+1;
        })
    }

    function goToLastPage() {
        setLeftPageNumber(() => {
            return MAX_PAGE;
        })

        setRightPageNumber(() => {
            return MAX_PAGE+1;
        })
    }

    return <>
        <Highbar text={CURRENT_BOOK.name}/>
        <Book 
            pages={{
                left: leftPageNumber,
                right: rightPageNumber
            }}
            maxPage={MAX_PAGE}
            currentBook={CURRENT_BOOK}
        />
        <LowBar 
            goToLastPage={goToLastPage}
            goPagesForward={goPagesForward} 
            goToFirstPage={goToFirstPage}
            goPagesBackward={goPagesBackward} 
            pages={{
                left: leftPageNumber,
                right: rightPageNumber
            }}
            maxPage={MAX_PAGE}
            handleSwitch={handleSwitch}
        />
    </>

}