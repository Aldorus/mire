import "./_RichText.scss";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {HTMLAttributes} from "react";
import classnames from "classnames";


type MarkdownProps = {content: Parameters<typeof documentToReactComponents>[0], className?: HTMLAttributes<HTMLElement>['className']};
export const RichText = ({
                           content,
  className
                         }: MarkdownProps) => {
  return <div className={classnames(['Markdown',className])}>{documentToReactComponents(content)}</div>;
};
RichText.displayName = "Markdown";
