"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, ArrowLeft, Search } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "@/components/project-modal"
import Link from "next/link"
import { Input } from "@/components/ui/input"

const allProjects = [
  {
    id: 1,
    title: "E-commerce Mobile App",
    category: "UI/UX Design",
    image: "/modern-mobile-app-interface.png",
    description: "Complete mobile app redesign for a fashion e-commerce platform",
    tools: ["Figma", "Principle", "Adobe XD"],
    role: "Lead UI/UX Designer",
    process: "User research, wireframing, prototyping, usability testing",
    outcome: "40% increase in user engagement and 25% boost in conversion rates",
    images: ["/mobile-app-login.png", "/placeholder-vl707.png", "/mobile-checkout-flow.png"],
    year: "2024",
    client: "Fashion Forward Inc.",
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Graphic Design",
    image: "/modern-brand-logo.png",
    description: "Complete brand identity design for a sustainable tech startup",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    role: "Brand Designer",
    process: "Brand strategy, logo design, visual identity, brand guidelines",
    outcome: "Successful brand launch with 200% increase in brand recognition",
    images: ["/brand-logo-variations.png", "/modern-business-card.png", "/placeholder-6igeg.png"],
    year: "2024",
    client: "EcoTech Solutions",
  },
  {
    id: 3,
    title: "Product Launch Video",
    category: "Video Editing",
    image: "/placeholder-litw2.png",
    description: "Dynamic product launch video with motion graphics and animations",
    tools: ["Premiere Pro", "After Effects", "Cinema 4D"],
    role: "Video Editor & Motion Designer",
    process: "Storyboarding, filming, editing, motion graphics, color grading",
    outcome: "1M+ views across social platforms, 300% engagement increase",
    images: ["/video-storyboard-frames.png", "/motion-graphics-elements.png", "/video-color-grading.png"],
    year: "2023",
    client: "TechNova",
  },
  {
    id: 4,
    title: "SaaS Dashboard Design",
    category: "UI/UX Design",
    image: "/modern-dashboard-interface.png",
    description: "Analytics dashboard for a B2B SaaS platform with complex data visualization",
    tools: ["Figma", "Sketch", "Principle"],
    role: "Senior UX Designer",
    process: "User interviews, information architecture, wireframing, prototyping",
    outcome: "Reduced user task completion time by 60% and improved satisfaction scores",
    images: ["/dashboard-overview.png", "/data-visualization-charts.png", "/mobile-dashboard-responsive.png"],
    year: "2023",
    client: "DataFlow Analytics",
  },
  {
    id: 5,
    title: "Music Festival Branding",
    category: "Graphic Design",
    image: "/music-festival-poster.png",
    description: "Complete visual identity for an electronic music festival",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    role: "Creative Director",
    process: "Concept development, visual identity, print design, digital assets",
    outcome: "Festival sold out in 48 hours, 500% social media engagement increase",
    images: ["/placeholder-p9ttt.png", "/festival-merchandise-design.png", "/placeholder.svg?height=400&width=600"],
    year: "2023",
    client: "Pulse Festival",
  },
  {
    id: 6,
    title: "Documentary Film Edit",
    category: "Video Editing",
    image: "/placeholder.svg?height=400&width=600",
    description: "Feature-length documentary about climate change and sustainability",
    tools: ["Premiere Pro", "DaVinci Resolve", "Pro Tools"],
    role: "Lead Editor",
    process: "Story structure, rough cut, fine cut, color correction, sound design",
    outcome: "Selected for 5 film festivals, won Best Editing award",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    year: "2022",
    client: "Green Earth Productions",
  },
  {
    id: 7,
    title: "Restaurant Brand Package",
    category: "Graphic Design",
    image: "/placeholder-hpjvp.png",
    description: "Complete brand identity and packaging design for artisan restaurant",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    role: "Brand Designer",
    process: "Brand strategy, logo design, packaging, menu design, signage",
    outcome: "30% increase in customer retention and brand recognition",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    year: "2023",
    client: "Artisan Bistro",
  },
  {
    id: 8,
    title: "Corporate Training Video",
    category: "Video Editing",
    image: "/corporate-training-video.png",
    description: "Educational video series for employee onboarding and training",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    role: "Video Producer & Editor",
    process: "Script development, filming, editing, motion graphics, sound design",
    outcome: "90% completion rate and positive feedback from 500+ employees",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    year: "2022",
    client: "Global Corp",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[0] | null>(null)
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [likedProjects, setLikedProjects] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("newest")

  const categories = ["All", "UI/UX Design", "Graphic Design", "Video Editing"]

  let filteredProjects = allProjects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tools.some((tool) => tool.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Sort projects
  if (sortBy === "newest") {
    filteredProjects = filteredProjects.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
  } else if (sortBy === "oldest") {
    filteredProjects = filteredProjects.sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))
  }

  const toggleLike = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-16 px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my complete portfolio of design work across UI/UX, graphic design, and video editing
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-12 px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
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

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-md bg-background"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
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
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <button
                    onClick={(e) => toggleLike(project.id, e)}
                    className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-300 ${
                        likedProjects.includes(project.id) ? "text-red-500 fill-red-500" : "text-white"
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/40 text-white border-0">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tools.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              <Button
                onClick={() => {
                  setFilter("All")
                  setSearchTerm("")
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}
