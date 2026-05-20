"use client";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section id="about" className="min-h-[60vh] flex flex-col justify-center max-w-6xl pt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white mb-2">
        Hi, I&apos;m{" "}
        <span className="inline-flex flex-nowrap items-baseline gap-x-1 sm:gap-x-2 whitespace-nowrap font-mono text-[0.76em] sm:text-[0.84em] leading-none text-gold-500">
          <span className="text-white/70">{`{`}</span>
          <TypeAnimation
            sequence={[
              "Nikhil Nama",
              3000,
              "a Developer",
              1000,
              "Nikhil Nama",
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={true}
          />
          <span className="text-white/70">{`};`}</span>
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mt-8 leading-relaxed">
        I build premium, responsive digital experiences. Passionate about crafting elegant solutions to complex problems using modern web technologies. I specialize in React, Next.js, and crafting beautiful UI/UX.
      </p>

      <SocialLinks />
    </section>
  );
}
