import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"

export default function SkillsAdditional() {
    return(
        <section className="skills-other flex flex-col gap-5 items-center">
            <div className="flex items-center gap-1"><FontAwesomeIcon icon={faGear} /><h2 className="font-[Raleway] text-xl">Additional</h2></div>
            <div className="skill-list">
                <ul className="list-disc font-['IBM_Plex_Mono']">
                    <li>Microsoft Office</li>
                    <li>Debugging</li>
                    <li>Deployment</li>
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                </ul>
            </div>
        </section>
    )
}