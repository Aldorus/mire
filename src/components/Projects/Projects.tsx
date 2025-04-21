import "./_Projects.scss";
import {useGetProjectCollectionSuspenseQuery, useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {compact, flow, map} from "lodash/fp";
import {RichText} from "../Typography/RichText.tsx";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import TagList from "../Tags/TagList.tsx";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}

type Project = NonNullable<NonNullable<NonNullable<ReturnType<typeof useGetProjectCollectionSuspenseQuery>['data']>['projectCollection']>['items'][number]>;
const Projects = ({className}: Props) => {
  const {data: projectCollectionData} = useGetProjectCollectionSuspenseQuery();
  const {data: projectTextData} = useGetTextQuerySuspenseQuery({variables: {id: "2uA3U2hLkUfSU2d352XNlc"}});

  const renderProject = (project: Project) => <div key={project._id} className="Projects__item">
    <img className="Projects__asset" src={project.asset?.url ?? ''}/>
  </div>;

  return <div className={classnames([className, "Projects"])}>
    <div
      className="Projects__list">{flow(compact, map(renderProject))(projectCollectionData?.projectCollection?.items)}</div>
    <RichText content={projectTextData?.text?.content?.json} className="Project__title"/>
    <TagList tags={projectTextData?.text?.tags} className="Projects_skills"/>
  </div>
}
export default Projects;