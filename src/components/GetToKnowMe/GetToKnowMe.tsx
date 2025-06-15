import {HTMLAttributes} from "react";
import {useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {RichText} from "../Typography/RichText.tsx";
import Button from "../Button/Button.tsx";
import classnames from "classnames";
import ArrowLeft from "../../assets/ArrowLeft.svg?react";
import "./_GetToKnowMe.scss"
import {Link} from "react-router-dom";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'],
}

const GetToKnowMe = ({className}: Props) => {
  const {data: knowMeData} = useGetTextQuerySuspenseQuery({variables: {id: '2uA3U2hLkUfSU2d352XNlc'}});
  return <div className={classnames([className, "GetToKnowMe"])}>
    <div className="GetToKnowMe__centered">
      <RichText content={knowMeData?.text?.content}/>
      <Link to="/about" className="GetToKnowMe__link"><Button icon={<ArrowLeft/>}>About me</Button></Link>
    </div>
  </div>
}
export default GetToKnowMe;