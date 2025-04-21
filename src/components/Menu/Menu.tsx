import './_Menu.scss';
import {Link} from "../Link/Link.tsx";
import {ROUTE} from "../../App.tsx";
import Sun from "../../assets/Sun.svg";
import {useLocation} from "react-router-dom";
import BackLink from "../BackLink/BackLink.tsx";

const Menu = () => {
  const {pathname} = useLocation();
  return <nav className="Menu">
    {pathname === '/' ? <p className="Menu__hi"><img src={Sun}/>&nbsp;Hi! I’m Barbara</p> : <BackLink/>}
    <ol>
      <li><Link to='/#projects'>Projects</Link></li>
      <li><Link to={ROUTE.ABOUT}>About</Link></li>
      <li><Link to='/#resume'>Resume</Link></li>
    </ol>
  </nav>
}
export default Menu