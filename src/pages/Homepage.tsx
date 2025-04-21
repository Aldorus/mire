import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import Projects from "../components/Projects/Projects.tsx";
import CaseStudies from "../components/CaseStudies/CaseStudies.tsx";
import {useGetHeaderSuspenseQuery} from "../models/graphql.ts";
import Contact from "../components/Contact/Contact.tsx";


const Homepage = () => {
  const {data} = useGetHeaderSuspenseQuery();
  console.log("HOme")
  return <div className="Homepage">
    <section className="Homepage__top">
      <div className="about">
        <h2 className="Homepage__hi">👋 Hi! I’m Barbara Marche,</h2>
        <RichText content={data?.header?.title?.json}/>
        <div className="Homepage__info">{data?.header?.info?.map(info => <div key={info}>{info}</div>)}</div>
      </div>
    </section>
    <CaseStudies/>
    <Projects className="Homepage__projects"/>
    <Contact className="Homepage__contact"/>
  </div>
}
export default Homepage