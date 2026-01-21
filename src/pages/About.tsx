import "./_About.scss";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {RichText} from "../components/Typography/RichText.tsx";
import {HTMLAttributes} from "react";
import classNames from "classnames";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
const About = ({className}: Props) => {
  const {data: dataAbout} = useGetTextQuerySuspenseQuery({variables: {id: '12ANWp777vctus3SbZL6gM'}});
  return <div className={classNames(['About', className])}>
    <h4>About me</h4>
    <RichText content={dataAbout?.text?.content} className="About__text"/>
  </div>
}
export default About;