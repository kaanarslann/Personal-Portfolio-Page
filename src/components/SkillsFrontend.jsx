import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function SkillsFrontend() {
    return (
        <section className="skills-frontend flex flex-col gap-5">
            <div className="flex items-center gap-1"><FontAwesomeIcon icon={faCode} /><h2 className="font-[Raleway] text-xl">Front-end</h2></div>
            <div className="skill-list">
                <ul className="list-disc font-['IBM_Plex_Mono']">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>React Redux</li>
                    <li>Context API</li>
                    <li>Cypress</li>
                    <li>Axios</li>
                    <li>TailwindCSS</li>
                    <li>Toastify</li>
                </ul>
            </div>
        </section>
    )
}