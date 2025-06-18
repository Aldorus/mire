import "./_Text.scss";
import {HTMLAttributes, ReactNode} from "react";
import classNames from "classnames";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children: ReactNode;
}

const Text = ({className, children}: Props) => {
  return <span className={classNames(["Text", className])}>{children}</span>
}
export default Text;