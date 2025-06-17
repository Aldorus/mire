import "./_About.scss";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {RichText} from "../components/Typography/RichText.tsx";
import ExperienceList from "../components/Experience/List.tsx";

const About = () => {
  const {data: dataAsset} = useGetAssetSuspenseQuery({variables: {id: "474fXASEikS8R3wRpn6H6E"}});
  const {data: dataAbout} = useGetTextQuerySuspenseQuery({variables: {id: '12ANWp777vctus3SbZL6gM'}});
  return <div className="About">
    <div className="About__top">
      <div className="About__top__wrapper">
        <img src={dataAsset?.asset?.url ?? ''}/>
        <RichText content={dataAbout?.text?.content} className="About__top__wrapper__text"/>
      </div>
      <div className="About__content">
        <div className="About__content__wrapper">
          <h2>Experience</h2>
          <ExperienceList/>
        </div>
      </div>
    </div>
  </div>
}
export default About;