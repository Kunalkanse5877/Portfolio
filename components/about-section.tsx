"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const skills = [
  {
    category: "Graphic Design",
    tools: ["Photoshop", "Illustrator", "Typography", "Branding"],
    level: 95,
  },
  {
    category: "UI/UX Design",
    tools: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    level: 90,
  },
  {
    category: "Motion Graphics",
    tools: ["After Effects", "3D Animation", "Video Editing"],
    level: 85,
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-8 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                I'm Kunal Kanse, a creative and skilled Graphic & UI/UX Designer with a strong foundation in visual
                communication and design principles. Currently pursuing B.Tech in Computer Science and Business System
                at Bharati Vidyapeeth University, Navi Mumbai.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-light mb-6">
                With experience as a UI/UX Designer Intern at Vortexa Digital and Graphics Designer Intern at Infospire
                Technologies, I'm passionate about crafting visually stunning designs with attention to detail.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                I specialize in creating branding assets, marketing materials, digital illustrations, and animations
                using Adobe Creative Suite, Figma, and 3D animation tools.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-base font-medium transition-colors duration-200"
              onClick={() => window.open("https://gdrive.openinapp.co/epc6a", "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          <div
            className={`space-y-6 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700 delay-200`}
          >
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-foreground">{skill.category}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-1">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
