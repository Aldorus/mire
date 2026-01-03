import {Link} from "../Link/Link.tsx";
import {useGetAssetSuspenseQuery} from "../../models/graphql.ts";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import "./_Footer.scss";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import Section from "../../pages/Section.tsx";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const Footer = ({className}: Props) => {
  const {data: resumeData} = useGetAssetSuspenseQuery({variables: {id: '7vsh60Sp5ygHoftxr1Eime'}});

  return <Section className={classnames([className, 'Footer'])} id="footer" noPadding>
    <div className="Footer__links">
      {resumeData?.asset?.url && <Link to={resumeData.asset.url} target="_blank" icon={<ExternalLink/>}>
        Download my resume
      </Link>}
      <Link to="https://www.linkedin.com/in/barbaramarche/" target="_blank" icon={<ExternalLink/>}>
        Linkedin
      </Link>
      <Link to="https://www.behance.net/barbara-marche" target="_blank" icon={<ExternalLink/>}>
        Behance
      </Link>
    </div>
    <p className="Footer__credits">Designing meaningful experiences since 2011<br/>@ 2025 Barbara Marche with ❤️ & 🍵 in Montréal, Canada</p>
  </Section>
}

export default Footer;