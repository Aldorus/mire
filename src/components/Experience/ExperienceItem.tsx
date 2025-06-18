import "./_ExperienceItem.scss";
import {HTMLAttributes, useState} from "react";
import {Experience} from "../../models/graphql.ts";
import Button from "../Button/Button.tsx";
import Plus from "../../assets/Plus.svg?react";
import Minus from "../../assets/Minus.svg?react";
import classNames from "classnames";
import {CCollapse} from "@coreui/react";
import {RichText} from "../Typography/RichText.tsx";

interface Props {
  experience: Experience;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
const ExperienceItem = ({experience, className}: Props) => {
  const [expended, setExpended] = useState(false);

  console.log(experience);
  return <div className={classNames([className, "ExperienceItem"])}>
    <div className="ExperienceItem__mainLine" onClick={() => experience.text !== null && setExpended(!expended)}>
      <span>{experience.date}</span>
      <span>{experience.client}</span>
      <span>{experience.position}</span>
      {experience.text !== null && <Button icon={expended ? <Minus/> : <Plus/>} type="text" />}
    </div>
    <CCollapse visible={expended}>
      <RichText content={experience.text} className="ExperienceItem__text"/>
    </CCollapse>
  </div>
}

export default ExperienceItem;