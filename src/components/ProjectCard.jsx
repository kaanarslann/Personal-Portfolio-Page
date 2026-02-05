import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({direction, techs, tagColor, title, description, picture, buttonType}) {
    
    const {size, color, href} = buttonType;

    const tagColors = {
        orange: "[#FFA217]",
        blue: "[#000AFF]",
        green: "[#2AB090]",
        red: "[#E33636]"
    }

    return (
        <article className={`${direction}`}>
            <details className="flex flex-col">
                <div className={`project-tags border bg-${tagColors[tagColor]} rounded-[60px] opacity-100`}>
                    <h4 className={`font-['IBM_Plex_Mono'] text-${tagColors[tagColor]} font-bold text-xs`}>{techs}</h4>
                </div>
                <h1 className="project-title font-[Raleway] text-2xl text-black">
                    {title}
                </h1>
                <p className="project-description font-['IBM_Plex_Mono'] text-sm leading-6 tracking-[1%] text-[#9C9C9C]">
                    {description}
                </p>
                <Button size={size} color={color} href={href}>
                    <span>View Project</span><FontAwesomeIcon icon={faAngleRight} className="relative top-px"/>
                </Button>
            </details>
            <figure>
                <img className="project-picture w-111 h-75 rounded" src={picture}/>
            </figure>
        </article>
    )
}