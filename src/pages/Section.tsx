import {HTMLAttributes, ReactNode} from "react";
import "./_Section.scss";
import classnames from "classnames";

interface Props {
  fullHeight?: boolean
  noPadding?: boolean
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}

const Section = ({fullHeight = false, noPadding=false, className, children}: Props) => {
  return <div className={classnames([className, 'Section', fullHeight && 'Section--fullHeight', noPadding && "Section--noPadding"])}><div className="Section__content">{children}</div></div>
}

export default Section;