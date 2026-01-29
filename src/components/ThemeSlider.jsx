export default function ThemeSlider() {
    return (
        <> 
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" />
            <div
                className="relative w-8 h-4
                    bg-gray-300
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300
                    rounded-full
                    transition-colors
                    peer-checked:bg-blue-600
                    after:content-['']
                    after:absolute after:top-0.5 after:left-0.5
                    after:h-3 after:w-3
                    after:bg-white after:rounded-full
                    after:transition-transform
                    peer-checked:after:translate-x-4"
            ></div>
            </label>
        </>
        /*<div>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="relative w-9 h-5 bg-[#4731D3] dark:bg-[#3A3A3A] peer-focus:outline-none peer-focus:ring-4
                 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer rtl:peer-checked:after:-translate-x-full
                 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 
                 after:bg-[#FFE86E] after:rounded-full after:h-4 after:w-4 after:transition-all 
                 dark:border-gray-600 peer-checked:bg-[#4731D3] 
                 dark:peer-checked:bg-[#3A3A3A] after:duration-300 after:ease-in-out after:translate-x-full peer-checked:after:translate-x-0 
                 dark:after:mask-[radial-gradient(ellipse_at_30%_30%,transparent_40%,black_41%)]"></div>
            </label>*/
    )
}