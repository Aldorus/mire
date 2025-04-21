import "./_CaseStudy.scss";
import {useGetCaseStudySuspenseQuery} from "../models/graphql.ts";
import {useParams} from "react-router-dom";
import {isNil} from "lodash";
import BackLink from "../components/BackLink/BackLink.tsx";
import ProgressBar from "../components/ProgressBar/ProgressBar.tsx";

type Params = {
  slug: string;
}
const CaseStudy = () => {
  const {slug} = useParams<Params>()
  const {data} = useGetCaseStudySuspenseQuery({variables: {where: {slug}}});
  const caseStudy = data?.caseStudyCollection?.items[0];
  if (isNil(caseStudy)) {
    return null;
  }
  return <div className="CaseStudy">
    <BackLink/>
    <ProgressBar/>
    <div className="CaseStudy__wrapper">
      <div className="CaseStudy__info">
        <div className="CaseStudy__info__item"><span className="CaseStudy__info__item__label">Time:</span> {caseStudy.date}</div>
      </div>
      <div className="CaseStudy__content">
        <h2>{caseStudy.title}</h2>
      </div>
    </div>
  </div>
}
export default CaseStudy;