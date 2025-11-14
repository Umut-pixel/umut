"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="container mx-auto w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <div className="text-foreground/80 text-sm font-normal">
            Umut Erol
          </div>

          {/* Center - Social Media Icons */}
          <div className="flex items-center gap-6">
            <Link
              href="https://x.com/BomboloaCat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/umuttheus/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/umut-erol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Right side */}
          <div className="text-foreground/80 text-sm font-normal">
            @2025 by{" "}
            <Link
              href="https://github.com/Umut-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/80 transition-colors underline"
            >
              umut-pixel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

