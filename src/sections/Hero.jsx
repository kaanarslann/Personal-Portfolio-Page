import Header from "../components/Header";
import profilephoto from "../assets/profilephoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";



export default function Hero() {


    return(
        <main className="bg-black">
            <section className="header mb-15">
                <Header />
            </section>
            <section className="hero flex items-center gap-5 md:gap-58 mx-10 md:mx-20 justify-center">
                <article className="hero-info flex flex-col w-[55%] gap-5 md:gap-7 md:w-88 md:h-64">
                    <h1 className="text-white font-[Raleway] font-extrabold text-5xl">Kaan Arslan</h1>
                    <p className="text-gray-400 font-[IBM_Plex_Mono] 
                    text-sm leading-6 tracking-[1%] md:w-120 md:h-18">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Minus harum hic dicta aliquam aliquid optio veritatis odit incidunt quos quis esse, libero officiis, 
                        ex assumenda dignissimos illum enim nulla at.</p>
                    <button className="bg-[#1565C0] text-white border 
                    border-[#42A5F5] rounded w-36 h-10 md:w-70 md:h-15
                    flex items-center justify-center text-center text-sm font-[IBM_Plex_Mono] font-bold"><span>Learn More</span><FontAwesomeIcon icon={faAngleRight} className="pt-0.5"/></button>
                </article>
                <figure className="hero-photo w-[45%] md:w-70 md:h-75">
                    <img src={profilephoto}/>
                </figure>
            </section>
        </main>
    )
}