"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import BlurText from "@/components/BlurText"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface Project {
  number: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    number: "01",
    title: "Aygıt Builders - AI Powered WEB services",
    description:
      "An AI-powered SaaS platform that enables businesses to automate website creation, CRM management, and data analysis without writing a single line of code. I contributed to building the entire system using React, Node.js, and Supabase, focusing on integrating frontend and backend workflows, optimizing database structure, and implementing AI-driven automation features that streamline business operations.",
    technologies: ["JavaScript", "React", "PostgreSQL", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Umut-pixel/dashboard-aygit-website",
  },
  {
    number: "02",
    title: "Marinsco Brokerage Systems",
    description:
      "A maritime intelligence platform designed to analyze and match vessel and cargo data in real time. Using AI-based text parsing, Supabase databases, and n8n automation, it processes thousands of daily broker emails to extract structured information and generate meaningful matches. I built the full architecture — from backend APIs to data pipelines — ensuring high accuracy, scalability, and a modern, intuitive React interface.",
    technologies: ["Next.js", "n8n", "JavaScript", "React", "Python", "Supabase - PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Umut-pixel/marinsco-parser",
  },
]

export function Work() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('[data-project-card]')
    
    // Kartları başlangıçta gizle
    gsap.set(cards, { y: 80, opacity: 0 })

    // Scroll trigger ile animasyon
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              delay: index * 0.2,
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )

    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="work" className="w-full py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="container mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <BlurText
            text="My Projects"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center"
          />
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div data-project-card className="bg-black rounded-lg p-8 flex flex-col h-full border border-white/20 shadow-lg shadow-black/50">
      {/* Number and Title */}
      <div className="mb-6">
        <div className="text-6xl font-bold text-white mb-4">{project.number}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-white text-base leading-7 mb-6 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <p className="text-white font-bold mb-3">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-black border-white/20 text-white rounded-full px-4 py-1 text-sm font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="View project on GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  )
}
