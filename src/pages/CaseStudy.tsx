import "./_CaseStudy.scss";
import {useGetCaseStudyIdSuspenseQuery, useGetCaseStudySuspenseQuery} from "../models/graphql.ts";
import {useParams} from "react-router-dom";
import {isNil} from "lodash";
import ProgressBar from "../components/ProgressBar/ProgressBar.tsx";
import {RichText} from "../components/Typography/RichText.tsx";
import Page from "./Page.tsx";
import Section from "./Section.tsx";
import {useEffect} from "react";

type Params = {
  slug: string;
}
const CaseStudy = () => {
  const {slug} = useParams<Params>()
  const {data: caseStudySummary} = useGetCaseStudyIdSuspenseQuery({variables: {where: {slug}}});
  const caseStudyId = caseStudySummary?.caseStudyCollection?.items[0];
  const {data} = useGetCaseStudySuspenseQuery({variables: {id: caseStudyId?.sys.id as string}});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isNil(data?.caseStudy)) {
    return null;
  }
  return <Page className="CaseStudy">
    <ProgressBar/>
    <Section className="CaseStudy__section">
      <div className="CaseStudy__content">
        <h1>{data?.caseStudy.title}</h1>
      </div>
      <div className="CaseStudy__info">
        <div className="CaseStudy__info__item"><span
          className="CaseStudy__info__item__label">Time:</span> {data?.caseStudy.date}</div>
      </div>
      {data?.caseStudy.classified && <div className="CaseStudy__quote">
        This project is part of a broader redesign initiative currently underway at RSI. Due to confidentiality
        agreements, I am not able to share the most recent work completed over the past six months, including certain
        outcomes and upcoming features. This case study focuses on the first major milestone: the redesign of the global
        navigation, which laid the groundwork for the larger revamp.
      </div>}
    </Section>
    <RichText content={data?.caseStudy.completeText} className="CaseStudy__completeText"/>
  </Page>
}
export default CaseStudy;