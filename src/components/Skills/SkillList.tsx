import "./_SkillList.scss";
import {Experience, Skill, useGetSkillCollectionSuspenseQuery} from "../../models/graphql.ts";
import {flow, map, sortBy} from "lodash/fp";
import SkillItem from "./SkillItem.tsx";
import {HTMLAttributes} from "react";
import classNames from "classnames";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'],

}
const SkillList = ({className}: Props) => {
  const {data: skillData} = useGetSkillCollectionSuspenseQuery();

  const renderExperience = (skill: Skill) =>
    <SkillItem skill={skill} className="SkillList__item" key={skill._id} />

  return <div className={classNames(['SkillList', className])}>
    {flow(
      sortBy((experience: Pick<Experience, 'order'>) => experience.order),
      map(renderExperience))(skillData?.skillCollection?.items ?? [])
    }
  </div>
}

export default SkillList