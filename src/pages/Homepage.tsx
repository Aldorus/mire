/// <reference types="vite-plugin-svgr/client" />
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import CaseStudiesSummary from "../components/CaseStudies/CaseStudiesSummary.tsx";
import {useGetHeaderSuspenseQuery} from "../models/graphql.ts";
import ArrowBottom from "../assets/ArrowBottom.svg?react";
import GetToKnowMe from "../components/GetToKnowMe/GetToKnowMe.tsx";
import classnames from "classnames";


const Homepage = () => {
  const {data} = useGetHeaderSuspenseQuery();
  return <div className="Homepage">
    <section className="Homepage__top Section">
      <p className="Homepage__town">MONTRÉAL | CANADA</p>
      <RichText content={data?.header?.title} className="Homepage__headline"/>
      <ArrowBottom className="Homepage__cta__icon"/>
    </section>
    <div className={classnames(["Homepage__sections", "Homepage__CaseStudies"])}>
      <CaseStudiesSummary className="Section"/>
    </div>
    <div className={classnames(["Homepage__sections", "Homepage__GetToKnowMe"])}>
      <GetToKnowMe/>
    </div>
  </div>
}
export default Homepage