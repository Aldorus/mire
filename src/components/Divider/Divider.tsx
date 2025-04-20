import "./_Divider.scss";
import {HTMLAttributes} from "react";
import classnames from "classnames";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const Divider = ({className}: Props) => {
  return <hr className={classnames([className, "Divider"])}/>
}

export default Divider;