import {TextProvider} from "../queries/TextProvider.ts";
import "./_Homepage.scss";
import {RichText} from "../components/Typography/RichText.tsx";
import SkillList from "../components/Skill/SkillList.tsx";


const Homepage = () => {
  const {content: hi} = TextProvider.get({id: '7L9JeBc7uV9bvwGPnj3V5U'});
  const {content: about, skills} = TextProvider.get({id: '12ANWp777vctus3SbZL6gM'});
  return <div className="Homepage">
    <section className="top">
      <div className="about">
        <RichText content={hi}/>
        <RichText content={about}/>
        <SkillList skills={skills}/>
      </div>

    </section>

  </div>
}
export default Homepage