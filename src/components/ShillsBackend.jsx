import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";
import SkillCard from "./SkillCard";

export default function SkillsBackend() {
    
    const {data} = useContext(OptionsContext);

    return (
        <section className="skills-backend flex flex-col gap-5 items-center">
            <div className="flex items-center gap-1"><FontAwesomeIcon icon={faDatabase} /><h2 className="font-[Raleway] text-2xl">{data.base.backEndTitle}</h2></div>
            <div className="skill-list flex flex-col gap-0.5">
                {data.base.backEnd.map((skill, index) => (
                    <SkillCard key={index} skill={skill}/>
                ))}
            </div>
        </section>
    )
}