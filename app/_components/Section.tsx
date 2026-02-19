import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
    return (
        <section className={cn("max-w-6xl px-4 m-auto gap-3", props.className)}>
            {props.children}
        </section>
    )
}