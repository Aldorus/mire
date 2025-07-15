import {forwardRef, HTMLAttributes, ReactNode} from "react";
import "./_Page.scss";
import classnames from "classnames";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}

const Page = forwardRef<HTMLDivElement, Props>(({className, children}, ref) => {
  return <div ref={ref} className={classnames(className, 'Page')}>{children}</div>
});

export default Page;