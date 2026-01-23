import ThemeSlider from "../components/ThemeSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
    return (
        <header className="flex justify-between">
            <section className="header-nav">
                <nav className="flex">
                    <a>Home</a>
                    <a>Projects</a>
                    <a>About Me</a>
                    <a>Skills</a>
                    <a>Contact Me</a>
                </nav>
            </section>
            <section className="header-socials flex">
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
            </section>
            <section className="header-buttons flex">
                <ThemeSlider />
            </section>
        </header>
    )
}