import {HTMLAttributes, ReactNode} from "react";
import "./_Button.scss";
import classnames from "classnames";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  children?: ReactNode;
  icon?: ReactNode;
}
const Button = ({className, icon, children}: Props) => {
  return <button className={classnames(["Button", className])}>
    {children}
    {icon}
  </button>
}

export default Button;