import {HTMLAttributes, ReactNode} from "react";
import "./_Button.scss";
import classnames from "classnames";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "text" | "primary";
}
const Button = ({className, icon, children, onClick, type="primary"}: Props) => {
  return <button className={
    classnames([
      "Button",
      className,
      type === 'text' && 'Button--text',
      type === 'primary' && 'Button--primary'
    ])}
    onClick={onClick}>
    {children}
    {icon && <span className="Button__icon">{icon}</span>}
  </button>
}

export default Button;