import "./_CaseStudy.scss";
import {useGetCaseStudySuspenseQuery} from "../models/graphql.ts";
import {useParams} from "react-router-dom";
import {isNil} from "lodash";
import ProgressBar from "../components/ProgressBar/ProgressBar.tsx";
import {RichText} from "../components/Typography/RichText.tsx";

type Params = {
  slug: string;
}
const CaseStudy = () => {
  const {slug} = useParams<Params>()
  const {data} = useGetCaseStudySuspenseQuery({variables: {where: {slug}}});
  const caseStudy = data?.caseStudyCollection?.items[0];
  console.log("caseStudy",caseStudy)
  if (isNil(caseStudy)) {
    return null;
  }
  return <div className="CaseStudy">
    <ProgressBar/>
    <div className="CaseStudy__wrapper">
      <div className="CaseStudy__content">
        <h1>{caseStudy.title}</h1>
      </div>
      <div className="CaseStudy__info">
        <div className="CaseStudy__info__item"><span
          className="CaseStudy__info__item__label">Time:</span> {caseStudy.date}</div>
      </div>
      {caseStudy.classified && <div>
        This project is part of a broader redesign initiative currently underway at RSI. Due to confidentiality
        agreements, I am not able to share the most recent work completed over the past six months, including certain
        outcomes and upcoming features. This case study focuses on the first major milestone: the redesign of the global
        navigation, which laid the groundwork for the larger revamp.
      </div>}
      <RichText content={caseStudy.completeText}/>
    </div>
  </div>
}
export default CaseStudy;