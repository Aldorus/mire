import './_Menu.scss';
import {Link} from "../Link/Link.tsx";
import Sun from "../../assets/Sun.svg?react";
import classNames from "classnames";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import Burger from "../../assets/Burger.svg?react";
import Close from "../../assets/Close.svg?react";

interface Props {
  isMenuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}
const Menu = ({isMenuOpen, onMenuOpen, onMenuClose}: Props) => {
  return <nav className="Menu">
    <Link to="/" button className={classNames(["Menu__name"])}><Sun/>&nbsp;Barbara Marche</Link>

    <ol className="Menu__navigation">
      <li>
        <Link
          to='/#projects' button>
          Projects
        </Link>
      </li>
      <li>
        <Link
          to='https://assets.ctfassets.net/bvolcybk2xx6/7vsh60Sp5ygHoftxr1Eime/3bb6f7f8bbb8c0e3547be52ffe6c1ef4/bmarche-resume.pdf'
          target="_blank"
          button
          icon={<ExternalLink/>}>
          Resume
        </Link>
      </li>
      <li>
        <Link
          to="https://www.linkedin.com/in/barbaramarche/"
          target="_blank"
          button
          icon={<ExternalLink />}>
          LinkedIn
        </Link>
      </li>
    </ol>

    <div
      onClick={() => isMenuOpen ? onMenuClose(): onMenuOpen()}
      className="Menu__trigger">
      {isMenuOpen ? <Close/> : <Burger/>}
    </div>
  </nav>
}
export default Menu