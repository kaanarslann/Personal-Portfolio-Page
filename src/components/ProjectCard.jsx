import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({direction, techs, title, description, picture, buttonType}) {
    
    const {variant, href} = buttonType;

    return (
        <article className={`${direction}`}>
            <details>
                <div className="project-tags">
                    <h4>{techs}</h4>
                </div>
                <h1 className="project-title">
                    {title}
                </h1>
                <p className="project-description">
                    {description}
                </p>
                <Button variant={variant} href={href}>
                    <span>View Project</span><FontAwesomeIcon icon={faAngleRight} className="pt-0.5"/>
                </Button>
            </details>
            <figure>
                <img className="project-picture" src={picture}/>
            </figure>
        </article>
    )
}