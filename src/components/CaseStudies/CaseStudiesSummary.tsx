import './_CaseStudiesSummary.scss';
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map, sortBy} from "lodash/fp";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import CaseStudySummaryItem from "./CaseStudySummaryItem.tsx";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;

const CaseStudiesSummary = ({className}: Props) => {
  const {data} = useGetCaseStudyCollectionSuspenseQuery();
  const renderCaseStudies = (item: CaseStudy) =>
    <CaseStudySummaryItem key={item._id} className="CaseStudies__item" item={item}/>;

  return <div className={classnames('CaseStudies', className)} id="projects">
    <h2 className="CaseStudies__title">Selected works</h2>
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