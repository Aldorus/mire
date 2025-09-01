import {RichText} from "../Typography/RichText.tsx";
import {Link} from "../Link/Link.tsx";
import {useGetAssetSuspenseQuery, useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import "./_Contact.scss";
import Button from "../Button/Button.tsx";
import ExternalLink from "../../assets/ExternalLink.svg?react";
import Section from "../../pages/Section.tsx";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const Contact = ({className}: Props) => {
  const {data: contactData} = useGetTextQuerySuspenseQuery({variables: {id: '3vxhVPirdQQnqb2wFEg68F'}});
  const {data: resumeData} = useGetAssetSuspenseQuery({variables: {id: '7vsh60Sp5ygHoftxr1Eime'}});

  return <Section className={classnames([className, 'Contact'])} id="contact">
    <div className="Contact__wrapper">
      <RichText content={contactData?.text?.content} className="Contact__text" />
      <div className="Contact__links">
        {resumeData?.asset?.url && <Link to={resumeData.asset.url} target="_blank">
          <Button>
            My resume
          </Button>
        </Link>}
        <Link to="https://www.linkedin.com/in/barbaramarche/" target="_blank">
          <Button icon={<ExternalLink/>}>
            Linkedin
          </Button>
        </Link>
        <Link to="https://www.behance.net/barbara-marche" target="_blank">
          <Button icon={<ExternalLink/>}>
            Behance
          </Button>
        </Link>
      </div>
      <p className="Contact__credits">Designing stuff since 2011<br/>@ 2025 Barbara Marche with ❤️ & 🍵 in Montréal, Canada</p>
    </div>

  </Section>
}

export default Contact;