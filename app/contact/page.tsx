import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex max-w-[600px] gap-5">
                <ContactCard tooltip="Go to GitHub" icon="github" link="https://github.com/gurvir-dhillon1"/>
                <ContactCard tooltip="Go to LinkedIn" icon="linkedin" link="https://www.linkedin.com/in/gurvir-dhillon-802504295/"/>
                <ContactCard tooltip="Copy email" icon="email" copy_string="gurvirdhillonswe@gmail.com" />
            </div>
        </div>
    )
}
