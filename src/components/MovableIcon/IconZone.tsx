import "./_IconZone.scss";
import MovableIcon from "./MovableIcon.tsx";
import Mona1 from "../../assets/MovableIcon/Mona1.svg?react";
import Mona2 from "../../assets/MovableIcon/Mona2.svg?react";
import Ricard1 from "../../assets/MovableIcon/Ricardo1.svg?react";
import Ricard2 from "../../assets/MovableIcon/Ricardo2.svg?react";
import Ricard3 from "../../assets/MovableIcon/Ricardo3.svg?react";
import RSI1 from "../../assets/MovableIcon/RSI1.svg?react";
import RSI2 from "../../assets/MovableIcon/RSI2.svg?react";
import RSI3 from "../../assets/MovableIcon/RSI3.svg?react";
import RSI4 from "../../assets/MovableIcon/RSI4.svg?react";


const IconZone = () => {
  return <div className="IconZone">
    <MovableIcon className="IconZone__icon IconZone__icon--Mona1"><Mona1/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--Mona2"><Mona2/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--Ricard1"><Ricard1/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--Ricard2"><Ricard2/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--Ricard3"><Ricard3/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--RSI1"><RSI1/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--RSI2"><RSI2/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--RSI3"><RSI3/></MovableIcon>
    <MovableIcon className="IconZone__icon IconZone__icon--RSI4"><RSI4/></MovableIcon>
  </div>
}

export default IconZone;