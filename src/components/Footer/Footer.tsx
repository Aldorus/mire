import {Link} from "../Link/Link.tsx";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import "./_Footer.scss";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import Section from "../../pages/Section.tsx";
import {RichText} from "../Typography/RichText.tsx";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const Footer = ({className}: Props) => {
  const {data: resumeData} = useGetAssetSuspenseQuery({variables: {id: '7vsh60Sp5ygHoftxr1Eime'}});
  const {data: contactData} = useGetTextQuerySuspenseQuery({variables: {id: '3vxhVPirdQQnqb2wFEg68F'}});

  return <Section className={classnames([className, 'Footer'])} id="footer" centered={false} noPadding>
    <div className="Footer__links">
      {resumeData?.asset?.url && <Link to={resumeData.asset.url} target="_blank" icon={<ExternalLink/>} button>
        Download my resume
      </Link>}
      <Link to="https://www.linkedin.com/in/barbaramarche/" target="_blank" icon={<ExternalLink/>} button>
        Linkedin
      </Link>
      <Link to="https://www.behance.net/barbara-marche" target="_blank" icon={<ExternalLink/>} button>
        Behance
      </Link>
    </div>
    <RichText content={contactData?.text?.content} className="Footer__credits"/>
  </Section>
}

export default Footer;