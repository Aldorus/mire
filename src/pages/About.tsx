import "./_About.scss";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {RichText} from "../components/Typography/RichText.tsx";
import ExperienceList from "../components/Experience/ExperienceList.tsx";
import Page from "./Page.tsx";
import Section from "./Section.tsx";
import {useEffect} from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "instant"});
  }, []);
  const {data: dataAsset} = useGetAssetSuspenseQuery({variables: {id: "474fXASEikS8R3wRpn6H6E"}});
  const {data: dataAbout} = useGetTextQuerySuspenseQuery({variables: {id: '12ANWp777vctus3SbZL6gM'}});
  return <Page className="About">
    <Section className="About__top">
      <img src={dataAsset?.asset?.url ?? ''}/>
      <RichText content={dataAbout?.text?.content} className="About__top__text"/>
    </Section>
    <Section className="About__content">
      <h2>Experience</h2>
      <ExperienceList/>
    </Section>
  </Page>
}
export default About;