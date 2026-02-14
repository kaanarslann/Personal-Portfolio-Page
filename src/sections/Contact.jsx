import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function Contact() {
    
    const {language, data} = useContext(OptionsContext);
    
    return(
        <article className="flex flex-col bg-black py-10 gap-10" id="contact">
            <section className="flex justify-center">
                <h1 className="text-white font-[Raleway] text-4xl">{data[language].contactSection.title}</h1>
            </section>
            <section className="flex items-center gap-10">
                <div className="border-2 border-gray-300 p-3 rounded flex flex-col-reverse justify-center mx-auto">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color:"#e33f22"}} />
                        <a href="mailto:kaanarslan.work@gmail.com" className="font-['IBM_Plex_Mono'] text-3xl text-gray-400 text-center hover:cursor-pointer">kaanarslan.work@gmail.com</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color:"#0077B5"}}/>
                        <a href="https://linkedin.com/in/kaan-arslan-6a3b60138/" target="_blank" className="font-['IBM_Plex_Mono'] text-3xl text-gray-400 text-center hover:cursor-pointer">LinkedIn</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faGithub} size="xl" style={{color:"gray"}}/>
                        <a href="https://github.com/kaanarslann" target="_blank" className="font-['IBM_Plex_Mono'] text-3xl text-gray-400 text-center hover:cursor-pointer">GitHub</a>
                    </div>
                </div>
            </section>
        </article>
    )
}