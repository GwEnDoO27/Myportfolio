/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ArrowUpRight, FolderCode, Gamepad, Home, Landmark, LucideIcon, MessageSquareText, Waves } from "lucide-react"
import Myface from "./assets/MyfaceRound.png"

import Link from "next/link"

export const Status = () => {
    return (
        <Section classname="flex max-md:flex-col items-start gap-3">
            <div className="flex-[3] w-full">
                <Card className="p-4 w-full flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">School&rsquo;s projects</p>
                    {SCHOOL_Project.map((project, index) => (
                        <SideProject
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url="/"
                        />
                    ))}
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 w-full flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side and funs projects</p>
                    {SIDE_Project.map((school, index) => (
                        <Schoolprojects
                            key={index}
                            Logo={school.Logo}
                            title={school.title}
                            description={school.description}
                            url="/"
                        />
                    ))}
                </Card>
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                        name="Gwendal Bénard"
                        image={Myface.src}
                        mediumImage="https://get-picto.com/wp-content/uploads/2023/02/logo-linkedin.webp"
                        description="My LinkedIn"
                    />
                </Card>
            </div>
        </Section>
    );
};

const SIDE_Project = [
    {
        Logo: FolderCode,
        title: "FilesOrganisationForProject",
        description: "A tool for creating the architecture of your project"
    },
    {
        Logo: Waves,
        title: "Adjust-Your-Piscine-Water",
        description: "Help you to adjust your pool water"
    },


]
const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>


    )
}

type Schoolprojectsprops = {
    Logo: LucideIcon
    title: string
    description: string
    url: string
}




const SCHOOL_Project = [
    {
        Logo: MessageSquareText,
        title: "Real Time Forum",
        description: "Single page application for a forum with instant messaging "
    },
    {
        Logo: Landmark,
        title: "ATM Management Systeme",
        description: "Terminal ATM in C"
    },
    {
        Logo: Gamepad,
        title: "Make your game",
        description: "Reproduce the duck hunt game in whith Javascript"
    },


]

type SideProjectProps = {
    Logo: LucideIcon
    title: string
    description: string
    url: string
}



const Schoolprojects = (props: Schoolprojectsprops) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>


    )
}

const ContactCard = (props: {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
    )
}