"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom reporting",
      "Data visualization",
    ],
  },
  {
    title: "Web Development",
    description:
      "Build modern, scalable web applications with cutting-edge technologies and best practices.",
    features: [
      "Full-stack development",
      "API integration",
      "Performance optimization",
      "Responsive design",
    ],
  },
  {
    title: "Consulting",
    description:
      "Expert guidance on technology strategy, architecture, and implementation for your business needs.",
    features: [
      "Technical strategy",
      "Architecture design",
      "Code reviews",
      "Team mentoring",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="container mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Services
          </h2>
          <Separator className="mx-auto mt-4 w-24" />
          <p className="mt-6 text-lg text-foreground/80">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

