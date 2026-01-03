import "./_SkillItem.scss";
import {HTMLAttributes} from "react";
import classNames from "classnames";
import {Skill} from "../../models/graphql.ts";
import {RichText} from "../Typography/RichText.tsx";

interface Props {
  skill: Skill;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
const SkillItem = ({skill, className}: Props) => {
  return <div className={classNames([className, "SkillItem"])}>
    <img src={skill.icon?.url ?? ''} className="SkillItem__img"/>
    <h5>{skill.title}</h5>
    <RichText content={skill.description} className='SkillItem__description'/>
  </div>
}

export default SkillItem;