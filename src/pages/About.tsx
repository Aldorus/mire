import "./_About.scss";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../models/graphql.ts";
import {RichText} from "../components/Typography/RichText.tsx";
import {HTMLAttributes} from "react";
import classNames from "classnames";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
const About = ({className}: Props) => {
  const {data: dataAsset} = useGetAssetSuspenseQuery({variables: {id: "474fXASEikS8R3wRpn6H6E"}});
  const {data: dataAbout} = useGetTextQuerySuspenseQuery({variables: {id: '12ANWp777vctus3SbZL6gM'}});
  return <div className={classNames(['About', className])}>
    <img src={dataAsset?.asset?.url ?? ''} className="About__image"/>
    <h2>ABOUT ME</h2>
    <RichText content={dataAbout?.text?.content} className="About__text"/>
  </div>
}
export default About;