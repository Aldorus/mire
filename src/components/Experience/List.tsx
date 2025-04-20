import "./_List.scss";
import {Experience, useGetExperienceCollectionSuspenseQuery} from "../../models/graphql.ts";
import {flow, map, sortBy} from "lodash/fp";
import {RichText} from "../Typography/RichText.tsx";

type ExperienceItem = Pick<Experience, 'text' | 'date'>;

const ExperienceList = () => {
  const {data: experienceData} = useGetExperienceCollectionSuspenseQuery();

  const renderExperience = (item: ExperienceItem) => <div className="ExperienceList__item">
    <p className="ExperienceList__item__date">{item.date}</p>
    <RichText content={item.text?.json}/>
  </div>

  return <div className="ExperienceList">
    {flow(sortBy((experience: Pick<Experience, 'order'>) => experience.order), map(renderExperience))(experienceData?.experienceCollection?.items ?? [])}
  </div>
}

export default ExperienceList