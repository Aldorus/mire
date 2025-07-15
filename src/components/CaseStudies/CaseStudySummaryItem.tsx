import {flow} from "lodash/fp";
import {Link} from "../Link/Link.tsx";
import {useNavigate} from "react-router";
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {HTMLAttributes, useEffect, useRef, useState} from "react";
import classnames from "classnames";
import "./_CaseStudySummaryItem.scss"

type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;

type Props = {
  item: CaseStudy;
  className?: HTMLAttributes<HTMLDivElement>['className'],
};

const CaseStudySummaryItem = ({item, className}: Props) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if(hover) {
      ref.current?.play();
    } else {
      if(ref.current){
      ref.current?.pause();
      ref.current.currentTime = 0;
      }
    }

  }, [hover]);

  return <div key={item._id} className={classnames(["CaseStudiesItem", className])} onClick={flow(
    (e) => e.stopPropagation(),
    ()=> navigate(`/case/${item.slug}`),
  )} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <div className="asset">
      {item.assets?.contentType?.includes("video") ? <video loop muted ref={ref}>
        <source src={item.assets?.url ?? ''} type="video/mp4"/>
      </video> : <img src={item.assets?.url ?? ''}/>}
    </div>
    <Link to={`/case/${item.slug}`}><div className="description">
      <span className="title">{item.title}</span>
      <span className="subtitle">{item.subtitle}</span>
    </div></Link>
  </div>
}

export default CaseStudySummaryItem