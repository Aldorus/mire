import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import Projects from "../components/Projects/Projects.tsx";
import CaseStudies from "../components/CaseStudies/CaseStudies.tsx";
import {useGetHeaderSuspenseQuery} from "../models/graphql.ts";
import Contact from "../components/Contact/Contact.tsx";
import ArrowBottom from "../assets/ArrowBottom.svg";


const Homepage = () => {
  const {data} = useGetHeaderSuspenseQuery();
  return <div className="Homepage">
    <section className="Homepage__top">
      <div className="about">
        <RichText content={data?.header?.title?.json}/>
        <div className="Homepage__info">{data?.header?.info?.map(info => <div key={info}>{info}</div>)}</div>
      </div>
      <h3 className="Homepage__title">
        <img src={ArrowBottom}/>
        <span className="Homepage__title__icon">Selected work</span>
      </h3>
    </section>
    <CaseStudies/>
    <Projects className="Homepage__projects"/>
    <Contact className="Homepage__contact"/>
  </div>
}
export default Homepage