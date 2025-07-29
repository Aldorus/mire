import {HTMLAttributes, ReactNode, useRef} from "react";
import "./_MovableIcon.scss";
import classNames from "classnames";
import Draggable from 'react-draggable'; // The default

interface Props{
  children?: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

const MovableIcon = ({ children, className}: Props) => {
  const nodeRef = useRef<any>(null);
  return <Draggable nodeRef={nodeRef}>
    <div className={classNames([className, 'MovableIcon'])} ref={nodeRef}>{children}</div>
  </Draggable>
}

export default MovableIcon;