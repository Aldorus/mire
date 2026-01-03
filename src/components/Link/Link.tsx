import * as React from "react";
import {NavLinkProps} from "react-router-dom";
import {HashLink as NavLink} from "react-router-hash-link";
import "./_Link.scss";
import classnames from "classnames";
import {ReactNode} from "react";

type ReactRouterLinkProps = NavLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type DefaultLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type LinkProps = (DefaultLinkProps | ReactRouterLinkProps) & {
  hoverIcon?: boolean;
  icon?: ReactNode;
};
export const Link: React.FC<LinkProps> = ({hoverIcon, icon, children, ...props}) => {
  return (props as ReactRouterLinkProps).to ? (
    <NavLink
      smooth
      {...(props as ReactRouterLinkProps)}
      data-testid={Link.displayName}
      className={classnames([props.className, "Link", hoverIcon && "Link--hoverIcon"])}
    >{children}{icon && <span className="Link__icon">{icon}</span>}</NavLink>
  ) : (
    <a
      {...(props as DefaultLinkProps)}
      className={classnames([props.className, 'Link', hoverIcon && "Link--hoverIcon"])}
      data-testid={Link.displayName}
    >
      {children}
      {icon && <span className="Link__icon">{icon}</span>}
    </a>
  );
};
Link.displayName = "Link";
