"use client"

import Link from "next/link"
import Orb from "@/components/Orb"
import { Button } from "@/components/ui/button"
import ShinyText from "@/components/ShinyText"
import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"
import { gsap } from "gsap"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const tl = gsap.timeline()

    // Orb animation - blur'dan netliğe
    if (orbRef.current) {
      gsap.set(orbRef.current, { filter: "blur(20px)", opacity: 0 })
      tl.to(orbRef.current, {
        filter: "blur(0px)",
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      })
    }

    // Title animation - yukarıdan aşağıya (y ekseninden aşağıya)
    if (titleRef.current) {
      gsap.set(titleRef.current, { y: -100, opacity: 0 })
      tl.to(
        titleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1"
      )
    }

    // Buttons animation - yukarıdan aşağıya
    if (buttonsRef.current) {
      gsap.set(buttonsRef.current, { y: -100, opacity: 0 })
      tl.to(
        buttonsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.7"
      )
    }
  }, [mounted])

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Orb Background - Only render on client to avoid SSR issues */}
      {mounted && (
        <div ref={orbRef} className="absolute inset-0 z-0">
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="w-full max-w-4xl text-center mx-auto">
          {/* Main Text */}
          <h1
            ref={titleRef}
            className={`text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 ${
              mounted && resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            This orb is hiding
            <br />
            something, try hovering!
          </h1>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              asChild
              className={`rounded-full px-8 py-3 h-auto font-semibold text-base sm:text-lg transition-all duration-200 ${
                mounted && resolvedTheme === "light"
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              <Link href="mailto:umuteroltr097@gmail.com"> Contact Me</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-10 py-3 h-auto bg-white/10 hover:bg-white/20 border-white/30 backdrop-blur-md font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg"
            >
              <Link href="https://drive.google.com/file/d/1NvWUS4nbLuDkeKh2M-2Pbuu2EeiONO8u/view?usp=sharing" target="_blank">
                <ShinyText 
                  text="Download CV" 
                  disabled={false} 
                  speed={9}
                  className={mounted && resolvedTheme === "light" ? "text-black/80" : "text-white/80"}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

