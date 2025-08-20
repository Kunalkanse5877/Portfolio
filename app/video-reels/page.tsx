"use client"

import { Button } from "@/components/ui/button"
import { Play, Volume2, ArrowLeft, Download, Filter } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function VideoReelsPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const videoReels = [
    {
      id: 1,
      title: "Motion Graphics Reel",
      thumbnail: "/video-editing-reel-thumbnail.png",
      duration: "2:30",
      category: "Motion Graphics",
      description: "Dynamic animations and visual effects showcase",
    },
    {
      id: 2,
      title: "Brand Identity Video",
      thumbnail: "/placeholder-gvf3x.png",
      duration: "1:45",
      category: "Branding",
      description: "Complete brand identity development process",
    },
    {
      id: 3,
      title: "UI Animation Showcase",
      thumbnail: "/ui-animation-showcase.png",
      duration: "3:15",
      category: "UI/UX",
      description: "Interactive UI animations and micro-interactions",
    },
    {
      id: 4,
      title: "Product Commercial",
      thumbnail: "/product-commercial-thumbnail.png",
      duration: "1:20",
      category: "Commercial",
      description: "High-end product showcase with cinematic quality",
    },
    {
      id: 5,
      title: "Social Media Content",
      thumbnail: "/social-media-thumbnail.png",
      duration: "0:45",
      category: "Social Media",
      description: "Engaging content for social media platforms",
    },
    {
      id: 6,
      title: "Corporate Presentation",
      thumbnail: "/corporate-presentation-thumbnail.png",
      duration: "4:30",
      category: "Corporate",
      description: "Professional corporate video presentation",
    },
  ]

  const categories = ["All", "Motion Graphics", "Branding", "UI/UX", "Commercial", "Social Media", "Corporate"]

  const filteredReels =
    selectedCategory === "All" ? videoReels : videoReels.filter((reel) => reel.category === selectedCategory)

  const handleDownload = (videoId: number) => {
    const link = document.createElement("a")
    link.href = `/demo-reel-${videoId}.mp4`
    link.download = `designer-video-reel-${videoId}.mp4`
    link.click()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-16 px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <Link href="/#video-reel">
            <Button variant="outline" className="mb-8 hover:scale-105 transition-all duration-300 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Video <span className="text-primary animate-glow">Reels</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Explore my complete collection of video editing and motion graphics work
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Filter className="w-5 h-5 text-muted-foreground mt-2 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReels.map((reel) => (
              <div
                key={reel.id}
                className="relative rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-2xl group hover:scale-105"
              >
                <div className="aspect-[9/16] relative">
                  <img
                    src={reel.thumbnail || "/placeholder.svg"}
                    alt={`${reel.title} Thumbnail`}
                    className="w-full h-full object-cover"
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {reel.category}
                  </div>

                  {playingVideo !== reel.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300">
                      <Button
                        size="lg"
                        onClick={() => setPlayingVideo(reel.id)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-20 h-20 animate-glow hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                    </div>
                  )}

                  {playingVideo === reel.id && (
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
                        <p className="text-white text-lg">Loading {reel.title}...</p>
                        <Button
                          onClick={() => setPlayingVideo(null)}
                          variant="outline"
                          className="mt-4 border-white text-white hover:bg-white hover:text-black"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-background/80 backdrop-blur-sm border-t border-primary/20">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{reel.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{reel.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{reel.duration}</span>
                    </div>
                    <Button
                      onClick={() => handleDownload(reel.id)}
                      variant="outline"
                      size="sm"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
