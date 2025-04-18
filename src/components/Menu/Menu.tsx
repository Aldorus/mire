import './_Menu.scss';
import {Link} from "react-router-dom";

const Menu = () => {
  return <nav className="Menu">
    <ol>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/#projects'>Projects</Link></li>
      <li><Link to='/#contacts'>Contact</Link></li>
    </ol>
  </nav>
}
export default Menu