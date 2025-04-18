import * as React from "react";
import {NavLinkProps} from "react-router-dom";
import {HashLink as NavLink} from "react-router-hash-link";
import "./_Link.scss";

type ReactRouterLinkProps = NavLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type DefaultLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type LinkProps = (DefaultLinkProps | ReactRouterLinkProps);
export const Link: React.FC<LinkProps> = ({...props}) => {
  return (props as ReactRouterLinkProps).to ? (
    <NavLink
      smooth
      {...(props as ReactRouterLinkProps)}
      data-testid={Link.displayName}
      className={"Link"}
    />
  ) : (
    <a
      {...(props as DefaultLinkProps)}
      className={'Link'}
      data-testid={Link.displayName}
    >
      {props.children}
    </a>
  );
};
Link.displayName = "Link";
