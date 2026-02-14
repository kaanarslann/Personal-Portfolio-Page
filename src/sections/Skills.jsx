import SkillsFrontend from "../components/SkillsFrontend"
import SkillsBackend from "../components/ShillsBackend"
import SkillsAdditional from "../components/SkillsAdditional"
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function Skills() {
    
    const {language, data} = useContext(OptionsContext);
    
    return(
        <article className="flex flex-col px-10 py-10 gap-10" id="skills">
            <section className="flex justify-center">
                <h1 className="font-[Raleway] text-4xl">{data[language].skillsSection.title}</h1>
            </section>
            <div className="skills flex justify-between md:justify-center md:gap-90">
                <SkillsFrontend />
                <SkillsBackend />
                <SkillsAdditional />
            </div>
        </article>
    )
}