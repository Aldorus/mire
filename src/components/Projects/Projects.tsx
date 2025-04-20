import "./_Projects.scss";
import {useGetProjectCollectionSuspenseQuery, useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map} from "lodash/fp";
import {RichText} from "../Typography/RichText.tsx";
import SkillList from "../Skill/SkillList.tsx";
import Divider from "../Divider/Divider.tsx";

type Project = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetProjectCollectionSuspenseQuery>['data']>['projectCollection']>['items'][number]>;
const Projects = () => {
  const {data: projectCollectionData} = useGetProjectCollectionSuspenseQuery();
  const {data: projectTextData} = useGetTextQuerySuspenseQuery({variables: {id: "2uA3U2hLkUfSU2d352XNlc"}});

  const renderProject = (project: Project) => <div key={project._id} className="Projects__item">
    <img className="Projects__asset" src={project.asset?.url ?? ''}/>
  </div>;

  return <div className="Projects">
    <RichText content={projectTextData?.text?.content?.json}/>
    <Divider/>
    <SkillList skills={projectTextData?.text?.skillsCollection?.items} className="Projects_skills"/>
    <div
      className="Projects__list">{flow(compact, map(renderProject))(projectCollectionData?.projectCollection?.items)}</div>
    <Divider/>
  </div>
}
export default Projects;