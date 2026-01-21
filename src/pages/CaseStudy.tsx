import "./_CaseStudy.scss";
import {useGetCaseStudyIdSuspenseQuery, useGetCaseStudySuspenseQuery} from "../models/graphql.ts";
import {useParams} from "react-router-dom";
import Warning from "../assets/Warning.svg?react";
import {isNil} from "lodash";
import ProgressBar from "../components/ProgressBar/ProgressBar.tsx";
import {RichText} from "../components/Typography/RichText.tsx";
import Page from "./Page.tsx";
import Section from "./Section.tsx";
import BlockReveal from "../components/BlockReveal/BlockReveal.tsx";
import {Link} from "../components/Link/Link.tsx";
import ArrowLeft from "../assets/ArrowLeft.svg?react";

type Params = {
  slug: string;
}
const CaseStudy = () => {
  const {slug} = useParams<Params>()
  const {data: caseStudySummary} = useGetCaseStudyIdSuspenseQuery({variables: {where: {slug}}});
  const caseStudyId = caseStudySummary?.caseStudyCollection?.items[0];
  const {data} = useGetCaseStudySuspenseQuery({variables: {id: caseStudyId?.sys.id as string}});

  if (isNil(data?.caseStudy)) {
    return null;
  }
  return <Page className="CaseStudy">
    <ProgressBar/>
    <BlockReveal>
      <Section className="CaseStudy__section CaseStudy__header">
        <div>
          <Link to="/" button icon={<ArrowLeft/>} reverseIcon>Back</Link>
          <h1 className="CaseStudy__title">{data?.caseStudy.title}</h1>
          <h2 className="CaseStudy__subtitle">{data?.caseStudy.subtitle}</h2>
          <div className="CaseStudy__wrapper">
            <div className="CaseStudy__info">
              <div className="CaseStudy__info__item">
                <span className="CaseStudy__info__item__label">Client:</span>&nbsp;
                <span className="CaseStudy__info__item__value">{data?.caseStudy.client}</span>
              </div>
              <div className="CaseStudy__info__item">
                <span className="CaseStudy__info__item__label">Category:</span>&nbsp;
                <span className="CaseStudy__info__item__value">{data?.caseStudy.category}</span>
              </div>
              <div className="CaseStudy__info__item">
                <span className="CaseStudy__info__item__label">Role:</span>&nbsp;
                <span className="CaseStudy__info__item__value">{data?.caseStudy.role}</span>
              </div>
              <div className="CaseStudy__info__item">
                <span className="CaseStudy__info__item__label">Time:</span>&nbsp;
                <span className="CaseStudy__info__item__value">{data?.caseStudy.date}</span>
              </div>
              <div className="CaseStudy__info__item">
                <span className="CaseStudy__info__item__label">Team:</span>&nbsp;
                <span className="CaseStudy__info__item__value">{data?.caseStudy.team}</span>
              </div>
            </div>
            <div className="CaseStudy__overview">
              <h4 className="CaseStudy__overview__title">Project overview</h4>
              <RichText className="CaseStudy__overview__text" content={data?.caseStudy.overview} />
            </div>
          </div>
          {data?.caseStudy.classified && <div className="CaseStudy__quote">
          <span className="CaseStudy__quote__wrapper">
            <Warning className="CaseStudy__quote__warning"/>
            <strong className="CaseStudy__quote__title">Confidentiality Notice</strong>
          </span>
            <div className="CaseStudy__quote__text">
              <p>
                This project is part of a broader redesign initiative currently underway at RSI. Due to confidentiality
                agreements, I am not able to share the most recent work completed over the past six months, including certain
                outcomes and upcoming features. This case study focuses on the first major milestone: the redesign of the global
                navigation, which laid the groundwork for the larger revamp.
              </p>
            </div>
          </div>}
        </div>
      </Section>
    </BlockReveal>
    <BlockReveal>
      <Section noPadding>
        <div>
          <RichText content={data?.caseStudy.completeText} className="CaseStudy__completeText"/>
        </div>
      </Section>
    </BlockReveal>
  </Page>
}
export default CaseStudy;