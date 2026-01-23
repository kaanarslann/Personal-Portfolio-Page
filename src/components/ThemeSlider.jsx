export default function ThemeSlider() {
    return (
        <div>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="relative w-11 h-6 bg-[#4731D3] dark:bg-[#3A3A3A] peer-focus:outline-none peer-focus:ring-4
                 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer rtl:peer-checked:after:-translate-x-full
                 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 
                 after:bg-[#FFE86E] after:rounded-full after:h-5 after:w-5 after:transition-all 
                 dark:border-gray-600 peer-checked:bg-[#4731D3] 
                 dark:peer-checked:bg-[#3A3A3A] after:duration-300 after:ease-in-out after:translate-x-full peer-checked:after:translate-x-0 
                 dark:after:mask-[radial-gradient(ellipse_at_30%_30%,transparent_40%,black_41%)]"></div>
            </label>
        </div>
    )
}