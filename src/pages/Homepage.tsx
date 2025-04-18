import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import SkillList from "../components/Skill/SkillList.tsx";
import Projects from "../components/Projects/Projects.tsx";
import CaseStudies from "../components/CaseStudies/CaseStudies.tsx";
import {useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {Link} from "../components/Link/Link.tsx";


const Homepage = () => {
  const {data: hiData}= useGetTextQuerySuspenseQuery({variables: {id:'7L9JeBc7uV9bvwGPnj3V5U'}});
  const {data: aboutData}= useGetTextQuerySuspenseQuery({variables: {id:'12ANWp777vctus3SbZL6gM'}});
  const {data: contactData}= useGetTextQuerySuspenseQuery({variables: {id:'3vxhVPirdQQnqb2wFEg68F'}});
  return <div className="Homepage">
    <section className="Homepage__top">
      <div className="about">
        <RichText content={hiData?.text?.content?.json}/>
        <RichText content={aboutData?.text?.content?.json}/>
        <SkillList skills={aboutData?.text?.skillsCollection?.items ?? []}/>
      </div>
    </section>
    <CaseStudies/>
    <Projects/>
    <section className="contact" id="contact">
      <RichText content={contactData?.text?.content?.json}/>
      <div className="links">
        <Link to="">Email</Link>
        <Link to="">Linkedin</Link>
        <Link to="">Behance</Link>
        <Link to="">Resume</Link>
      </div>
    </section>
  </div>
}
export default Homepage