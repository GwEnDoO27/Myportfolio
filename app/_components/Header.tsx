import { cn } from "@/lib/utils"
import { Section } from "./Section"
import { GithubIcons } from "./icons/Githubicons"
import { LinkedinIcons } from "./icons/Linkedinicons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="sticky top-0 py-5 backdrop-blur-sm bg-background/80 border-b border-border/40">
            <Section className="flex items-center">
                <h1 className="text-xl font-bold text-primary">Gwendal Bénard</h1>
                <div className="flex-1"></div>
                <ul className="flex items-center gap-2">
                    <Link
                        href="https://github.com/GwEnDoO27"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={cn(buttonVariants({ variant: "outline" }), "size-9 p-0")}>
                        <GithubIcons size={16} className="text-foreground" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/gwendal-bénard-217554304"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={cn(buttonVariants({ variant: "outline" }), "size-9 p-0")}>
                        <LinkedinIcons size={16} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}