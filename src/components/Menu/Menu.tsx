import './_Menu.scss';
import {Link} from "../Link/Link.tsx";
import {ROUTE} from "../../App.tsx";

const Menu = () => {
  return <nav className="Menu">
    <ol>
      <li><Link to='/#projects'>Projects</Link></li>
      <li><Link to={ROUTE.ABOUT}>About</Link></li>
      <li><Link to='/#resume'>Resume</Link></li>
    </ol>
  </nav>
}
export default Menu