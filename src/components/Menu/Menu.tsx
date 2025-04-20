import './_Menu.scss';
import {Link} from "../Link/Link.tsx";

const Menu = () => {
  return <nav className="Menu">
    <ol>
      <li><Link to='/#projects'>Projects</Link></li>
      <li><Link to='/#about'>About</Link></li>
      <li><Link to='/#resume'>Resume</Link></li>
    </ol>
  </nav>
}
export default Menu