import './_BackLink.scss';
import {ROUTE} from "../../App.tsx";
import ArrowRight from "../../assets/ArrowRight.svg";
import {Link} from "../Link/Link.tsx";
import {HTMLAttributes} from "react";
import classnames from "classnames";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const BackLink = ({className} : Props) => {
  return <Link to={ROUTE.HOME} className={classnames(["Backlink", className])}><img className="Backlink__icon" src={ArrowRight}/>&nbsp;<span>Back to project</span></Link>
}
export default BackLink;