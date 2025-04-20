import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import SkillList from "../components/Skill/SkillList.tsx";
import Projects from "../components/Projects/Projects.tsx";
import CaseStudies from "../components/CaseStudies/CaseStudies.tsx";
import {useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {Link} from "../components/Link/Link.tsx";


const Homepage = () => {
  const {data: aboutData}= useGetTextQuerySuspenseQuery({variables: {id:'12ANWp777vctus3SbZL6gM'}});
  const {data: contactData}= useGetTextQuerySuspenseQuery({variables: {id:'3vxhVPirdQQnqb2wFEg68F'}});
  return <div className="Homepage">
    <section className="Homepage__top">
      <div className="about">
        <h2 className="Homepage__hi">👋 Hi! I’m Barbara Marche,</h2>
        <RichText content={aboutData?.text?.content?.json}/>
        <SkillList skills={aboutData?.text?.skillsCollection?.items ?? []}/>
      </div>
    </section>
    <CaseStudies/>
    <Projects/>
    <section className="Homepage__contact" id="contact">
      <RichText content={contactData?.text?.content?.json}/>
      <div className="Homepage__contact__links">
        <Link to="mailto:barbara.mrch@gmail.com">Email</Link>
        <Link to="https://www.linkedin.com/in/barbaramarche/" target="_blank">Linkedin</Link>
        <Link to="https://www.behance.net/barbara-marche" target="_blank">Behance</Link>
      </div>
    </section>
  </div>
}
export default Homepage