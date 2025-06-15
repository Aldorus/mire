import {RichText} from "../Typography/RichText.tsx";
import {Link} from "../Link/Link.tsx";
import {useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import "./_Contact.scss";
import Button from "../Button/Button.tsx";
import ExternalLink from "../../assets/ExternalLink.svg?react";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const Contact = ({className}: Props) => {
  const {data: contactData} = useGetTextQuerySuspenseQuery({variables: {id: '3vxhVPirdQQnqb2wFEg68F'}});

  return <section className={classnames([className, 'Contact'])} id="contact">
    <div className="Contact__wrapper">
      <RichText content={contactData?.text?.content} className="Contact__text" />
      <div className="Contact__links">
        <Link to="mailto:barbara.mrch@gmail.com">
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
      <div className="Contact__credits">@ 2025 BARBARA MARCHE</div>
    </div>

  </section>
}

export default Contact;