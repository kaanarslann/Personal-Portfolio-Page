import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import SkillCard from "./SkillCard"
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function SkillsFrontend() {
    
    const {data} = useContext(OptionsContext);
    
    return (
        <section className="skills-frontend flex flex-col gap-5 items-center">
            <div className="flex items-center gap-1"><FontAwesomeIcon icon={faCode} /><h2 className="font-[Raleway] text-2xl">Front-end</h2></div>
            <div className="skill-list flex flex-col gap-0.5">
                {data.base.frontEnd.map((skill, index) => (
                    <SkillCard key={index} skill={skill}/>
                ))}
            </div>
        </section>
    )
}