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
  icon?: ReactNode;
  button?: boolean;
  reverseIcon?: boolean;
  animated?: boolean;
};
export const Link: React.FC<LinkProps> = ({ icon, button = false, reverseIcon = false, animated = false, children, ...props}) => {
  return (props as ReactRouterLinkProps).to ? (
    <NavLink
      smooth
      {...(props as ReactRouterLinkProps)}
      data-testid={Link.displayName}
      className={classnames([props.className, "Link", button && "Link--button", animated && "Link--animated", reverseIcon && "Link--reverseIcon"])}
    >
      <span className="Link__children">{children}</span>
      {icon && <span className="Link__icon">{icon}</span>}
    </NavLink>
  ) : (
    <a
      {...(props as DefaultLinkProps)}
      className={classnames([props.className, 'Link', button && "Link--button", animated && "Link--animated", reverseIcon && "Link--reverseIcon"])}
      data-testid={Link.displayName}
    >
      <span className="Link__children">{children}</span>
      {icon && <span className="Link__icon">{icon}</span>}
    </a>
  );
};
Link.displayName = "Link";
