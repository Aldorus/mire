/// <reference types="vite-plugin-svgr/client" />
import './_CaseStudiesSummary.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map, sortBy} from "lodash/fp";
import {RichText} from "../Typography/RichText.tsx";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import Slider from "react-slick";
import ArrowLeft from "../../assets/ArrowLeft.svg?react";
import ArrowRight from "../../assets/ArrowRight.svg?react";
import {Link} from "../Link/Link.tsx";

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
      <Link to={`/case/${item.slug}`}><div className="description">
        <p className="title">{item.title}</p>
        <RichText content={item.text} className="text"/>
      </div></Link>
    </div>
  };

  return <section className={classnames('CaseStudies', className)} id="projects">
    <h2 className="CaseStudies__title">Selected works</h2>
    <Slider
      className="CaseStudies__list--carrousel"
      infinite={false}
      centerPadding="10%"
      dots
      centerMode
      nextArrow={<ArrowLeft/>}
      prevArrow={<ArrowRight/>}
    >
      {flow(
        compact,
        sortBy((item: CaseStudy) => item.order),
        map(renderCaseStudies)
      )(data?.caseStudyCollection?.items ?? [])}
    </Slider>

    <div className="CaseStudies__list--vertical">
      {flow(
        compact,
        sortBy((item: CaseStudy) => item.order),
        map(renderCaseStudies)
      )(data?.caseStudyCollection?.items ?? [])}
    </div>
  </section>
}

export default CaseStudiesSummary;