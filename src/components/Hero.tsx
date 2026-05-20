"use client";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section id="about" className="min-h-[60vh] flex flex-col items-center justify-center text-center max-w-6xl mx-auto pt-56 pb-10">
      <div className="w-full max-w-5xl mx-auto text-left flex flex-col items-start px-4 sm:px-0">
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

        {/* TLDR */}
        <div className="mt-8 w-full text-left">
          <span className="block text-gold-500 font-bold tracking-widest uppercase mb-2 text-sm">TL;DR</span>
          <p className="text-base sm:text-lg font-medium text-white/50 tracking-wide">
            I&apos;m a Full-Stack Engineer with <span className="text-white">3.5+</span> years of experience building software in <span className="text-white">Java(Spring Boot)</span>, <span className="text-white">React</span>, <span className="text-white">Next.js</span>, <span className="text-white">Node &amp; MySQL.</span>
          </p>
        </div>

        {/* Professional Summary */}
        <div className="w-full mt-10 text-left">
          <span className="block text-gold-500 font-bold tracking-widest uppercase mb-4 text-sm">Professional Summary</span>
          <div className="text-lg sm:text-xl text-gray-400 leading-relaxed space-y-4">
            <p><span className="text-3xl sm:text-4xl font-bold text-white mr-[1px] leading-none">M</span>y experience spans full-stack development with React, Next.js, Java/Spring Boot, Node.js, MySQL, Redis, DynamoDB, and cloud-based systems on GCP.</p>
            <p>I&apos;ve worked across a wide range of product and engineering areas, including comments, review links, team management, onboarding, pricing workflows, and third-party integrations.</p>
            <p>I&apos;ve built scalable APIs, event-driven workflows, access-control systems, search-powered features, and reusable UI modules for high-traffic product experiences.</p>
            <p>I enjoy building software that combine clean user experience with reliable backend systems.</p>
          </div>
        </div>
      </div>

      <SocialLinks />
    </section>
  );
}
