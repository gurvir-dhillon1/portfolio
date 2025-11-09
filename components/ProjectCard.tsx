import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ProjectCardProps {
    projectTitle?: string;
    textContent?: string;
    outerBgColor?: string;
    bgColor?: string;
    outerBorderColor?: string;
    innerBorderColor?: string;
    imgSrc: string | StaticImport;
    href: string;
}

export default function ProjectCard({ 
    projectTitle,
    textContent, 
    bgColor = "bg-gray-900", 
    outerBgColor = "bg-gray-950", 
    outerBorderColor = "border-gray-900",
    innerBorderColor = "border-gray-700",
    imgSrc, 
    href
}: ProjectCardProps) {

    return (
        <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={`relative p-2 border ${outerBorderColor} rounded-3xl flex w-full h-fit md:h-[400px] lg:h-[500px] ${outerBgColor} group`}>
                <div className="w-full glare-item-outer"></div>
                <div className={`flex flex-col w-full border ${innerBorderColor} rounded-2xl ${bgColor} relative overflow-hidden`}>
                    <ArrowRightIcon className="hidden md:block more-info-arrow h-6 w-6 transition-all duration-300 group-hover:left-[93%]" />
                    <div className="w-full glare-item-inner"></div>
                    <div className="p-[32px]">
                        <div className="text-xl text-shadow font-bold text-primary">
                            {projectTitle}
                        </div>
                        <div className="text-base text-primary">
                            {textContent}
                        </div>
                    </div>
                    <div className="relative hidden md:flex w-full h-full">
                        <div className="absolute justify-end items-end bottom-[-10%] left-[5%] w-[90%] h-full transition-all duration-300 group-hover:bottom-0">
                            <Image src={imgSrc} alt="Coming Soon!" fill={true} /> 
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
