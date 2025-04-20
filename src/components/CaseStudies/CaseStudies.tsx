import './_CaseStudies.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map, sortBy} from "lodash/fp";
import SkillList from "../Skill/SkillList.tsx";
import {RichText} from "../Typography/RichText.tsx";
import Divider from "../Divider/Divider.tsx";
import ArrowBottom from "../../assets/ArrowBottom.svg";
import {Link} from "../Link/Link.tsx";
import {generatePath} from "react-router-dom";
import arrowLeft from "../../assets/ArrowLeft.svg";

type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;
const CaseStudies = () => {
  const {data} = useGetCaseStudyCollectionSuspenseQuery();
  const renderCaseStudies = (item: CaseStudy) => {
    return <div key={item._id}>
      <div className="CaseStudies__item">
        <div className="CaseStudies__item__content">
          <h2 className="CaseStudies__item__title">{item.title}</h2>
          <p className="CaseStudies__item__date">{item.date}</p>
          <RichText content={item.text?.json} className="CaseStudies__item__text"/>
          <Divider/>
          <SkillList skills={item.skillsCollection?.items} className="CaseStudies__item__skills"/>
          <Divider/>
          <Link to={generatePath('/case/:caseId', {caseId: item._id})} className="CaseStudies__item__link">View case
            study<img src={arrowLeft}/></Link>
        </div>
        <div className="asset">
          <img src={item.assets?.url ?? ''}/>
        </div>
      </div>
    </div>
  };
  return <section className="CaseStudies" id="projects">
    <h3 className="CaseStudies__title"><img src={ArrowBottom}/><span
      className="CaseStudies__title__icon">Selected work</span></h3>
    <div className="CaseStudies__list">{flow(
      compact,
      sortBy((item: CaseStudy) => item.order),
      map(renderCaseStudies)
    )(data?.caseStudyCollection?.items ?? [])}</div>
  </section>
}

export default CaseStudies;