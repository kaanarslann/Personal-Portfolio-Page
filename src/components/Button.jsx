export default function Button({variant, href, children, ...props}) {
    
    const base = "flex items-center justify-center text-center text-sm font-['IBM_Plex_Mono'] font-bold text-white border rounded drop-shadow-lg";

    const variants = {
        hero: "bg-[#1565C0] border-[#42A5F5] w-36 h-10 md:w-70 md:h-15 drop-shadow-[#1565C0]",
        prjOrange: "bg-[#FFA217] drop-shadow-[#FFA217] w-47 h-9",
        prjBlue: "bg-[#000AFF] drop-shadow-[#000AFF] w-47 h-9",
        prjGreen: "bg-[#2AB090] drop-shadow-[#2AB090] w-47 h-9",
        prjYellow: "bg-[#fcf519] drop-shadow-[#fcf519] w-47 h-9"
    }
    
    const className = `${base} ${variants[variant]}`;
    
    if (href) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }
    
    return (
        <button className={className} {...props}>
            {children} <div className="w-47 h-9"></div>
        </button>
    );
}