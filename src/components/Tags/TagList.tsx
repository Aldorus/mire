import "./_TagList.scss";
import {compact, flow, map} from 'lodash/fp';
import {HTMLAttributes} from "react";
import classnames from "classnames";

type Props = {
  tags?: (string | null)[] | null;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const TagList = ({tags = [], className}: Props) => {
  const renderTag = (tag: string) => <div key={tag} className="TagList__item">{tag}</div>;
  return <div className={classnames([className, "TagList"])}>{flow(compact, map(renderTag))(tags)}</div>
}

export default TagList;