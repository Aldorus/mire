/// <reference types="vite-plugin-svgr/client" />
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import CaseStudiesSummary from "../components/CaseStudies/CaseStudiesSummary.tsx";
import {useGetHeaderSuspenseQuery} from "../models/graphql.ts";
import ArrowBottom from "../assets/ArrowBottom.svg?react";


const Homepage = () => {
  const {data} = useGetHeaderSuspenseQuery();
  return <div className="Homepage">
    <section className="Homepage__top Section">
      <p className="Homepage__town">MONTRÉAL | CANADA</p>
      <RichText content={data?.header?.title} className="Homepage__headline"/>
      <ArrowBottom className="Homepage__cta__icon"/>
    </section>
    <div className="Homepage__sections"><CaseStudiesSummary className="Section"/></div>
  </div>
}
export default Homepage