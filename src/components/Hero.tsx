"use client";
import { TypeAnimation } from "react-type-animation";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center max-w-4xl pt-10">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
        Hi, I&apos;m <br className="sm:hidden" />
        <span className="inline-flex flex-wrap items-baseline gap-x-2 font-mono text-[0.88em] leading-none text-gold-500">
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

      <div className="flex items-center gap-6 mt-12">
        <a href="https://github.com/nikhilnama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:-translate-y-1 duration-200">
          <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://linkedin.com/in/nikhilnama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:-translate-y-1 duration-200">
          <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://leetcode.com/u/nikhilnama/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:-translate-y-1 duration-200">
          <SiLeetcode className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://twitter.com/nikhilnama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:-translate-y-1 duration-200">
          <FaXTwitter className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="mailto:contact@nikhilnama.com" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:-translate-y-1 duration-200">
          <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </section>
  );
}
