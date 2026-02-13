import AboutDetails from "../components/AboutDetails";
import AboutInfo from "../components/AboutInfo";
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function AboutMe() {
    
    const {language, darkMode, data} = useContext(OptionsContext);

    return (
        <article className="about-me bg-black mx-auto px-10 md:px-20 pt-10 flex flex-col gap-15" id="about-me">
            <section className="flex justify-center">
                <h1 className="text-white font-[Raleway] text-4xl">{data[language].aboutSection.title}</h1>
            </section>
            <AboutInfo />
            <AboutDetails />
        </article>
    )
}