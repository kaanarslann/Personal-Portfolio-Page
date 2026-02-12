import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({direction, techs, tagColor, title, description, picture, buttonType}) {
    
    const {size, color, href} = buttonType;

    const tagColors = {
        orange: {
            bg: "bg-[#FFA217]/20",
            border: "border-[#FFA217]/20",
            text: "text-[#FFA217]",
        },
        blue: {
            bg: "bg-[#000AFF]/20",
            border: "border-[#000AFF]/20",
            text: "text-[#000AFF]",
        },
        green: {
            bg: "bg-[#2AB090]/20",
            border: "border-[#2AB090]/20",
            text: "text-[#2AB090]",

        },
        red: {
            bg: "bg-[#E33636]/20",
            border: "border-[#E33636]/20",
            text: "text-[#E33636]",
        }
    }

    return (
        <article className={`${direction} justify-center items-center gap-5 md:gap-20`}>
            <section className="flex flex-col px-20 md:px-0 gap-5 md:max-w-110">
                <div className="flex gap-2">
                    {Array.isArray(techs) && techs.map((tech) => (<div key={tech} className={`project-tags border ${tagColors[tagColor].border} 
                ${tagColors[tagColor].bg} rounded-[60px] w-25 h-6 flex justify-center items-center`}>
                    <h4 className={`font-['IBM_Plex_Mono'] ${tagColors[tagColor].text} font-bold text-xs text-center`}>{tech}</h4>
                </div>))}
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
                <div className={`border-t-2 ${tagColors[tagColor].border} md:hidden`}></div>
            </section>
            <figure className="md:max-w-140">
                <img className="project-picture w-111 h-75 rounded object-contain" src={picture}/>
            </figure>
        </article>
    )
}