import {CSSProperties, HTMLAttributes, ReactNode, useEffect, useRef, useState} from "react";
import {useWindowScroll} from "react-use";
import {isNil} from "lodash";
import classNames from "classnames";
import "./_BlockReveal.scss";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  style?: CSSProperties;
}
const BlockReveal = ({children, style, className}: Props) => {
  const {y} = useWindowScroll();
  const blockRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  useEffect(() => {
    if(!isNil(blockRef.current)
      &&  y > blockRef.current?.getBoundingClientRect().top) {
      setIsRevealed(true)
    }
  },[y]);

  return <div
    style={style}
    className={classNames([
      'BlockReveal',
      isRevealed && 'BlockReveal--revealed',
      className
    ])}
    ref={blockRef}>{children}</div>
}

export default BlockReveal;