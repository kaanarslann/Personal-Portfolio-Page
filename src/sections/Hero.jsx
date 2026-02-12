import Header from "../components/Header";
import profilephoto from "../assets/profilephoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import TechStack from "../components/TechStack";
import HTML5 from "../assets/icons/html5.png";
import JavaScript from "../assets/icons/javascript.png";
import React from "../assets/icons/react.png";
import SpringBoot from "../assets/icons/springboot.png";
import TailwindCSS from "../assets/icons/tailwindcss.png";
import PostgreSQL from "../assets/icons/postgresql.png";


export default function Hero() {


    return(
        <main className="bg-black mx-auto px-10 md:px-20 md:h-screen">
            <section className="header mb-15 md:mb-20">
                <Header />
            </section>
            <section className="flex flex-col">
                <section className="hero flex items-center gap-5 md:gap-80 justify-center">
                    <article className="hero-info flex flex-col w-[55%] gap-5 md:gap-7 md:w-88">
                        <h1 className="text-white font-[Raleway] font-extrabold text-5xl">Kaan Arslan</h1>
                        <p className="text-gray-400 font-['IBM_Plex_Mono'] 
                        text-sm leading-6 tracking-[1%] md:w-120">
                            Hello, I'm Kaan. I have always been interested in the field of software and computer science. I am actively developing my skills to pursue a career as a Full Stack Developer.
                        </p>
                        <Button size="hero" color="hero" href="#projects">
                            <span>Learn More</span><FontAwesomeIcon icon={faAngleRight} className="relative top-px"/>
                        </Button>
                    </article>
                    <figure className="hero-photo w-[45%] md:w-70 md:h-75">
                        <img src={profilephoto}/>
                    </figure>
                </section>
                <section className="tech-stack flex flex-col mt-10 md:mt-15 gap-5 pb-15">
                    <div className="flex mx-auto">
                        <h3 className="font-['IBM_Plex_Mono'] text-white text-sm">Tech Stack I Build With</h3>
                    </div>
                    <div className="tech-logos flex justify-center gap-5 md:gap-10">
                        <TechStack logo={JavaScript} title={"JavaScript"}/>
                        <TechStack logo={React} title={"React.js"}/>
                        <TechStack logo={HTML5} title={"HTML5"}/>
                        <TechStack logo={TailwindCSS} title={"TailwindCSS"}/>
                        <TechStack logo={SpringBoot} title={"Spring Boot"}/>
                        <TechStack logo={PostgreSQL} title={"PostgreSQL"}/>
                    </div>
                </section>
            </section>
        </main>
    )
}