import {HTMLAttributes, ReactNode} from "react";
import "./_Section.scss";
import classnames from "classnames";

interface Props {
  fullHeight?: boolean
  noPadding?: boolean
  children: ReactNode;
  id?: string,
  className?: HTMLAttributes<HTMLDivElement>['className'],
}

const Section = ({fullHeight = false, noPadding=false, className, id, children}: Props) => {
  return <div className={classnames([
    className,
    'Section',
    fullHeight && 'Section--fullHeight',
    noPadding && "Section--noPadding",
    !noPadding && "Section--withPadding"
  ])} id={id}><div className="Section__content">{children}</div></div>
}

export default Section;