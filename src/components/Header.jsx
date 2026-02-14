import { useState, useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"
import ThemeSlider from "./ThemeSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    
    const {language, toggleLanguage, data} = useContext(OptionsContext);
    
    const [isVisible, setIsVisible] = useState(false);
    const toggleOptions = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <header className="flex flex-col py-2 px-10 md:pb-5 bg-[#1B1B1B] gap-5">
            <section className="header-top flex justify-between md:justify-end">
                <div className="header-buttons">
                    <div className="language flex gap-1 items-center">
                        <ThemeSlider toggleFunc={toggleLanguage} />
                        <span className="text-xs tracking-[1%] text-gray-400">{data[language].headerSection.language}</span>    
                    </div>
                </div>
                <div className="toggle-icon flex gap-5 justify-end md:hidden">
                    <button onClick={toggleOptions}>
                        <FontAwesomeIcon icon={faBars} size="lg" style={{color:"gray"}} />
                    </button>
                </div>
            </section>
            <section className={`toggle-header transition-all duration-300 ${isVisible ? "hidden" : "block"} md:block`}>
                <div className="flex flex-col md:flex-row gap-10 md:gap-90 items-center justify-center px-30">
                    <section className="header-nav flex">
                        <nav className="flex flex-col md:flex-row gap-10 md:gap-20 font-[IBM_Plex_Mono] 
                        text-center text-sm tracking-[1%] text-gray-400">
                            {data[language].headerSection.navButtons.map((button, index) => (
                                <a key={index} href={button.link}>{button.text}</a>
                            ))}
                        </nav>
                    </section>
                    <section className="header-socials flex gap-5">
                        <a href="https://linkedin.com/in/kaan-arslan-6a3b60138/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{color:"gray"}}/></a>
                        <a href="https://github.com/kaanarslann" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" style={{color:"gray"}}/></a>
                    </section>
                </div>
            </section>
        </header>
    )
}