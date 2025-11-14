"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import ClickSpark from "@/components/ClickSpark"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Home() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sparkColor = mounted && resolvedTheme === "dark" ? "#fff" : "#000"

  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="w-full">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </ClickSpark>
  )
}
