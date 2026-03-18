import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GoIcons } from "./icons/GoIcons";
import { PythonLogo } from "./icons/PythonLogo";
import { SwiftIcon } from "./icons/Swifticon"
import { KubetIcon } from "./icons/Kubeicon"
import { DockerIcons } from './icons/DockerIcons'
import { Section } from "./Section";

type SkillCardProps = {
    icon: React.ReactNode
    name: string
    description: string
    tags: string[]
    accent: string
}

const SKILLS: SkillCardProps[] = [
    {
        icon: <PythonLogo size={28} />,
        name: "Python",
        description: "My main language. Used for AI projects, automation, and data analysis.",
        tags: ["FastAPI", "OpenAI", "Pandas", "Automation"],
        accent: "bg-blue-500/10 border-blue-500/20",
    },
    {
        icon: <GoIcons size={28} />,
        name: "Golang",
        description: "My go-to language for high-performance web servers and desktop applications.",
        tags: ["REST API", "CLI", "Gin", "Desktop"],
        accent: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
        icon: <SwiftIcon size={28} />,
        name: "Swift",
        description: "Native iOS and macOS app development using SwiftUI.",
        tags: ["SwiftUI", "iOS", "macOS", "Xcode"],
        accent: "bg-orange-500/10 border-orange-500/20",
    },
    {
        icon: <DockerIcons size={28} />,
        name: "Docker",
        description: "Containerizing applications for reproducible and isolated deployments.",
        tags: ["Containers", "Docker Compose", "Images", "Registry"],
        accent: "bg-sky-500/10 border-sky-500/20",
    },
    {
        icon: <KubetIcon size={28} />,
        name: "Kubernetes",
        description: "Container orchestration for scalable and resilient architectures.",
        tags: ["Pods", "Helm", "Ingress", "CI/CD"],
        accent: "bg-violet-500/10 border-violet-500/20",
    },
]

const SkillCard = ({ icon, name, description, tags, accent }: SkillCardProps) => (
    <Card className={`p-5 flex flex-col gap-4 border hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 ${accent}`}>
        <div className="flex items-center gap-3">
            <span className="p-2 rounded-md bg-background/60 border border-border/60">
                {icon}
            </span>
            <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5 text-muted-foreground">
                    {tag}
                </Badge>
            ))}
        </div>
    </Card>
)

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-1">
                <Badge variant="outline">Skills</Badge>
                <h2 className="text-3xl font-semibold tracking-tight mt-2">What I Do</h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 w-full">
                {SKILLS.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
            </div>
        </Section>
    );
};
