/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";
import { SwiftIcon } from "../_components/icons/Swifticon";
import Myface from "./assets/MyfaceRound.png";
import { Section } from "./Section";

const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
    return (
        <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 border-accent px-1 py-0.5 text-primary rounded-sm")} {...props} />
    );
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold  text-5xl text-primary">Gwendal Bénard</h2>
                <h3 className="text-3xl font-caption">Full Stack Developer</h3>
                <p className="text-base">
                    Hi, I&apos;m Gwendal, a full-stack developer in internship. I&apos;m passionate about software app development with
                    <Code className="inline-flex items-center gap-1">
                        <SwiftIcon size={16} className="inline" /> Swift
                    </Code>. I also love working with AI and creating AI-powered apps for fun.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-32 ">
                <img
                    src={Myface.src}
                    className="w-full h-auto max-w-xs max-md:w-56"
                    alt="Gwendal Benard" />
            </div>
        </Section>
    );
}