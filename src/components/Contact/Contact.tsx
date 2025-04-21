import {RichText} from "../Typography/RichText.tsx";
import {Link} from "../Link/Link.tsx";
import {useGetTextQuerySuspenseQuery} from "../../models/graphql.ts";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import "./_Contact.scss";

type Props = {
  className?: HTMLAttributes<HTMLElement>['className'];
}
const Contact = ({className}: Props) => {
  const {data: contactData} = useGetTextQuerySuspenseQuery({variables: {id: '3vxhVPirdQQnqb2wFEg68F'}});

  return <section className={classnames([className, 'Contact'])} id="contact">
    <div className="Contact__wrapper">
      <RichText content={contactData?.text?.content?.json}/>
      <div className="Contact__links">
        <Link to="mailto:barbara.mrch@gmail.com">Email</Link>
        <Link to="https://www.linkedin.com/in/barbaramarche/" target="_blank">Linkedin</Link>
        <Link to="https://www.behance.net/barbara-marche" target="_blank">Behance</Link>
      </div>
    </div>

  </section>
}

export default Contact;