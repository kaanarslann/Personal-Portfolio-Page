import profilephoto from "../assets/profilephoto.png";

export default function AboutInfo() {
    return (
        <section className="about-me-info flex flex-col-reverse md:flex-row items-center md:mx-auto gap-10 md:gap-66 md:max-w-6xl">
            <section className="about-me-text font-['IBM_Plex_Mono'] text-white flex flex-col gap-5">
                <h2 className="name font-[Raleway] text-4xl">Kaan Arslan</h2>
                <p className="about font-[Raleway] text-lg md:max-w-140">
                    If I had a coconut for everytime some lunatic said something like that. Well, I have never heard of you. 
                    Just answer my questions!
                </p>
                <div className="info flex flex-col gap-5">
                    <h3 className="info-title font-[Raleway] text-2xl">General Info</h3>
                    <div className="date-of-birth flex gap-15">
                        <h4 className="w-1/3">Date of Birth</h4>
                        <h4>14 September 1992</h4>
                    </div>
                    <div className="address flex gap-15">
                        <h4 className="w-1/3">Address</h4>
                        <h4>Sancaktepe, İstanbul</h4>
                    </div>
                    <div className="school flex gap-15">
                        <h4 className="w-1/3">School</h4>
                        <div className="flex flex-col">
                            <h4 className="pb-2">İstanbul Aydın University</h4>
                            <h4 className="pb-0.5">Mechanical Engineering</h4>
                            <h4 className="">Master's Degree</h4>
                        </div>
                    </div>
                    <div className="language flex gap-15">
                        <h4 className="w-1/3">Language</h4>
                        <h4>English (Advanced)</h4>
                    </div>
                </div>
            </section>
            <figure className="about-me-photo">
                <img src={profilephoto} className="w-80 object-contain"/>
            </figure>
        </section>
    )
}