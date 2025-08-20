import "./_ExperienceItem.scss";
import {HTMLAttributes, useState} from "react";
import {Experience} from "../../models/graphql.ts";
import Button from "../Button/Button.tsx";
import Plus from "../../assets/Plus.svg?react";
import Minus from "../../assets/Minus.svg?react";
import classNames from "classnames";
import {CCollapse} from "@coreui/react";
import {RichText} from "../Typography/RichText.tsx";
import Text from "../Typography/Text.tsx";

interface Props {
  experience: Experience;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
const ExperienceItem = ({experience, className}: Props) => {
  const [expended, setExpended] = useState(false);

  return <div className={classNames([className, "ExperienceItem"])}>
    <div className="ExperienceItem__mainLine" onClick={() => experience.text !== null && setExpended(!expended)}>
      <Text className="ExperienceItem__mainLine__date">{experience.date}</Text>
      <Text className="ExperienceItem__mainLine__link">{experience.client}</Text>
      <Text className="ExperienceItem__mainLine__position">{experience.position}</Text>
      <Button icon={expended ? <Minus/> : <Plus/>} className={classNames([experience.text === null && "ExperienceItem--disabled"])} type="text" />
    </div>
    <CCollapse visible={expended} className="ExperienceItem__content">
      <RichText content={experience.text} className="ExperienceItem__text"/>
    </CCollapse>
  </div>
}

export default ExperienceItem;