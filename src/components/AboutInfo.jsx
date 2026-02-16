import profileAbout from "../assets/profilePhotos/profile2.JPG";
import { useContext } from "react";
import { OptionsContext } from "../context/OptionsContext";

export default function AboutInfo() {
    
    const {language, data} = useContext(OptionsContext);
    
    return (
        <section className="about-me-info flex flex-col-reverse md:flex-row items-center md:mx-auto gap-10 md:gap-57 md:max-w-6xl">
            <section className="about-me-text font-['IBM_Plex_Mono'] text-white flex flex-col gap-5">
                <h2 className="name font-[Raleway] text-4xl">{data.base.name}</h2>
                <p className="about font-[Raleway] text-lg md:max-w-140">
                    {data[language].aboutSection.intro}
                </p>
                <div className="info flex flex-col gap-5">
                    <h3 className="info-title font-[Raleway] text-2xl">{data[language].aboutSection.infoTitle}</h3>
                    <div className="date-of-birth flex gap-15">
                        <h4 className="w-1/4 md:w-1/3">{data[language].aboutSection.birthday}</h4>
                        <h4>{data[language].aboutSection.date}</h4>
                    </div>
                    <div className="address flex gap-15">
                        <h4 className="w-1/4 md:w-1/3">{data[language].aboutSection.address}</h4>
                        <h4>{data.base.address}</h4>
                    </div>
                    <div className="school flex gap-20 md:gap-15">
                        <h4 className="w-1/4 md:w-1/3">{data[language].aboutSection.school}</h4>
                        <div className="flex flex-col">
                            <h4 className="pb-2">{data[language].aboutSection.university}</h4>
                            <h4 className="pb-0.5">{data[language].aboutSection.program}</h4>
                            <h4 className="">{data[language].aboutSection.degree}</h4>
                        </div>
                    </div>
                    <div className="language flex gap-15">
                        <h4 className="w-1/4 md:w-1/3">{data[language].aboutSection.language}</h4>
                        <h4>{data[language].aboutSection.languageEng}</h4>
                    </div>
                </div>
            </section>
            <figure className="about-me-photo">
                <img src={profileAbout} className="w-90 object-contain rounded-lg"/>
            </figure>
        </section>
    )
}