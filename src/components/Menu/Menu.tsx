import './_Menu.scss';
import {Link} from "../Link/Link.tsx";
import Sun from "../../assets/Sun.svg?react";
import BettyStandard from "../../assets/BettyStandard.svg";
import BettyHappy from "../../assets/BettyHappy.svg";
import {useState} from "react";
import classnames from "classnames";
import classNames from "classnames";

interface Props {
  isMenuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}
const Menu = ({isMenuOpen, onMenuOpen, onMenuClose}: Props) => {
  const [isHover, setIsHover] = useState(false);

  return <nav className="Menu">
    <Link to="/" className={classNames(["Menu__hi"])}><Sun/>&nbsp;Hello, I’m Barbara</Link>
    <div
      onClick={() => isMenuOpen ? onMenuClose(): onMenuOpen()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={classnames([
        "Menu__trigger",
        isMenuOpen && 'Menu__trigger--open',
        isHover && 'Menu__trigger--hover'
      ])}>
      <div>
        <img src={BettyStandard} className={classnames(['betty', 'standard'])}/>
        <img src={BettyHappy} className={classnames(['betty', 'happy'])}/>
      </div>
    </div>
  </nav>
}
export default Menu