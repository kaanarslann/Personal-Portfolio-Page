import SkillsFrontend from "../components/SkillsFrontend"
import SkillsBackend from "../components/ShillsBackend"
import SkillsAdditional from "../components/SkillsAdditional"

export default function Skills() {
    return(
        <article className="flex flex-col px-10 py-10 gap-10" id="skills">
            <section className="flex justify-center">
                <h1 className="font-[Raleway] text-4xl">Skills</h1>
            </section>
            <div className="skills flex justify-between md:justify-center md:gap-90">
                <SkillsFrontend />
                <SkillsBackend />
                <SkillsAdditional />
            </div>
        </article>
    )
}