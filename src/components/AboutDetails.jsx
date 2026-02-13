import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function AboutDetails() {
    
    const {language, darkMode, data} = useContext(OptionsContext);
    
    return (
        <section className="details text-white flex flex-col gap-5 md:mx-auto md:max-w-6xl pb-10">
            <h3 className="font-[Raleway] text-2xl">{data[language].aboutSection.aboutTitle}</h3>
            <p className="font-['IBM_Plex_Mono'] text-sm">
                {data[language].aboutSection.aboutMe}
            </p>
        </section>
    )
}