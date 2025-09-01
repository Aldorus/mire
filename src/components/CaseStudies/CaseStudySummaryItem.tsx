import {flow} from "lodash/fp";
import {Link} from "../Link/Link.tsx";
import {useNavigate} from "react-router";
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {CSSProperties, HTMLAttributes, useEffect, useRef, useState} from "react";
import classnames from "classnames";
import "./_CaseStudySummaryItem.scss"
import {isVideo} from "../../lib/asset.ts";

type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;

type Props = {
  item: CaseStudy;
  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: CSSProperties,
};

const CaseStudySummaryItem = ({item, className, style}: Props) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if(ref.current){
      ref.current?.pause();
      ref.current.currentTime = 0;
    }
  }, []);

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

  return <div
    key={item._id}
    className={classnames(["CaseStudiesItem", className])}
    style={style}
    onClick={flow(
      (e) => e.stopPropagation(),
      ()=> navigate(`/case/${item.slug}`),
    )}
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
    <div className="asset">
      {isVideo(item.assets) ? <video loop muted ref={ref} playsInline autoPlay>
        <source src={item.assets?.url ?? ''} type="video/mp4"/>
      </video> : <img src={item.assets?.url ?? ''}/>}
    </div>
    <Link to={`/case/${item.slug}`} className="CaseStudiesItem__link"><div className="description">
      <span className="title">{item.title}</span>
      <span className="subtitle">{item.subtitle}</span>
    </div></Link>
  </div>
}

export default CaseStudySummaryItem