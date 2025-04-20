import './_CaseStudies.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map} from "lodash/fp";
import SkillList from "../Skill/SkillList.tsx";
import {RichText} from "../Typography/RichText.tsx";
import {reverse} from "lodash";
import Divider from "../Divider/Divider.tsx";

type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;
const CaseStudies = () => {
  const {data} = useGetCaseStudyCollectionSuspenseQuery();
  const renderCaseStudies = (item: CaseStudy) => {
    return <div key={item._id}>
      <div className="CaseStudies__item">
        <div className="CaseStudies__item__content">
          <h2 className="CaseStudies__item__title">{item.title}</h2>
          <SkillList skills={item.skillsCollection?.items}/>
          <RichText content={item.text?.json}/>
        </div>
        <div className="asset">
          <img src={item.assets?.url ?? ''}/>
        </div>
      </div>
      <Divider/>
    </div>
  };
  return <section className="CaseStudies" id="projects">
    <h3 className="CaseStudies__title">Selected work</h3>
    {flow(compact, reverse, map(renderCaseStudies))(data?.caseStudyCollection?.items ?? [])}
  </section>
}

export default CaseStudies;