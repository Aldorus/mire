import {useWindowScroll} from "react-use";

const RoundedBorder = () => {
  const {y} = useWindowScroll();
  const opacity = (y / (screen.height));
  const height = 200;
  return <div style={{
    backgroundColor: "var(--primary-8)",
    height: height,
    zIndex:2,
    position: "relative",
    bottom: height / -2,
    borderRadius: "100%",
    margin: "0 auto",
    transform: `scale(${1+ opacity})`,
  }}/>;
}

export default RoundedBorder;