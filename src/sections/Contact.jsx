import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    return(
        <article className="flex flex-col bg-black py-10 gap-10">
            <section className="flex justify-center">
                <h1 className="text-white font-[Raleway] text-4xl">Contact Me</h1>
            </section>
            <section className="flex flex-col items-center gap-10">
                <div className="flex justify-center items-center gap-2 border-2 border-gray-300 p-3 rounded hover:cursor-pointer"><FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"gray"}} /><h2 className="font-['IBM_Plex_Mono'] text-3xl text-gray-400 text-center">kaanarslan.work@gmail.com</h2></div>
                <div className="flex justify-center gap-5 border rounded p-2 border-gray-300 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color:"gray"}}/>
                    <FontAwesomeIcon icon={faGithub} size="2xl" style={{color:"gray"}}/>
                </div>
            </section>
        </article>
    )
}