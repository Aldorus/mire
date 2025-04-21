import './_BackLink.scss';
import {ROUTE} from "../../App.tsx";
import ArrowRight from "../../assets/ArrowRight.svg";
import {Link} from "../Link/Link.tsx";

const BackLink = () => {
  return <Link to={ROUTE.HOME} className="Backlink"><img className="Backlink__icon" src={ArrowRight}/><span>Back to project</span></Link>
}
export default BackLink;