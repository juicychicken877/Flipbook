import Highbar from "./Highbar.jsx"
import { IMAGE_DATA } from "../imageData.js"

export default function Menu({ handleSwitch }) {
    return <>
        <Highbar text="Choose a book"/>
        { IMAGE_DATA.map((item) => {
            return <button key={item.name} onClick={() => handleSwitch(item)}>{item.name}</button>
        })}
    </>
}