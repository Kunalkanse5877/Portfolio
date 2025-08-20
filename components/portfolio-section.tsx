"use client"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, ExternalLink, Heart } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "@/components/project-modal"

const projects = [
  {
    id: 1,
    title: "Glowly Emotional Support App Ui Deisgn",
    category: "UI/UX Design",
    image: "/modern-mobile-app-interface.png",
    description: "Glowly is a UI/UX concept app designed to provide a safe space for emotional well-being. It helps users track moods, express feelings, and access self-care tools through a calming, empathetic interface. My focus was on creating a minimal, soothing design that promotes comfort, ease of use, and emotional support.",
    tools: ["Figma", "Photoshop", "Notion"],
    role: "UI/UX Designer",
    process: "User research, wireframing, prototyping, usability testing",
    outcome: "40% increase in user engagement and 25% boost in conversion rates",
    images: ["\Cover Image.jpg","/Mockup png.jpg","Artboard 9.jpg","/Artboard 6.jpg"]
  },
  {
    id: 2,
    title: "Logo Designs",
    category: "Graphic Design",
    image: "/Logo1.jpeg",
    description: "A logo is more than just a symbol -it’s the visual identity of a brand. I design logos that are simple, memorable, and versatile, ensuring they communicate the brand’s essence while standing out in any context. Each design blends creativity with strategy to build strong and lasting impressions.",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    role: "Brand Designer",
    process: "Brand strategy, logo design, visual identity, brand guidelines",
    outcome: "Successful brand launch with 200% increase in brand recognition",
    images: ["/Logo1.jpeg", "/Logo2.png", "/Logo3.jpg","/l1.jpg", "/l2.jpg"],
  },
  {
    id: 3,
    title: "Faculty Achievment App UI Design",
    category: "UI/UX Design",
    image: "/modern-dashboard-interface.png",
    description: "A UI/UX design project that showcases faculty accomplishments in a structured and engaging way. The app allows faculties to add, manage, and highlight their achievements with a clean, intuitive interface focused on accessibility and professionalism.",
    tools: ["Figma", "Photoshop","Notion"],
    role: "UX Designer",
    process: "User interviews, information architecture, wireframing, prototyping",
    outcome: "Reduced user task completion time by 60% and improved satisfaction scores",
    images: ["/1.png", "/2.jpg", "/3.png"],
  },
  {
    id: 4,
    title: "Product Packeging Design",
    category: "Graphic Design",
    image: "/P1.jpg",
    description: "Designed elegant and modern packaging for a beauty product that reflects sophistication and trust. The packaging combines minimal aesthetics with soft, appealing colors to highlight the product’s purity and premium quality. Typography and layout were carefully chosen to ensure readability while enhancing the brand’s luxurious feel. The design not only protects the product but also creates a memorable unboxing experience that connects emotionally with customers.",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    role: "Creative Director",
    process: "Concept development, visual identity, print design, digital assets",
    outcome: "Festival sold out in 48 hours, 500% social media engagement increase",
    images: ["/P1.jpg", "/P2.png", "/P3.png", "/pp1.png", "/pp5.png"],
  },
  {
  id: 5,
  title: "Social Media Posts Designs",
  category: "Graphics Design",
  image: "/ss1.jpg",
  description: "Creative and engaging social media post designs crafted to attract attention, maintain brand consistency, and drive audience interaction. The designs balance aesthetics with strategy, ensuring that each post is visually appealing while effectively communicating the intended message across platforms.",
  tools: ["Photoshop", "Illustrator", "Canva"],
  role: "Graphic Designer",
  process: "Concept creation, layout design, color palette selection, typography, final design delivery",
  outcome: "Increased online visibility, improved audience engagement, and stronger brand identity",
    images: [
      "/ss1.jpg?height=400&width=400",
      "/ss2.jpg?height=400&width=400",
      "/ss3.jpg?height=400&width=400",
      "/SalesForce Developer Wk.jpg",
      "/s1.jpg?height=400&width=400",
    ],
  },
    {
    id: 6,
    title: "Ads Design",
    category: "Graphic Design",
    image: "/ad1.jpg",
    description: "A collection of creative advertisement campaigns and engaging social media post designs crafted to capture attention and deliver brand messages effectively. Focused on combining visual aesthetics with clear communication, these designs aim to enhance brand visibility and connect with the target audience in a visually appealing way.",
    tools: ["Photoshop", "ChatGpt", "Canva"],
    role: "Lead Editor",
    process: "Concept development, layout design, typography selection, revisions, and final design delivery",
    outcome: "Boosted audience engagement, improved brand presence, and contributed to consistent visual identity",
    images: [
      "/ad1.jpg",
      "/ad2.jpg",
      "/ad3.jpg",
      "/s1.jpg",
    ],
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [filter, setFilter] = useState("All")
  const [likedProjects, setLikedProjects] = useState<number[]>([])

  const categories = ["All", "UI/UX Design", "Graphic Design",]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  return (
    <section id="portfolio" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-7">
            A curated selection of projects showcasing my expertise across different design disciplines
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              size="sm"
              className={filter === category ? "bg-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border hover:border-primary/50"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(`https://www.behance.net/kunalkanse2`, "_blank")}
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <button
                  onClick={() => toggleLike(project.id)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${
                      likedProjects.includes(project.id) ? "text-red-500 fill-red-500" : "text-white"
                    }`}
                  />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                    {project.category}
                  </Badge>
                  {likedProjects.includes(project.id) && <span className="text-xs text-muted-foreground">Liked</span>}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tool}
                    </Badge>
                  ))}
                  {project.tools.length > 3 && (
                    <Badge variant="outline" className="text-xs px-3 py-1">
                      +{project.tools.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
