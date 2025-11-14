"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

const navItems = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  const leftSideRef = useRef<HTMLDivElement>(null)
  const rightSideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !navbarRef.current || !leftSideRef.current || !rightSideRef.current) return

    const navbar = navbarRef.current
    const leftSide = leftSideRef.current
    const rightSide = rightSideRef.current

    // Navbar'ı ortadan başlat
    gsap.set(navbar, { scaleX: 0, transformOrigin: "center" })
    gsap.set(leftSide, { x: -50, opacity: 0 })
    gsap.set(rightSide, { x: 50, opacity: 0 })

    // Timeline oluştur
    const tl = gsap.timeline()

    // Navbar ortadan iki yana açıl
    tl.to(navbar, {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out",
    })
      // Sol taraf animasyonu
      .to(
        leftSide,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      // Sağ taraf animasyonu
      .to(
        rightSide,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
  }, [mounted])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-4">
      <div
        ref={navbarRef}
        className="relative w-full max-w-[800px] h-[75px] rounded-full flex items-center justify-between px-6 sm:px-8 md:px-10 border border-white/10 bg-black/40 backdrop-blur-[20px] shadow-lg"
      >
        {/* Inner vignette lighting effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-white/5 to-transparent rounded-full" />
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent rounded-full" />
        </div>

        {/* Left side: Logo + Text */}
        <div ref={leftSideRef} className="relative z-10 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 relative">
              <Image
                src="/assets/logo 1.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Umut Erol
            </span>
          </Link>
        </div>

        {/* Right side: Nav Links + Theme Toggle + CTA */}
        <div ref={rightSideRef} className="relative z-10 flex items-center gap-6 md:gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 text-sm font-medium hover:text-white hover:opacity-100 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle - Only render after mount to prevent hydration mismatch */}
          {mounted && (
            <div className="flex items-center">
              <ThemeTogglerButton modes={["light", "dark"]} />
            </div>
          )}

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <LiquidButton asChild>
              <Link href="mailto:umuteroltr097@gmail.com">Reach Out</Link>
            </LiquidButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
