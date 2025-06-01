import './_CaseStudiesSummary.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map, sortBy} from "lodash/fp";
import {RichText} from "../Typography/RichText.tsx";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import Slider from "react-slick";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;


const CaseStudiesSummary = ({className}: Props) => {
  const {data} = useGetCaseStudyCollectionSuspenseQuery();
  const renderCaseStudies = (item: CaseStudy) => {
    return <div key={item._id} className="CaseStudies__item">
      <div className="asset">
        {item.assets?.contentType?.includes("video") ? <video loop autoPlay muted>
          <source src={item.assets?.url ?? ''} type="video/mp4"/>
        </video> : <img src={item.assets?.url ?? ''}/>}
      </div>
      <div className="description">
        <p className="title">{item.title}</p>
        <RichText content={item.text} className="text"/>
      </div>
    </div>
  };

  return <section className={classnames('CaseStudies', className)} id="projects">
    <h2 className="CaseStudies__title">Selected works</h2>
    <Slider
      className="CaseStudies__list"
      infinite={false}
      centerPadding="150px"
      centerMode>
      {flow(
        compact,
        sortBy((item: CaseStudy) => item.order),
        map(renderCaseStudies)
      )(data?.caseStudyCollection?.items ?? [])}
    </Slider>
  </section>
}

export default CaseStudiesSummary;