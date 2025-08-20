"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  X,
  ExternalLink,
  Eye,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Download,
  Play,
  Pause,
} from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  tools: string[]
  role: string
  process: string
  outcome: string
  images: string[]
  likes?: number
  durationDays?: number
}

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const images = project?.images || []
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(project.likes ?? 50)
  const [isImageFullscreen, setIsImageFullscreen] = useState(false)
  const [isAutoplay, setIsAutoplay] = useState(false)

  // Autoplay image slideshow
  useEffect(() => {
    if (isAutoplay && images.length > 1) {
      const interval = setInterval(() => {
        setSelectedImageIndex((prev) => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoplay, images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "ArrowLeft") navigateImage(-1)
      if (e.key === "ArrowRight") navigateImage(1)
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isOpen, onClose])

  const navigateImage = (direction: number) => {
    if (images.length <= 1) return
    setSelectedImageIndex((prev) => (prev + direction + images.length) % images.length)
  }

  const handleLike = () => {
    setIsLiked((prev) => !prev)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/projects/${project.id}`
    if (navigator.share) {
      await navigator.share({
        title: project.title,
        text: project.description,
        url: shareUrl,
      })
    } else {
      await navigator.clipboard.writeText(shareUrl)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full max-h-[95vh] overflow-y-auto bg-background border border-border/50 backdrop-blur-sm p-8 rounded-2xl">
        {/* Header */}
        <DialogHeader className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 pb-6 border-b border-border/20">
          <DialogTitle className="text-3xl font-bold flex items-center justify-between text-foreground tracking-tight">
            <div className="flex items-center gap-4">
              {project.title}
              <Badge variant="secondary" className="text-sm font-medium">
                {project.category}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                aria-label="Like project"
                className={`hover:bg-primary/10 transition-all duration-300 px-3 py-1.5 rounded-full ${
                  isLiked ? "text-red-500" : "text-muted-foreground"
                }`}
              >
                <Heart className={`w-5 h-5 mr-1 ${isLiked ? "fill-current" : ""}`} />
                {likeCount}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShare} aria-label="Share project">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close modal">
                <X className="w-6 h-6" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="space-y-14 pt-6">
          {/* Image Carousel */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border border-border/30 shadow-xl">
              <motion.img
                key={selectedImageIndex}
                src={images[selectedImageIndex] || project.image || "/placeholder.svg"}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                className="w-full h-[28rem] object-cover cursor-pointer"
                onClick={() => setIsImageFullscreen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateImage(-1)}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all rounded-full p-2"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateImage(1)}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all rounded-full p-2"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Top Right Buttons */}
              <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {images.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    aria-label="Toggle autoplay"
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
                  >
                    {isAutoplay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsImageFullscreen(true)}
                  aria-label="Fullscreen image"
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
                >
                  <Eye className="w-5 h-5" />
                </Button>
              </div>

              {/* Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                        selectedImageIndex === index
                          ? "bg-primary shadow-md shadow-primary/50"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Counter */}
              <div className="absolute bottom-6 right-6 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Overview */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/30">
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  Project Overview
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {project.durationDays ?? "--"}
                    </div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{project.tools.length}</div>
                    <div className="text-sm text-muted-foreground">Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{likeCount}</div>
                    <div className="text-sm text-muted-foreground">Likes</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-muted/20 rounded-xl p-6 border border-border/20">
                  <h4 className="font-semibold text-xl mb-4 text-foreground">Creative Process</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.process}</p>
                </div>

                <div className="bg-muted/20 rounded-xl p-6 border border-border/20">
                  <h4 className="font-semibold text-xl mb-4 text-foreground">Final Outcome</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-8">
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/30 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">My Role</h4>
                    <p className="text-muted-foreground">{project.role}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-foreground">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-3 py-1.5 hover:scale-105"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button
                      onClick={() => window.open(`https://example.com/project/${project.id}`, "_blank")}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 h-12"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        onClick={handleShare}
                        className="border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                      >
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = images[0] || project.image
                          link.download = `${project.title}-preview.jpg`
                          link.click()
                        }}
                        className="border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Project Gallery
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer group hover:shadow-xl ${
                    selectedImageIndex === index
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border/30 hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Gallery Image ${index + 1}`}
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-3">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  {selectedImageIndex === index && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Mode */}
        {isImageFullscreen && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageFullscreen(false)}
          >
            <img
              src={images[selectedImageIndex] || project.image}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsImageFullscreen(false)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
