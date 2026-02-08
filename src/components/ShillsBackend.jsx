import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

export default function SkillsBackend() {
    return (
        <section className="skills-backend flex flex-col gap-5 items-center">
            <div className="flex items-center gap-1"><FontAwesomeIcon icon={faDatabase} /><h2 className="font-[Raleway] text-xl">Back-end</h2></div>
            <div className="skill-list">
                <ul className="list-disc font-['IBM_Plex_Mono']">
                    <li>OOP</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>C#</li>
                    <li>PostgreSQL</li>
                    <li>SQL</li>
                    <li>RestAPI</li>
                    <li>Postman</li>
                    <li>Maven</li>
                </ul>
            </div>
        </section>
    )
}