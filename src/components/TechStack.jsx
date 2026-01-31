export default function TechStack({logo, title}) {

    return (
        <article className="tech-card flex flex-col gap-2">
            <img src={logo} className="tech-logo border border-[#1B1B1B] w-32 h-15 rounded object-contain p-2"/>
            <h4 className="tech-title text-white text-center font-['IBM_Plex_Mono'] text-xs">{title}</h4>
        </article>
        
    )
}