import {Maybe, Skill} from "../../models/graphql.ts";
import "./_SkillList.scss";
import {compact, flow, map} from 'lodash/fp';
import {HTMLAttributes} from "react";
import classnames from "classnames";

type Props = {
  skills?: Array<Maybe<Pick<Skill, 'title' | '_id'>>> | undefined;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const SkillList = ({skills = [], className}: Props) => {
  const renderSkill = (skill: Skill) => <div key={skill._id} className="SkillList__item">{skill.title}</div>;
  return <div className={classnames([className, "SkillList"])}>{flow(compact, map(renderSkill))(skills)}</div>
}

export default SkillList;