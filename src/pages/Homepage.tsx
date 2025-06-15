/// <reference types="vite-plugin-svgr/client" />
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import CaseStudiesSummary from "../components/CaseStudies/CaseStudiesSummary.tsx";
import {useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import ArrowBottom from "../assets/ArrowBottom.svg?react";
import GetToKnowMe from "../components/GetToKnowMe/GetToKnowMe.tsx";
import classnames from "classnames";
import Sun from "../assets/Sun.svg?react";


const Homepage = () => {
  const {data} = useGetTextQuerySuspenseQuery({variables: {id: "3j5F4HgCVPo7IRhuwuxNrx"}});
  return <div className="Homepage">
    <section className="Homepage__top Section">
      <p className="Homepage__town">MONTRÉAL | CANADA</p>
      <div className="Homepage__headline">
        <div className="Homepage__headline__title">
          WEBSITES <span className="Homepage__headline__title__alternativeFont">&</span><br/>
          MOBILE APPS<br/>
          that <span className="Homepage__headline__title__alternativeFont Homepage__headline__title__alternativeColor">engage</span>&nbsp;<Sun className="Homepage__headline__title__icon"/>
          </div>
          <RichText content={data?.text?.content} className="Homepage__headline__text"/>
      </div>
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