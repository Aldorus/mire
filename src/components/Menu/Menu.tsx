import './_Menu.scss';
import {Link} from "../Link/Link.tsx";
import {ROUTE} from "../../App.tsx";
import Sun from "../../assets/Sun.svg";
import BettyStandard from "../../assets/BettyStandard.svg";
import BettyHappy from "../../assets/BettyHappy.svg";
import {useLocation} from "react-router-dom";
import BackLink from "../BackLink/BackLink.tsx";
import {useEffect, useState} from "react";
import classnames from "classnames";
import ExternalLink from "../../assets/ExternalLink.svg?react";

const Menu = () => {
  const {pathname} = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  return <nav className="Menu">
    {pathname === '/' ? <p className="Menu__hi"><img src={Sun}/>&nbsp;Hi! I’m Barbara</p> :
      <BackLink className="Menu__backlink"/>}
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="Menu__trigger">
      <img src={BettyStandard} className={classnames(['betty', 'standard', isHover && 'hovered'])}/>
      <img src={BettyHappy} className={classnames(['betty', 'happy', isHover && 'hovered'])}/>
    </div>
    <div className={classnames(['Menu__panel', isMenuOpen && 'Menu__panel--open'])}>
      <div className="Section">
        <ol>
          <li><Link to='/#projects' onClick={handleCloseMenu}>Projects</Link></li>
          <li><Link to={ROUTE.ABOUT} onClick={handleCloseMenu}>About</Link></li>
          <li><Link to='/#resume' onClick={handleCloseMenu}>Resume</Link></li>
          <li><Link to="https://www.linkedin.com/in/barbaramarche/" onClick={handleCloseMenu}
                    target="_blank">Linkedin&nbsp;<ExternalLink/></Link></li>
          <li><Link to="https://www.behance.net/barbara-marche" onClick={handleCloseMenu} target="_blank">Behance&nbsp;
            <ExternalLink/></Link></li>
        </ol>
      </div>
    </div>

  </nav>
}
export default Menu