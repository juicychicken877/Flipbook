import Highbar from "./Highbar.jsx"
import { IMAGE_DATA } from "../imageData.js"
import styles from "./Menu.module.css"

export default function Menu({ handleSwitch }) {
    return <>
        <Highbar text="Choose a book"/>
        <div id={styles.mainWindow}>
            { IMAGE_DATA.map((item) => {
                let firstImage = item.path + '1' + item.extension;

                return <button key={item.name} onClick={() => handleSwitch(item)} className="boxshadow">
                    <img src={firstImage} alt="okladka"></img>
                </button>
            })}
        </div>
    </>
}