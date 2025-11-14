"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  quote: string
  company: string
  avatar: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    quote: "This platform transformed how we analyze data. Incredible insights!",
    company: "TechCorp",
    avatar: "",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    quote: "The best analytics tool we've ever used. Highly recommend!",
    company: "DataFlow Inc",
    avatar: "",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    quote: "Game-changing analytics that saved us countless hours.",
    company: "InnovateLabs",
    avatar: "",
    initials: "ER",
  },
  {
    name: "David Kim",
    quote: "Finally, analytics that make sense. Outstanding product!",
    company: "CloudScale",
    avatar: "",
    initials: "DK",
  },
  {
    name: "Lisa Anderson",
    quote: "The insights we get are invaluable. Truly intelligent!",
    company: "FutureTech",
    avatar: "",
    initials: "LA",
  },
  {
    name: "James Wilson",
    quote: "Best investment we made this year. Exceptional platform!",
    company: "NextGen Solutions",
    avatar: "",
    initials: "JW",
  },
  {
    name: "Maria Garcia",
    quote: "Our data strategy improved dramatically. Love it!",
    company: "SmartData",
    avatar: "",
    initials: "MG",
  },
  {
    name: "Robert Taylor",
    quote: "Intuitive, powerful, and exactly what we needed.",
    company: "Analytics Pro",
    avatar: "",
    initials: "RT",
  },
  {
    name: "Jennifer Lee",
    quote: "The analytics platform we've been waiting for. Amazing!",
    company: "DataViz Co",
    avatar: "",
    initials: "JL",
  },
  {
    name: "Christopher Brown",
    quote: "Outstanding performance and incredible user experience.",
    company: "InsightHub",
    avatar: "",
    initials: "CB",
  },
]

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="min-w-[320px] shrink-0 sm:min-w-[380px]">
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-foreground/80">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-muted/30 py-16">
      {/* Top Row - Animates Left */}
      <div className="mb-8 flex w-full overflow-hidden">
        <div className="flex animate-marquee-left gap-4 will-change-transform">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Animates Right */}
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-marquee-right gap-4 will-change-transform">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

