/// <reference types="vite-plugin-svgr/client" />
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import CaseStudiesSummary from "../components/CaseStudies/CaseStudiesSummary.tsx";
import {useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import ArrowBottom from "../assets/ArrowBottom.svg?react";
import Sun from "../assets/Sun.svg?react";
import Page from "./Page.tsx";
import Section from "./Section.tsx";
import RoundedBorder from "../components/Sparkle/RoundedBorder.tsx";
import {useWindowScroll} from "react-use";
import IconZone from "../components/MovableIcon/IconZone.tsx";
import About from "./About.tsx";
import ExperienceList from "../components/Experience/ExperienceList.tsx";
import SkillList from "../components/Skills/SkillList.tsx";
import classNames from "classnames";

const Homepage = () => {
  const {data} = useGetTextQuerySuspenseQuery({variables: {id: "3j5F4HgCVPo7IRhuwuxNrx"}});
  const {y} = useWindowScroll();
  const opacity = 1 - (y / (window.innerHeight / 2));

  return <Page className="Homepage">
    <Section fullHeight sticky style={{opacity}}>
      <IconZone/>
      <div className="Homepage__top">
        <p className="Homepage__town">MONTRÉAL | CANADA</p>
        <div className="Homepage__headline">
          <div className="Homepage__headline__title">
            WEBSITES <span className="Homepage__headline__title__alternativeFont">&</span><br/>
            APPS THAT<br/>
            <span className="Homepage__headline__title__alternativeFont Homepage__headline__title__alternativeColor">engage</span>&nbsp;<Sun className="Homepage__headline__title__icon"/>
            </div>
            <RichText content={data?.text?.content} className="Homepage__headline__text"/>
        </div>
        <ArrowBottom className="Homepage__cta__icon"/>
      </div>
    </Section>
    <RoundedBorder/>
    <Section className={classNames(["Homepage__Section", "Homepage__CaseStudies"])} noPadding>
      <CaseStudiesSummary/>
      <About className="Homepage__About"/>
      <SkillList className="Homepage__Skills"/>
      <ExperienceList className="Homepage__Experiences"/>
    </Section>
  </Page>
}
export default Homepage