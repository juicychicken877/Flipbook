import { useState } from "react";
import Flipbook from "./components/Flipbook";
import Menu from "./components/Menu.jsx";
import { IMAGE_DATA } from './imageData.js';

const DEFAULT_BOOK = {
    name: IMAGE_DATA[0].name,
    path: IMAGE_DATA[0].path,
    pages: IMAGE_DATA[0].pages,
    imageExtension: IMAGE_DATA[0].extension
}

export default function App() {
    const [isInMenu, setIsInMenu] = useState(true);
    const [currentBook, setCurrentBook] = useState(DEFAULT_BOOK);

    function handleSwitch(book) {
        setCurrentBook((prevBook) => {
            return book;
        });
        setIsInMenu(!isInMenu);
    }
    return <>
        {isInMenu ? <Menu handleSwitch={handleSwitch} /> : <Flipbook CURRENT_BOOK={currentBook} handleSwitch={handleSwitch}/> }
    </>
}

