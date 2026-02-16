import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import SkillCard from "./SkillCard"
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function SkillsAdditional() {
    
    const {language, data} = useContext(OptionsContext);
    
    return(
        <section className="skills-other flex flex-col gap-5 items-center">
            <div className="flex items-center gap-1"><FontAwesomeIcon icon={faGear} /><h2 className="font-[Raleway] text-2xl">{data[language].skillsSection.additionalTitle}</h2></div>
            <div className="skill-list flex flex-col gap-0.5">
                {data[language].skillsSection.additional.map((skill, index) => (
                    <SkillCard key={index} skill={skill}/>
                ))}
            </div>
        </section>
    )
}