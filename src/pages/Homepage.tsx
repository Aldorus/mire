/// <reference types="vite-plugin-svgr/client" />
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import CaseStudiesSummary from "../components/CaseStudies/CaseStudiesSummary.tsx";
import {useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import Page from "./Page.tsx";
import Section from "./Section.tsx";
import RoundedBorder from "../components/Sparkle/RoundedBorder.tsx";
import {useWindowScroll} from "react-use";
import About from "./About.tsx";
import ExperienceList from "../components/Experience/ExperienceList.tsx";
import SkillList from "../components/Skills/SkillList.tsx";
import BlockReveal from "../components/BlockReveal/BlockReveal.tsx";

const Homepage = () => {
  const {data} = useGetTextQuerySuspenseQuery({variables: {id: "3j5F4HgCVPo7IRhuwuxNrx"}});
  const {y} = useWindowScroll();
  const opacity = 1 - (y / (window.innerHeight / 2));

  return <Page className="Homepage">
    <Section fullHeight sticky className="Homepage__top" centered={false}>
      <div style={{opacity}} >
        <div className="Homepage__headline">
          <RichText content={data?.text?.content} className="Homepage__headline__text"/>
        </div>
      </div>
    </Section>
    <RoundedBorder/>
    <Section className="Homepage__Section" centered={false}>
      <BlockReveal><CaseStudiesSummary/></BlockReveal>
      <BlockReveal>
        <About className="Homepage__About"/>
        <SkillList className="Homepage__Skills"/>
      </BlockReveal>
      <BlockReveal>
        <ExperienceList className="Homepage__Experiences"/>
      </BlockReveal>
    </Section>
  </Page>
}
export default Homepage