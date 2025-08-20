"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div
        className={`text-center px-8 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-none text-foreground">
          Kunal Kanse
          <span className="block font-normal text-primary">Creative Designer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Graphic Designer • UI/UX Designer • Video Editor crafting meaningful visual experiences with creativity and
          precision
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-medium transition-colors duration-200"
          >
            View Work
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="px-8 py-3 text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={scrollToAbout}
          >
            About Me
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-12 max-w-sm mx-auto text-center">
          <div>
            <div className="text-2xl font-light text-foreground">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-light text-foreground">3+</div>
            <div className="text-sm text-muted-foreground mt-1">Years</div>
          </div>
          <div>
            <div className="text-2xl font-light text-foreground">6</div>
            <div className="text-sm text-muted-foreground mt-1">Specialties</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToPortfolio}>
        <ArrowDown className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
      </div>
    </section>
  )
}
