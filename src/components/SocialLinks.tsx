"use client";

import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    href: "https://drive.google.com/file/d/1nuWvqFGZ-niU50GsHrb_Tmt9FU2mNmWG/view?usp=drive_link",
    label: "Resume",
    icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    href: "https://github.com/Nikhilnama18/",
    label: "GitHub",
    icon: <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    href: "https://www.linkedin.com/in/nikhilnama18/",
    label: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    href: "https://leetcode.com/u/Nikhil_18/",
    label: "LeetCode",
    icon: <SiLeetcode className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    href: "https://x.com/Nick_1807",
    label: "X",
    icon: <FaXTwitter className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    href: "mailto:nikhilnama1111@gmail.com",
    label: "Email",
    icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-start gap-x-6 gap-y-4 mt-12">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className="group relative flex flex-col items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
        >
          {link.icon}
          <span className="text-[11px] font-medium text-gray-400 sm:hidden">
            {link.label}
          </span>
          <span className="pointer-events-none absolute left-1/2 top-full mt-3 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gold-500 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
