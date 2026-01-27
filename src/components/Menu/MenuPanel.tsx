import classnames from "classnames";
import {Link} from "../Link/Link.tsx";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import "./_MenuPanel.scss";
import { useGetAssetSuspenseQuery } from "../../models/graphql.ts";

interface Props {
  isMenuOpen: boolean;
  onClose: () => void;
}
export const MenuPanel = ({isMenuOpen, onClose}: Props) => {
    const {data: resumeData} = useGetAssetSuspenseQuery({variables: {id: '7vsh60Sp5ygHoftxr1Eime'}});
  
  return <div className={classnames(['MenuPanel', isMenuOpen && 'MenuPanel--open']) }>
    <ol>
      <li>
        <Link
          to='/#projects'
          button
          onClick={onClose}>
          Projects
        </Link>
      </li>
      {resumeData?.asset?.url && <li>
        <Link
          to={resumeData.asset.url}
          onClick={onClose}
          target="_blank"
          button
          icon={<ExternalLink/>}>
          Resume
        </Link>
      </li>}
      <li>
        <Link
          to="https://www.linkedin.com/in/barbaramarche/"
          onClick={onClose}
          target="_blank"
          button
          icon={<ExternalLink/>}>
          LinkedIn
        </Link>
      </li>
    </ol>
  </div>;
}