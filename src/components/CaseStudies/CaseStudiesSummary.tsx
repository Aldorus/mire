import './_CaseStudiesSummary.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map, sortBy} from "lodash/fp";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import CaseStudySummaryItem from "./CaseStudySummaryItem.tsx";
import BlockReveal from "../BlockReveal/BlockReveal.tsx";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;

const CaseStudiesSummary = ({className}: Props) => {
  const {data} = useGetCaseStudyCollectionSuspenseQuery();

  const renderCaseStudies = (item: CaseStudy) =>
    <BlockReveal key={item._id} style={{transitionDelay: `${(item.order ?? 0) * .5}s`}}>
      <CaseStudySummaryItem className={"CaseStudies__item"} item={item}/>
    </BlockReveal>;

  return <div
    className={classnames('CaseStudies', className)}
    id="projects">
    <div className="CaseStudies__list--vertical">
      {flow(
        compact,
        sortBy((item: CaseStudy) => item.order),
        map(renderCaseStudies)
      )(data?.caseStudyCollection?.items ?? [])}
    </div>
  </div>
}

export default CaseStudiesSummary;