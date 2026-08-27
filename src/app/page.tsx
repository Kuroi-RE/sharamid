"use client";

import Threads from "@/components/Threads";
import ParticleText from "@/components/ParticleText";
import SplashCursor from "@/components/SplashCursor";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const links: SocialLink[] = [
  {
    label: "Portfolio",
    href: "https://shaa.dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/your-username",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Splash Cursor fluid effect (fixed, full-screen, pointer-events-none) */}
      <SplashCursor />

      {/* Threads background — same defaults as the reactbits.dev example */}
      <div className="absolute inset-0 z-0">
        <Threads color={[1, 1, 1]} amplitude={1} distance={0} enableMouseInteraction />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-16">
        {/* Full-width so the particle container's clip edge sits at the screen
            edge (invisible), instead of drawing a visible box during transform. */}
        <div className="w-full">
          <ParticleText
            text="Sharam.id"
            particleSize={2.2}
            density={4}
            color="#ffffff"
            highlightColor="#c4b5fd"
            scatter={110}
            gatherDuration={1600}
            stagger={420}
            pointerRepel={42}
            repelRadius={120}
            idleDrift={0.8}
            trigger="mount"
            fontSize="clamp(3.5rem, 13vw, 9rem)"
            fontWeight={800}
            fontFamily="inherit"
            glow
            style={{ width: "100%", height: "42vh", minHeight: 300 }}
          />
        </div>

        <nav className="flex w-full max-w-sm flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              <span className="text-white/70 transition-colors group-hover:text-violet-300">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
