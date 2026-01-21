import {HTMLAttributes, ReactNode, Ref} from "react";
import "./_Section.scss";
import classnames from "classnames";

interface Props {
  fullHeight?: boolean;
  centered?: boolean;
  noPadding?: boolean;
  sticky?: boolean;
  children: ReactNode;
  id?: string,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: HTMLAttributes<HTMLDivElement>['style'],
  ref?: Ref<HTMLDivElement>;
}

const Section = ({fullHeight = false, centered = true, sticky=false, noPadding=false, style, className, id, children, ref}: Props) => {
  return <div ref={ref} style={style} className={classnames([
    className,
    'Section',
    fullHeight && 'Section--fullHeight',
    centered && 'Section--centered',
    noPadding && "Section--noPadding",
    !noPadding && "Section--withPadding",
    sticky && "Section--sticky",
  ])} id={id}>
    {children}
  </div>
}

export default Section;