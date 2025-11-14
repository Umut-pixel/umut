"use client"

import { Separator } from "@/components/ui/separator"
import LogoLoop from "@/components/LogoLoop"
import TiltedCard from "@/components/TiltedCard"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb } from "react-icons/si"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
]

export function About() {
  return (
    <section id="about" className="w-full py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="container mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl max-w-3xl">
            About Me
          </h2>
          <Separator className="mt-4" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 max-w-2xl">
            <p className="text-base leading-7 text-foreground/90 font-normal">
              I'm a developer and problem-solver who thrives at the intersection of software, design, and systems
              thinking. My main focus is on full-stack development with React, Next.js, Node.js, and 
              Supabase—where I build reliable, fast, and thoughtfully-designed applications. 
              Code quality, user experience, and maintainable architecture are what drive my work.
            </p>
            <p className="text-base leading-7 text-foreground/90 font-normal">
            My journey began not in a straight line but through curiosity. From early experiments in 
            Python and C++ to professional projects involving React and backend automation, 
            I’ve built systems that merge technical precision with real-world usability. 
            Over time, I’ve expanded into areas like AI integration, automation pipelines 
            (n8n, Docker), and database engineering—turning abstract ideas into deployable, scalable products.
            </p>
            <p className="text-base leading-7 text-foreground/90 font-normal">
              Outside of coding, I lead and collaborate on civic and innovation-driven initiatives—building 
              youth programs, sustainability projects, and startup concepts that connect technology with community. 
              I value progress measured not just by what ships, but by what improves understanding and capability.
            </p>

          </div>

          <div className="flex items-center justify-center w-full">
            <TiltedCard
              imageSrc="/assets/profile-1.jpg"
              altText="Profile Photo"
              captionText="Umut Erol"
              containerHeight="500px"
              containerWidth="100%"
              imageHeight="500px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>
        </div>
      <br />
        {/* Logo Loop Section */}
        <div className="mt-16">
          <div className="mb-6 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold tracking-tight mb-2">
              Technologies I Work With
            </h3>
            <p className="text-muted-foreground text-base leading-7 font-normal">
              A selection of technologies and tools I use in my projects
            </p>
          </div>
          <div style={{ height: "120px", position: "relative", overflow: "hidden" }}>
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

