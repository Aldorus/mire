import './_CaseStudies.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map, sortBy} from "lodash/fp";
import {RichText} from "../Typography/RichText.tsx";
import {Link} from "../Link/Link.tsx";
import {generatePath} from "react-router-dom";
import arrowLeft from "../../assets/ArrowLeft.svg";
import {ROUTE} from "../../App.tsx";
import TagList from "../Tags/TagList.tsx";

type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;
const CaseStudies = () => {
  const {data} = useGetCaseStudyCollectionSuspenseQuery();
  const renderCaseStudies = (item: CaseStudy) => {
    return <div className="CaseStudies__item" key={item._id}>
      <div className="asset">
        <video loop autoPlay muted>
          <source src={item.assets?.url ?? ''} type="video/mp4"/>
        </video>
      </div>
      <div className="CaseStudies__item__content">
        <Link to={generatePath(ROUTE.CASE_STUDY, {slug: item.slug})} className="CaseStudies__item__link">
          <h2 className="CaseStudies__item__title">{item.title}&nbsp;<img src={arrowLeft}/></h2>
        </Link>
        <p className="CaseStudies__item__date">{item.date}</p>
        <RichText content={item.text?.json} className="CaseStudies__item__text"/>
        <TagList tags={item.tags} className="CaseStudies__item__skills"/>
      </div>
    </div>
  };
  return <section className="CaseStudies" id="projects">
    <div className="CaseStudies__list">{flow(
      compact,
      sortBy((item: CaseStudy) => item.order),
      map(renderCaseStudies)
    )(data?.caseStudyCollection?.items ?? [])}</div>
  </section>
}

export default CaseStudies;