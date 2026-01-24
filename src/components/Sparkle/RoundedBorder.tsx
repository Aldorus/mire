import {useWindowScroll} from "react-use";
import "./_RoundedBorder.scss";

const RoundedBorder = () => {
  const {y} = useWindowScroll();
  const opacity = (y / (screen.height));
  const height = 200;
  return <div className="RoundedBorder"><div style={{
    backgroundColor: "var(--neutral-2)",
    height: height,
    zIndex:2,
    position: "relative",
    bottom: height / -2,
    borderRadius: "100%",
    margin: "0 auto",
    transform: `scale(${1+ opacity * 2})`,
  }}/></div>;
}

export default RoundedBorder;