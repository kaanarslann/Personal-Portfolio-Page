import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

export default function ScrollToTop() {
    
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return(
        <button onClick={scrollToTop} className={`fixed bottom-6 right-13 md:right-6 z-50 p-2 md:p-3 bg-[#1565C0] flex items-center justify-center 
            rounded-full h-10 w-10 md:h-16 md:w-16 shadow-md md:shadow-lg shadow-blue-500 transition-all duration-300 transform hover:cursor-pointer
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}`}>
            <FontAwesomeIcon icon={faCircleUp} className="text-xl md:text-3xl text-white"/>
        </button>
    )
}