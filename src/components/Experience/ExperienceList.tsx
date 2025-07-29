import "./_ExperienceList.scss";
import {Experience, useGetExperienceCollectionSuspenseQuery} from "../../models/graphql.ts";
import {flow, map, sortBy} from "lodash/fp";
import ExperienceItem from "./ExperienceItem.tsx";

const ExperienceList = () => {
  const {data: experienceData} = useGetExperienceCollectionSuspenseQuery();

  const renderExperience = (experience: Experience) =>
    <ExperienceItem experience={experience} className="ExperienceList__item" key={experience._id} />

  return <div className="ExperienceList">
    {flow(
      sortBy((experience: Pick<Experience, 'order'>) => experience.order),
      map(renderExperience))(experienceData?.experienceCollection?.items ?? [])
    }
  </div>
}

export default ExperienceList