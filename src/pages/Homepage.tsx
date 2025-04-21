/// <reference types="vite-plugin-svgr/client" />
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import Projects from "../components/Projects/Projects.tsx";
import CaseStudies from "../components/CaseStudies/CaseStudies.tsx";
import {useGetHeaderSuspenseQuery} from "../models/graphql.ts";
import ArrowBottom from "../assets/ArrowBottom.svg?react";


const Homepage = () => {
  const {data} = useGetHeaderSuspenseQuery();
  return <div className="Homepage">
    <section className="Homepage__top">
      <div className="about">
        <RichText content={data?.header?.title?.json}/>
        <div className="Homepage__info">{data?.header?.info?.map(info => <div key={info}>{info}</div>)}</div>
      </div>
      <h3 className="Homepage__cta">
        <ArrowBottom className="Homepage__cta__icon"/>
        <span className="Homepage__cta__title">Selected work</span>
      </h3>
    </section>
    <CaseStudies/>
    <Projects className="Homepage__projects"/>
  </div>
}
export default Homepage