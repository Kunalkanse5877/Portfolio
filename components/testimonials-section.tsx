"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Yash Chilap",
    role: "Co-Founder",
    company: "Infospire Technologies",
    content:
      "Exceptional work on our mobile app redesign. The user experience improvements led to a 40% increase in engagement.",
    rating: 5,
    avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?height=60&width=60",
  },
  {
    id: 2,
    name: "Nikhil Shirole",
    role: "Founder",
    company: "Shivar Hotel",
    content:
      "The brand identity created for our company perfectly captured our vision. Professional, creative, and delivered on time.",
    rating: 5,
    avatar: "https://img.freepik.com/freie-psd/3d-darstellung-eines-menschlichen-avatars-oder-profils_23-2150671122.jpg?height=60&width=60",
  },
  {
    id: 3,
    name: "Haseeb Biya",
    role: "ChairPerson",
    company: "Geeks For Geeks",
    content:
      "Outstanding video editing skills. The documentary edit was masterful and helped us win several festival awards.",
    rating: 5,
    avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg?height=60&width=60",
  },
]

const clients = [
  { name: "Lays", logo: "\Vortexa Logo.jpg?height=40&width=120" },
  { name: "GreenTech", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Porter-logo.png?height=40&width=120" },
  { name: "Indie Films", logo: "\Logo1.jpeg?height=40&width=120" },
  { name: "Creative Agency", logo: "\l1.jpg?height=40&width=120" },
  { name: "StartupX", logo: "\Logo.png?height=40&width=120" },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What clients say about working with me</p>
        </div>

        {/* Testimonial slider */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-xl text-muted-foreground mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Client logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground">Trusted by amazing clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
