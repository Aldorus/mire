import {Maybe, Skill} from "../../models/graphql.ts";
import "./_SkillList.scss";
type Props=  {
  skills?: Maybe<Skill>[];
}

const SkillList = ({skills}:Props) => {
  return <div className="SkillList">{skills?.map(skill => <div className="item">{skill.title}</div>)}</div>
}

export default SkillList;