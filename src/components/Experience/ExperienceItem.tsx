import "./_ExperienceItem.scss";
import {HTMLAttributes} from "react";
import {Experience} from "../../models/graphql.ts";
import classNames from "classnames";
import {RichText} from "../Typography/RichText.tsx";
import Text from "../Typography/Text.tsx";

interface Props {
  experience: Experience;
  className?: HTMLAttributes<HTMLDivElement>['className'],
}
const ExperienceItem = ({experience, className}: Props) => {
  return <div className={classNames([className, "ExperienceItem"])}>
    <div className="ExperienceItem__info">
      <Text className="ExperienceItem__date">{experience.date}</Text>
      <h5 className="ExperienceItem__client">{experience.client}</h5>
      <Text className="ExperienceItem__position">{experience.position}</Text>
    </div>
    <div className="ExperienceItem__content">
      <RichText content={experience.text} className="ExperienceItem__text"/>
    </div>
  </div>
}

export default ExperienceItem;