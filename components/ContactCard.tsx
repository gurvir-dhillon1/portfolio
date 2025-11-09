"use client"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

interface ContactCardProps {
    text?: string;
    icon: string;
    tooltip: string;
    link?: string;
    copy_string?: string;
}

const icon_map: Record<string, JSX.Element> = {
    github: <FaGithub size={64} />,
    linkedin: <FaLinkedin size={64} />,
    email: <FaEnvelope size={64} />,
}

export default function ContactCard({ text, tooltip, icon, link, copy_string }: ContactCardProps) {
    const [tooltipText, setTooltipText] = useState<string>(tooltip);
    const content = (
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg w-fit relative group">
            {icon_map[icon] || null}
            {text && <div className="text-center">{text}</div>}
            <span 
                className="absolute top-full mt-1 left-1/2 whitespace-nowrap transform -translate-x-1/2 group-hover:opacity-100 
                transition-opacity opacity-0 bg-transparent text-primary text-xs rounded-lg p-3 pointer-events-none"
            >
                {tooltipText}
            </span>
        </div>
    );

    if (link) {
        return (
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-slide-in-left"
            >
                {content}
            </Link>
        )
    } else if (copy_string) {
        return (
            <button
                onClick={() => {
                    setTooltipText("Copied!");
                    setTimeout(() => setTooltipText(tooltip), 2000);
                    navigator.clipboard.writeText(copy_string)}
                }
                className="block animate-slide-in-left"
            >
                {content}
            </button>
        )
    }

}
