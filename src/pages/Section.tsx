import {HTMLAttributes, ReactNode, Ref} from "react";
import "./_Section.scss";
import classnames from "classnames";

interface Props {
  fullHeight?: boolean;
  noPadding?: boolean;
  sticky?: boolean;
  type?: 'small' | 'large';
  children: ReactNode;
  id?: string,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: HTMLAttributes<HTMLDivElement>['style'],
  ref?: Ref<HTMLDivElement>;
}

const Section = ({fullHeight = false, sticky=false, noPadding=false, type="large", style, className, id, children, ref}: Props) => {
  return <div ref={ref} style={style} className={classnames([
    className,
    'Section',
    fullHeight && 'Section--fullHeight',
    noPadding && "Section--noPadding",
    !noPadding && "Section--withPadding",
    sticky && "Section--sticky",
    `Section--${type}`
  ])} id={id}><div className="Section__content">{children}</div></div>
}

export default Section;