import "./_ExperienceList.scss";
import { Experience, useGetExperienceCollectionSuspenseQuery } from "../../models/graphql.ts";
import { flow, map, slice, sortBy } from "lodash/fp";
import ExperienceItem from "./ExperienceItem.tsx";
import { HTMLAttributes, useState } from "react";
import classNames from "classnames";
import { Link } from "../Link/Link.tsx";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'],

}
const ExperienceList = ({ className }: Props) => {
  const { data: experienceData } = useGetExperienceCollectionSuspenseQuery();
  const [isExpended, setIsExpended] = useState(false);

  const renderExperience = (experience: Experience) =>
    <ExperienceItem experience={experience} className="ExperienceList__item" key={experience._id} />

  return <div className={classNames(['ExperienceList', className])}>
    <h4 className="ExperienceList__title">Experiences</h4>
    <div className="ExperienceList__items-container">
      {flow(
        sortBy((experience: Pick<Experience, 'order'>) => experience.order),
        slice(0, 3),
        map(renderExperience)
      )(experienceData?.experienceCollection?.items ?? [])}

      <div className={classNames('ExperienceList__collapsible', { 'is-expanded': isExpended })}>
        <div className="ExperienceList__collapsible-inner">
          {flow(
            sortBy((experience: Pick<Experience, 'order'>) => experience.order),
            slice(3, experienceData?.experienceCollection?.items?.length || 999),
            map(renderExperience)
          )(experienceData?.experienceCollection?.items ?? [])}
        </div>
      </div>
    </div>
    <div className="ExperienceList__actions">
      {!isExpended ?
        <Link button animated onClick={() => setIsExpended(true)}>See more +</Link> :
        <Link button animated onClick={() => setIsExpended(false)}>See less -</Link>
      }
    </div>

  </div>
}

export default ExperienceList