import ProjectCard from "@/components/ProjectCard";
import { ProjectList } from "@/ProjectConfig/ProjectList";
export default function Projects() {
    const oddStyling: Record<string, string> = {
        bgColor: 'dark:bg-neutral-900 bg-neutral-100',
        outerBgColor: 'dark:bg-neutral-950',
        outerBorderColor: 'dark:border-neutral-900',
        innerBorderColor: 'dark:border-neutral-700'
    };

    const evenStyling: Record<string, string> = {
        bgColor: 'dark:bg-slate-900 bg-slate-100',
        outerBgColor:'dark:bg-slate-950',
        outerBorderColor:'dark:border-slate-900',
        innerBorderColor:'dark:border-slate-700',
    }
    return (
        <div className="flex flex-col items-center w-full h-full bg-background base-text gap-5 p-5">
            <div className="animate-slide-in-up w-[100%] lg:w-[60%] h-fit grid grid-cols-1 gap-9 p-5">
                {ProjectList.map((info, index) => (
                        <ProjectCard 
                            projectTitle={info.name}
                            textContent={info.description}
                            outerBgColor={index & 1 ? oddStyling.outerBgColor: evenStyling.outerBgColor}
                            outerBorderColor={index & 1 ? oddStyling.outerBorderColor: evenStyling.outerBorderColor}
                            bgColor={index & 1 ? oddStyling.bgColor: evenStyling.bgColor}
                            imgSrc={info.imgPath}
                            href={info.href}
                        />
                    ))}
            </div>
        </div>
    )
}
