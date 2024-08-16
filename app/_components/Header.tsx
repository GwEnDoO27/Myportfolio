import { cn } from "@/lib/utils"
import { Section } from "./Section"
import { GithubIcons } from "./icons/Githubicons"
import { LinkedinIcons } from "./icons/Linkedinicons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 ">
            <Section classname="flex items-baseline ">
                <h1 className="text-lg font-bold text-primary">Gwendal Benard</h1>
                <div className="flex-1"></div>
                <ul className="flex items-center gap-2">
                    <Link
                        href="https://github.com/GwEnDoO27"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <GithubIcons size={12} className="text-foreground" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/gwendal-bénard-217554304"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <LinkedinIcons size={12} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}