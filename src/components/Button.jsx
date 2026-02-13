export default function Button({size, color, href, children, ...props}) {
    
    const base = "flex items-center justify-center text-center text-sm font-['IBM_Plex_Mono'] hover:cursor-pointer font-bold text-white border rounded drop-shadow-lg";

    const sizes = {
        hero: "w-36 h-10 md:w-70 md:h-15",
        project: "w-47 h-9"
    }

    const colors = {
        hero: "bg-[#1565C0] border-[#42A5F5] drop-shadow-[#1565C0]",
        orange: "bg-[#FFA217]",
        blue: "bg-[#000AFF]",
        green: "bg-[#2AB090]",
        red: "bg-[#E33636]",
        yellow: "bg-[#ebe30e]",
    }
    
    const className = `${base} ${sizes[size]} ${colors[color]}`;
    
    if (href) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }
    
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
}