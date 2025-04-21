import "./_About.scss";
import {useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {RichText} from "../components/Typography/RichText.tsx";
import Divider from "../components/Divider/Divider.tsx";
import ExperienceList from "../components/Experience/List.tsx";
import TagList from "../components/Tags/TagList.tsx";
import Contact from "../components/Contact/Contact.tsx";
import BackLink from "../components/BackLink/BackLink.tsx";

const About = () => {
  const {data: dataAbout} = useGetTextQuerySuspenseQuery({variables: {id: '12ANWp777vctus3SbZL6gM'}});
  const {data: dataSkills} = useGetTextQuerySuspenseQuery({variables: {id: '6ueoiDKGmH3GahQ878uPRZ'}});
  const {data: dataSoftware} = useGetTextQuerySuspenseQuery({variables: {id: '4Km8JbyoI3bXtGYgiTd5fj'}});
  return <div className="About">
    <BackLink/>
    <div className="About__wrapper">
      <div className="About__wrapper__portrait">
        <img
          src="https://images.ctfassets.net/bvolcybk2xx6/3jtP9SCAkUwPGxkp6nj5L0/0fe247e68715b9dd77c652b5be6cf538/img__1_.png?h=500"/>
      </div>
      <div className="About__content">
        <h2>About</h2>
        <RichText content={dataAbout?.text?.content?.json}/>
        <Divider className="About__content__divider"/>
        <h2>Experience</h2>
        <ExperienceList/>
        <Divider className="About__content__divider"/>
        <RichText content={dataSkills?.text?.content?.json}/>
        <TagList tags={dataSkills?.text?.tags} className="About__content__tags"/>
        <Divider className="About__content__divider"/>
        <RichText content={dataSoftware?.text?.content?.json}/>
        <TagList tags={dataSoftware?.text?.tags}/>
      </div>
    </div>
    <Divider className="About__divider"/>
    <Contact/>
  </div>
}
export default About;