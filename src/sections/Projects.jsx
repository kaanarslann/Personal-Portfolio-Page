import ProjectCard from "../components/ProjectCard";
import prjPicture from "../assets/prjPicture.png";
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function Projects() {
    
    const {language, darkMode, data} = useContext(OptionsContext);
    
    return (
        <section className="projects flex flex-col justify-center mx-auto px-10 pt-10 gap-15 pb-20" id="projects">
            <div className="projects-top flex flex-col justify-center gap-5 items-center">
                <h1 className="text-[#080808] font-[Raleway] font-extrabold text-[34px] text-center">{data[language].projectsSection.title}</h1>
                <p className="font-['IBM_Plex_Mono'] text-sm leading-6 tracking-[1%] text-[#9C9C9C] text-center px-10 md:w-1/2">
                    {data[language].projectsSection.intro}
                </p>
            </div>
            <div className="projects-details flex flex-col gap-10">
                {data[language].projectsSection.projects.map((project, index) => (
                    <ProjectCard index={index} direction={project.direction} techs={project.techs} tagColor={project.tagColor} title={project.title} description={project.details} picture={prjPicture} buttonType={project.buttonType}/>
                ))}
            </div>
        </section>
    )
}