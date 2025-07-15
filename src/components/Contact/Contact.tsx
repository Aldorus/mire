import {RichText} from "../Typography/RichText.tsx";
import {Link} from "../Link/Link.tsx";
import {useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
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

  return <Section className={classnames([className, 'Contact'])} id="contact">
    <div className="Contact__wrapper">
      <RichText content={contactData?.text?.content} className="Contact__text" />
      <div className="Contact__links">
        <Link to="https://assets.ctfassets.net/bvolcybk2xx6/7vsh60Sp5ygHoftxr1Eime/6b5aa61dea4d009267af0b37e5007fdd/bmarche-resume.pdf" target="_blank">
          <Button>
            My resume
          </Button>
        </Link>
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
      <div className="Contact__credits">Designing stuff since 2011@<br/>2025 Barbara Marche with ❤️ & 🍵 in Montréal, Canada</div>
    </div>

  </Section>
}

export default Contact;