import "./_ExperienceList.scss";
import {Experience, useGetExperienceCollectionSuspenseQuery} from "../../models/graphql.ts";
import {flow, map, slice, sortBy} from "lodash/fp";
import ExperienceItem from "./ExperienceItem.tsx";
import {HTMLAttributes, useState} from "react";
import classNames from "classnames";
import {Link} from "../Link/Link.tsx";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'],

}
const ExperienceList = ({className}: Props) => {
  const {data: experienceData} = useGetExperienceCollectionSuspenseQuery();
  const [isExpended, setIsExpended] = useState(false);

  const renderExperience = (experience: Experience) =>
    <ExperienceItem experience={experience} className="ExperienceList__item" key={experience._id} />

  return <div className={classNames(['ExperienceList', className])}>
    <h4 className="ExperienceList__title">Experiences</h4>
    {flow(
      sortBy((experience: Pick<Experience, 'order'>) => experience.order),
      isExpended ? (a) => a : slice(0, 3),
      map(renderExperience))(experienceData?.experienceCollection?.items ?? [])
    }
    <div className="ExperienceList__actions">
      {!isExpended ?
        <Link onClick={() => setIsExpended(true)}>See more +</Link> :
        <Link onClick={() => setIsExpended(false)}>See less -</Link>
      }
    </div>

  </div>
}

export default ExperienceList