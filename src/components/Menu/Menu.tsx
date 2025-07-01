import './_Menu.scss';
import {Link} from "../Link/Link.tsx";
import {ROUTE} from "../../App.tsx";
import Sun from "../../assets/Sun.svg?react";
import BettyStandard from "../../assets/BettyStandard.svg";
import BettyHappy from "../../assets/BettyHappy.svg";
import {useEffect, useState} from "react";
import classnames from "classnames";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

const Menu = () => {
  const {pathname} = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  return <nav className="Menu">
    <Link to="/" className={classNames(["Menu__hi", pathname.includes("about") && "Menu__hi--alternate" ])}><Sun/>&nbsp;Hi! I’m Barbara</Link>
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="Menu__trigger">
      <div>
        <img src={BettyStandard} className={classnames(['betty', 'standard'])}/>
        <img src={BettyHappy} className={classnames(['betty', 'happy'])}/>
      </div>
    </div>
    <div className={classnames(['Menu__panel', isMenuOpen && 'Menu__panel--open'])}>
      <div className="Section">
        <ol>
          <li>
            <Link
              to='/#projects'
              onClick={handleCloseMenu}
              icon={<Sun/>}
              hoverIcon>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={ROUTE.ABOUT}
              onClick={handleCloseMenu}
              icon={<Sun/>}
              hoverIcon>
              About
            </Link>
          </li>
          <li>
            <Link
              to='https://assets.ctfassets.net/bvolcybk2xx6/7vsh60Sp5ygHoftxr1Eime/6b5aa61dea4d009267af0b37e5007fdd/bmarche-resume.pdf'
              onClick={handleCloseMenu}
              target="_blank"
              icon={<ExternalLink/>}>
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/barbaramarche/"
              onClick={handleCloseMenu}
              target="_blank"
              icon={<ExternalLink/>}>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://www.behance.net/barbara-marche"
              onClick={handleCloseMenu}
              target="_blank"
              icon={<ExternalLink/>}>
              Behance
            </Link>
          </li>
        </ol>
      </div>
    </div>
  </nav>
}
export default Menu