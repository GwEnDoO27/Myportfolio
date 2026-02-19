import { Badge } from "@/components/ui/badge";
import { GoIcons } from "./icons/GoIcons";
import { PythonLogo } from "./icons/PythonLogo";
import { SwiftIcon } from "./icons/Swifticon";
import { Section } from "./Section";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                What I Do
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <PythonLogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
                    <p className="text-sm text-muted-foreground">The language I use the most. AI projects, automation and data analysis.</p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <GoIcons size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Golang</h3>
                    <p className="text-sm text-muted-foreground">Language for all my web servers. Also used for desktop apps.</p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <SwiftIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Swift</h3>
                    <p className="text-sm text-muted-foreground">Language for iOS and macOS app development.</p>
                </div>
            </div>
        </Section>
    );
};