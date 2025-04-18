import './_Menu.scss';
import {Link} from "../Link/Link.tsx";

const Menu = () => {
  return <nav className="Menu">
    <ol>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/#projects'>Projects</Link></li>
      <li><Link to='/#contact'>Contact</Link></li>
    </ol>
  </nav>
}
export default Menu