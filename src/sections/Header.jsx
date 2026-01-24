import ThemeSlider from "../components/ThemeSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
    return (
        <header className="flex-col justify-center my-2 mx-10">
            <section className="header-buttons flex gap-5 justify-end mr-5">
                <div className="theme flex gap-1">
                    <ThemeSlider />
                    <span className="">Light Theme</span>
                </div>
                <div className="language flex gap-1">
                    <ThemeSlider />
                    <span>English</span>
                </div>
            </section>
            <div className="flex gap-35 items-center justify-center">
                <section className="header-nav flex justify-around">
                    <nav className="flex gap-20 font-[IBM_Plex_Mono]">
                        <a>Home</a>
                        <a>Projects</a>
                        <a>About Me</a>
                        <a>Skills</a>
                        <a>Contact Me</a>
                    </nav>
                </section>
                <section className="header-socials flex gap-5">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                    <FontAwesomeIcon icon={faGithub} size="2xl"/>
                </section>
            </div>
        </header>
    )
}