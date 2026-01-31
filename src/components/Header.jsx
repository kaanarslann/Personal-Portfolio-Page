import { useState } from "react"

import ThemeSlider from "./ThemeSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    
    const [isVisible, setIsVisible] = useState(false);
    const toggleOptions = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <header className="flex flex-col py-2 px-10 bg-[#1B1B1B] gap-5">
            <section className="header-top flex justify-between md:justify-end">
                <div className="header-buttons flex gap-5">
                    <div className="theme flex gap-1 items-center">
                        <ThemeSlider />
                        <span className="text-xs tracking-[1%] text-gray-400">Light Theme</span>
                    </div>
                    <div className="language flex gap-1 items-center">
                        <ThemeSlider />
                        <span className="text-xs tracking-[1%] text-gray-400">English</span>    
                    </div>
                </div>
                <div className="toggle-icon flex gap-5 justify-end md:hidden">
                    <button onClick={toggleOptions}>
                        <FontAwesomeIcon icon={faBars} size="lg" style={{color:"gray"}} />
                    </button>
                </div>
            </section>
            <section className={`toggle-header transition-all duration-300 ${isVisible ? "hidden" : "block"} md:block`}>
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center md:justify-evenly">
                    <section className="header-nav flex">
                        <nav className="flex flex-col md:flex-row gap-10 md:gap-13 font-[IBM_Plex_Mono] 
                        text-center text-sm tracking-[1%] text-gray-400 justify-center">
                            <a>Home</a>
                            <a>Projects</a>
                            <a>About Me</a>
                            <a>Skills</a>
                            <a>Contact Me</a>
                        </nav>
                    </section>
                    <section className="header-socials flex gap-5">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color:"gray"}}/>
                        <FontAwesomeIcon icon={faGithub} size="lg" style={{color:"gray"}}/>
                    </section>
                </div>
            </section>
        </header>
    )
}