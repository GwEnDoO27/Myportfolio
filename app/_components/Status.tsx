/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card"
import { ArrowUpRight, BrainCircuit, ChefHat, Container, Landmark, LucideIcon, Network, Receipt } from "lucide-react"
import Myface from "./assets/MyfaceRound.png"
import { Section } from "./Section"
import Link from "next/link"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-3">
            <div className="flex-[3] w-full flex flex-col gap-3">
                <Card className="p-4 w-full flex flex-col gap-1">
                    <SectionLabel>Side & fun projects</SectionLabel>
                    <div className="flex flex-col mt-1">
                        {SIDE_PROJECTS.map((project, index) => (
                            <ProjectItem key={index} {...project} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 w-full flex flex-col gap-1">
                    <SectionLabel>Experience</SectionLabel>
                    <div className="flex flex-col mt-2">
                        {EXPERIENCES.map((exp, index) => (
                            <ExperienceItem key={index} {...exp} isLast={index === EXPERIENCES.length - 1} />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-3">
                <Card className="p-4 w-full flex flex-col gap-1">
                    <SectionLabel>School&rsquo;s projects</SectionLabel>
                    <div className="flex flex-col mt-1">
                        {SCHOOL_PROJECTS.map((project, index) => (
                            <ProjectItem key={index} {...project} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-1">
                    <SectionLabel>Contact me</SectionLabel>
                    <div className="mt-2">
                        <ContactCard
                            name="Gwendal Bénard"
                            image={Myface.src}
                            mediumImage="https://get-picto.com/wp-content/uploads/2023/02/logo-linkedin.webp"
                            description="My LinkedIn"
                            url="https://www.linkedin.com/in/gwendal-bénard-217554304"
                        />
                    </div>
                </Card>
            </div>
        </Section>
    )
}

// ─── Section label ────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-2 mb-1">
        <span className="w-1 h-4 rounded-full bg-primary/70 shrink-0" />
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{children}</p>
    </div>
)

// ─── Projects ─────────────────────────────────────────────────────────────────

type ProjectItemProps = {
    Logo: LucideIcon
    title: string
    description: string
    url: string
}

const SIDE_PROJECTS: ProjectItemProps[] = [
    {
        Logo: BrainCircuit,
        title: "Tiktok Recette Transcriber",
        description: "Add a link for a cooking TikTok video and get the recipe back as a note",
        url: "https://github.com/GwEnDoO27/Recette_Tiktok_transcriber.git"
    },
    {
        Logo: Receipt,
        title: "Ma Facture",
        description: "A tool to create your invoice",
        url: "https://ma-facture-eight.vercel.app/"
    },
    {
        Logo: Network,
        title: "Monitoring Serv",
        description: "An app for monitoring servers",
        url: "https://github.com/GwEnDoO27/FilesOrganisationForProject",
    },
    {
        Logo: ChefHat,
        title: "Tinder Recipes",
        description: "A little app to find recipes based on tinder swipe",
        url: "https://github.com/GwEnDoO27/tinder-recipes"
    },
]

const SCHOOL_PROJECTS: ProjectItemProps[] = [
    {
        Logo: Network,
        title: "Crud Master",
        description: "Learning multi apis network",
        url: "https://github.com/GwEnDoO27/School-Project/tree/main/Real%20Time%20Forum"
    },
    {
        Logo: Container,
        title: "Play With Container",
        description: "Learn Docker in depth",
        url: "https://github.com/GwEnDoO27/School-Project/tree/main/Make%20ur%20game/make-your-game"
    },
    {
        Logo: Landmark,
        title: "ATM Management System",
        description: "Terminal ATM in C",
        url: "https://github.com/GwEnDoO27/School-Project/tree/main/atm-management-system"
    },
]

const ProjectItem = ({ Logo, title, description, url }: ProjectItemProps) => (
    <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 p-2 rounded-md hover:bg-accent/40 transition-colors"
    >
        <span className="bg-accent/60 border border-border text-accent-foreground p-2.5 rounded-md shrink-0 group-hover:border-primary/30 transition-colors">
            <Logo size={16} />
        </span>
        <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{title}</p>
            <p className="text-xs text-muted-foreground truncate">{description}</p>
        </div>
        <ArrowUpRight
            size={14}
            className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />
    </Link>
)

// ─── Experience ───────────────────────────────────────────────────────────────

type ExperienceProps = {
    role: string
    company: string
    period: string
    description: string
    current?: boolean
    isLast?: boolean
}

const EXPERIENCES: Omit<ExperienceProps, "isLast">[] = [
    {
        role: "Full Stack Developer",
        company: "Cabinet Martini",
        period: "2024 — Present",
        description: "Building company infrastructure and custom software solutions.",
        current: true,
    },
]

const ExperienceItem = ({ role, company, period, description, current, isLast }: ExperienceProps) => (
    <div className="flex gap-3">
        <div className="flex flex-col items-center pt-1">
            {current ? (
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
            ) : (
                <span className="w-2.5 h-2.5 rounded-full border-2 border-primary/50 shrink-0" />
            )}
            {!isLast && <span className="w-px flex-1 bg-border mt-1.5" />}
        </div>
        <div className={`flex flex-col gap-0.5 ${!isLast ? "pb-4" : ""}`}>
            <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold">{role}</p>
                {current && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                        Current
                    </span>
                )}
            </div>
            <p className="text-sm text-primary/80 font-medium">{company}</p>
            <p className="text-xs text-muted-foreground">{period}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
        </div>
    </div>
)

// ─── Contact ──────────────────────────────────────────────────────────────────

const ContactCard = (props: {
    image: string
    mediumImage: string
    name: string
    description: string
    url: string
}) => (
    <Link href={props.url} target="_blank" rel="noopener noreferrer">
        <Card className="p-4 bg-accent/10 border-border hover:bg-accent/30 hover:border-primary/20 transition-colors group flex items-center gap-4">
            <div className="relative shrink-0">
                <img src={props.image} alt={props.name} className="w-14 h-14 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <p className="text-base font-semibold">{props.name}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight
                size={15}
                className="shrink-0 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mr-1"
            />
        </Card>
    </Link>
)
