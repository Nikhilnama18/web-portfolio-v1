

# Project: Liquid Glass & Gold Portfolio

## 🎯 What We Are Building
This project is a premium, highly-polished, and responsive developer portfolio for Nikhil Nama. It serves as a personal brand statement as much as a display of technical skill. The codebase is designed to be highly modular so that anyone could potentially fork it, update the data, and use it as a premium template.

## 🎨 UI & Experience Target
- **Theme**: Deep dark off-black (`#0f0f11`) background with warm gold (`#d4af37`) accents. NEVER use pure black or stark white unless strictly necessary.
- **Aesthetic**: "Liquid Glass". We heavily utilize frosted glass effects (`backdrop-blur`, `bg-white/5`, `border-white/10`) for components like the navigation bar and layout cards.
- **Interactions**: 
  - **Spotlight**: A subtle radial gold gradient tracks the user's mouse on desktop (`Spotlight.tsx`).
  - **Micro-animations**: Use Framer Motion for layout transitions (e.g., the glowing active tab pill) and simple Tailwind transforms (`hover:-translate-y-1`) for interactive elements like social links.
  - **Typing Effect**: The Hero section features a dynamic looping typing animation.
- **Typography**: Modern and clean, using the `Inter` font. Large, bold headings.
- **The "Plane.so" Footer**: The final section of the page will be a massive, screen-spanning typography piece of the name "Nikhil Nama".

## 📁 Folder Structure & Logic Map
The project uses Next.js App Router (`src/app`) with Tailwind CSS v4 and TypeScript.

```text
src/
├── app/
│   ├── layout.tsx      # Main HTML structure. Imports Inter font, applies global dark background, and mounts global UI like <Spotlight /> and <LiquidNav />.
│   ├── page.tsx        # The main landing page. A scrollable container that stacks all semantic <section> components (Hero, Experience, Projects, etc.).
│   └── globals.css     # Global CSS. Defines custom Tailwind @theme colors (gold-500, etc.) and custom utilities (.no-scrollbar).
├── components/
│   ├── LiquidNav.tsx   # Fixed bottom navigation. Glassmorphic pill shape. Uses IntersectionObserver (planned) or scroll spy logic to highlight active tab. Uses Framer Motion for the glowing gold layout indicator.
│   ├── Spotlight.tsx   # "use client" component tracking mouse coordinates to render the gold background glow on desktop.
│   ├── Hero.tsx        # Top section containing the "Hi, I'm" react-type-animation and react-icons social links.
│   └── ...             # Future components: ExperienceCard, ProjectCard, SkillPill, etc.
└── data/               # (Planned) Will contain all the static data objects (projects, experience array) so UI components remain generic and reusable.
```

## 🛠️ Developer Rules for AI Agents
1. **Always Use Existing Colors**: Reference Tailwind colors defined in `globals.css` (e.g., `text-gold-500`, `bg-gold-500/10`).
2. **Client vs Server Components**: Components that use hooks (`useState`, `useEffect`, `useRef`) or `framer-motion` MUST be explicitly marked with `"use client";` at the very top of the file.
3. **Responsiveness**: Ensure all components degrade gracefully. For example, `LiquidNav` collapses text to an icons-only view below the `md` (768px) breakpoint using `md:block` and `hidden` classes.
4. **Icons**: We use `react-icons/fa6` and `react-icons/si` for brand logos (GitHub, Twitter, LeetCode). Do NOT attempt to use `lucide-react` for brand logos as they have been removed. We DO use `lucide-react` for generic UI icons (Mail, Briefcase, User, etc.).
