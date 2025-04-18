import {Maybe, Skill} from "../../models/graphql.ts";
import "./_SkillList.scss";
import {compact, flow, map} from 'lodash/fp';

type Props = {
  skills?: Array<Maybe<Pick<Skill, 'title' | '_id'>>> | undefined;
}

const SkillList = ({skills = []}: Props) => {
  const renderSkill = (skill: Skill) => <div key={skill._id} className="SkillList__item">{skill.title}</div>;
  return <div className="SkillList">{flow(compact, map(renderSkill))(skills)}</div>
}

export default SkillList;