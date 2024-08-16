import { Section } from "./Section";
import { Badge } from "@/components/ui/badge"
import { PythonLogo } from "./icons/PythonLogo";
import { GoIcons } from "./icons/GoIcons";
import { Jsicons } from "./icons/JsIcons";

export const Skills = () => {
    return (
        <Section classname="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                What i do
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <GoIcons size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Golang</h3>
                    <p className="text-sm text-muted-foreground">It&rsquo;s my main backend language. I use it for server backend and also a bit of pur algorythm</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Jsicons size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Javascript</h3>
                    <p className="text-sm text-muted-foreground">Useful language for bettre reactivity betwenn back and frontend. </p>
                </div>
                <div className="flex flex-col gap-2">
                    <PythonLogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
                    <p className="text-sm text-muted-foreground">I use it for backend server too and for statistics projects</p>
                </div>
            </div>
        </Section>
    );
};