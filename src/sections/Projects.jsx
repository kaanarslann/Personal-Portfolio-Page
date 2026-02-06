import ProjectCard from "../components/ProjectCard";
import prjPicture from "../assets/prjPicture.png";

export default function Projects() {
    
    const prjButton1 = {
        size: "project",
        color: "orange",
        href: "#"
    }
    const prjButton2 = {
        size: "project",
        color: "blue",
        href: "#"
    }
    const prjButton3 = {
        size: "project",
        color: "green",
        href: "#"
    }
    const prjButton4 = {
        size: "project",
        color: "red",
        href: "#"
    }
    const projectP = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae perferendis consequatur velit dicta labore ut facilis. Neque amet ex consequatur dolorum sapiente eveniet tempore maiores, voluptate nostrum. Earum, voluptates voluptate!";
    
    return (
        <section className="projects flex flex-col justify-center mx-auto px-10 mt-10 gap-15">
            <div className="projects-top flex flex-col justify-center gap-5 items-center">
                <h1 className="text-[#080808] font-[Raleway] font-extrabold text-[34px] text-center">Case Studies</h1>
                <p className="font-['IBM_Plex_Mono'] text-sm leading-6 tracking-[1%] text-[#9C9C9C] text-center px-10 md:w-1/2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, distinctio doloremque suscipit dolore, 
                    dicta vel sunt modi corporis nam, veniam officiis facilis! Vitae iure hic, 
                    laudantium recusandae aspernatur placeat aut.
                </p>
            </div>
            <div className="projects-details flex flex-col gap-10">
                <ProjectCard direction="flex flex-col-reverse md:flex-row" techs="tag1" tagColor="orange" title="Work name here" description={projectP} picture={prjPicture} buttonType={prjButton1} />
                <ProjectCard direction="flex flex-col-reverse md:flex-row-reverse" techs="tag2" tagColor="blue" title="Work name here" description={projectP} picture={prjPicture} buttonType={prjButton2}/>
                <ProjectCard direction="flex flex-col-reverse md:flex-row" techs="tag3" tagColor="green" title="Work name here" description={projectP} picture={prjPicture} buttonType={prjButton3}/>
                <ProjectCard direction="flex flex-col-reverse md:flex-row-reverse" techs="tag4" tagColor="red" title="Work name here" description={projectP} picture={prjPicture} buttonType={prjButton4}/>
            </div>
        </section>
    )
}