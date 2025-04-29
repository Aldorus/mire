import "./_About.scss";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {RichText} from "../components/Typography/RichText.tsx";
import ExperienceList from "../components/Experience/List.tsx";
import TagList from "../components/Tags/TagList.tsx";

const About = () => {
  const {data: dataAsset} = useGetAssetSuspenseQuery({variables: {id: "474fXASEikS8R3wRpn6H6E"}});
  const {data: dataAbout} = useGetTextQuerySuspenseQuery({variables: {id: '12ANWp777vctus3SbZL6gM'}});
  const {data: dataSkills} = useGetTextQuerySuspenseQuery({variables: {id: '6ueoiDKGmH3GahQ878uPRZ'}});
  const {data: dataSoftware} = useGetTextQuerySuspenseQuery({variables: {id: '4Km8JbyoI3bXtGYgiTd5fj'}});
  return <div className="About">
    <div className="About__wrapper">
      <div className="About__wrapper__portrait">
        <img src={dataAsset?.asset?.url ?? ''}/>
      </div>
      <div className="About__content">
        <RichText content={dataAbout?.text?.content}/>
        <div>
          <h2>Experience</h2>
          <ExperienceList/>
        </div>
        <div>
          <RichText content={dataSkills?.text?.content}/>
          <TagList tags={dataSkills?.text?.tags}/>
        </div>
        <div>
          <RichText content={dataSoftware?.text?.content}/>
          <TagList tags={dataSoftware?.text?.tags}/></div>
      </div>
    </div>
  </div>
}
export default About;