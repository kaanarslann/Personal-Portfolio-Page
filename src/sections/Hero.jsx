import Header from "../components/Header";
import profilephoto from "../assets/profilephoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import TechStack from "../components/TechStack";
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function Hero() {

    const {language, data} = useContext(OptionsContext);

    return(
        <main className="bg-black mx-auto px-10 md:px-20 md:h-screen">
            <section className="header mb-15 md:mb-20">
                <Header />
            </section>
            <section className="flex flex-col">
                <section className="hero flex items-center gap-5 md:gap-80 justify-center">
                    <article className="hero-info flex flex-col w-[55%] gap-5 md:gap-7 md:w-88">
                        <h1 className="text-white font-[Raleway] font-extrabold text-5xl">{data.base.name}</h1>
                        <p className="text-gray-400 font-['IBM_Plex_Mono'] 
                        text-sm leading-6 tracking-[1%] md:w-120">
                            {data[language].heroSection.intro}
                        </p>
                        <Button size="hero" color="hero" href="#projects">
                            <span>{data[language].heroSection.heroButton}</span><FontAwesomeIcon icon={faAngleRight} className="relative top-px"/>
                        </Button>
                    </article>
                    <figure className="hero-photo w-[45%] md:w-70 md:h-75">
                        <img src={profilephoto}/>
                    </figure>
                </section>
                <section className="tech-stack flex flex-col mt-10 md:mt-15 gap-5 pb-15">
                    <div className="flex mx-auto">
                        <h3 className="font-['IBM_Plex_Mono'] dark:text-white text-black text-sm">{data[language].heroSection.techStack}</h3>
                    </div>
                    <div className="tech-logos flex justify-center gap-5 md:gap-10">
                        {data.base.techStack.map((tech, index) => (
                            <TechStack key={index} logo={tech.logo} title={tech.text}/>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}