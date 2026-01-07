import {flow} from "lodash/fp";
import {Link} from "../Link/Link.tsx";
import {useNavigate} from "react-router";
import {useGetCaseStudyCollectionSuspenseQuery} from "../../models/graphql.ts";
import {CSSProperties, HTMLAttributes, useState} from "react";
import classnames from "classnames";
import "./_CaseStudySummaryItem.scss"
import {Media} from "../Media/Media.tsx";

type CaseStudy = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>['data']>['caseStudyCollection']>['items'][number]>;

type Props = {
  item: CaseStudy;
  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: CSSProperties,
};

const CaseStudySummaryItem = ({item, className, style}: Props) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

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
    <Media asset={item.assets} play={hover} className="CaseStudiesItem__asset"/>
    <Link to={`/case/${item.slug}`} className="CaseStudiesItem__link" button>
      <div className="CaseStudiesItem__description">
        <h5>{item.title}</h5>
        <span className="subtitle">{item.subtitle}</span>
      </div>
    </Link>
  </div>
}

export default CaseStudySummaryItem