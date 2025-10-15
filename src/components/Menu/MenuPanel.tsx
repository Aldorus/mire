import classnames from "classnames";
import {Link} from "../Link/Link.tsx";
import {ROUTE} from "../../App.tsx";
import Sun from "../../assets/Sun.svg?react";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import "./_MenuPanel.scss";

interface Props {
  isMenuOpen: boolean;
  onClose: () => void;
}
export const MenuPanel = ({isMenuOpen, onClose}: Props) => {
  return <div className={classnames(['MenuPanel', isMenuOpen && 'MenuPanel--open']) }>
    <div className="Section">
      <ol>
        <li>
          <Link
            to='/#projects'
            onClick={onClose}
            icon={<Sun/>}
            hoverIcon>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to={ROUTE.ABOUT}
            onClick={onClose}
            icon={<Sun/>}
            hoverIcon>
            About
          </Link>
        </li>
        <li>
          <Link
            to='https://assets.ctfassets.net/bvolcybk2xx6/7vsh60Sp5ygHoftxr1Eime/3bb6f7f8bbb8c0e3547be52ffe6c1ef4/bmarche-resume.pdf'
            onClick={onClose}
            target="_blank"
            hoverIcon
            icon={<ExternalLink/>}>
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/barbaramarche/"
            onClick={onClose}
            target="_blank"
            hoverIcon
            icon={<ExternalLink/>}>
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            to="https://www.behance.net/barbara-marche"
            onClick={onClose}
            target="_blank"
            hoverIcon
            icon={<ExternalLink/>}>
            Behance
          </Link>
        </li>
      </ol>
    </div>
  </div>;
}