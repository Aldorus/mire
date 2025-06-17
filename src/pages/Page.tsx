import {HTMLAttributes, ReactNode} from "react";
import "./_Page.scss";
import classnames from "classnames";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}

const Page = ({className, children}: Props) => {
  return <div className={classnames(className, 'Page')}>{children}</div>
}

export default Page;