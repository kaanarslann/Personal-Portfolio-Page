export default function Button({variant, href, children, ...props}) {
    
    const base = "flex items-center justify-center text-center text-sm font-['IBM_Plex_Mono'] font-bold text-white border rounded";

    const variants = {
        hero: "bg-[#1565C0] border-[#42A5F5] w-36 h-10 md:w-70 md:h-15 drop-shadow-lg drop-shadow-[#1565C0]"
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
            {children}
        </button>
    );
}