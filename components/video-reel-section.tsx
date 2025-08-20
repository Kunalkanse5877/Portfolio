"use client"

import { Button } from "@/components/ui/button"
import { Play, Volume2, Sparkles, Palette } from "lucide-react"
import { useState, useRef } from "react"

export function VideoReelSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const videoReels = [
    {
      id: 1,
      title: "2D Animated Logo Reel",
      videoUrl: "/lg.mp4",
      duration: "00:30",
      category: "Video Editing",
    },
    {
      id: 2,
      title: "Lays Creative Animated Ad",
      videoUrl: "/Final Reel Edit 2.mp4",
      duration: "00:30",
      category: "Video Editing",
    },
    {
      id: 3,
      title: "3D Camera Motion Video",
      videoUrl: "/Trail Reel.mp4",
      duration: "00:30",
      category: "Video Editing",
    },
    {
      id: 4,
      title: "Fire Logo Reveal Video",
      videoUrl: "/Kunal Kanse.mp4",
      duration: "00:30",
      category: "Video Editing",
    },
    {
      id: 5,
      title: "Logo Animation video",
      videoUrl: "/Killswitch Logo.mp4",
      duration: "00:30",
      category: "Video Editing",
    },
    {
      id: 6,
      title: "Event Promotion Video",
      videoUrl: "/GFG CS Seminar-1.mp4",
      duration: "00:30",
      category: "UI/UX",
    },
    {
      id: 7,
      title: "Custom Size Instagram Video Editing",
      videoUrl: "/Final Compt_1.mp4", // ✅ special video
      duration: "00:30",
      category: "Video Editing",
    },
  ]

  const handlePlay = (id: number) => {
    if (playingVideo && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo]?.pause()
    }
    setPlayingVideo(id)
    videoRefs.current[id]?.play()
  }

  const handlePause = (id: number) => {
    videoRefs.current[id]?.pause()
    setPlayingVideo(null)
  }

  return (
    <section id="video-reel" className="py-32 px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
          Video <span className="text-primary animate-glow">Reel</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          Watch my latest video editing and motion graphics work in action
        </p>

        {/* Normal Reels (id 1–6) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videoReels
            .filter((reel) => reel.id !== 7) // exclude id:7
            .map((reel) => (
              <div
                key={reel.id}
                className="relative rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-2xl group"
              >
                <div className="aspect-[9/16] relative">
                  <video
                    ref={(el) => (videoRefs.current[reel.id] = el)}
                    src={reel.videoUrl}
                    className="w-full h-full object-cover"
                    controls={playingVideo === reel.id}
                    loop
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {reel.category}
                  </div>

                  {playingVideo !== reel.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300">
                      <Button
                        size="lg"
                        onClick={() => handlePlay(reel.id)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-20 h-20 animate-glow hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                    </div>
                  )}

                  {playingVideo === reel.id && (
                    <div className="absolute top-4 right-4">
                      <Button
                        onClick={() => handlePause(reel.id)}
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        Pause
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Special Reel (id:7) */}
        <div className="mb-12">
          {videoReels
            .filter((reel) => reel.id === 7) // only id:7
            .map((reel) => (
              <div
                key={reel.id}
                className="relative rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-2xl"
              >
                <div className="aspect-[1280/400] relative">
                  <video
                    ref={(el) => (videoRefs.current[reel.id] = el)}
                    src={reel.videoUrl}
                    className="w-full h-full object-cover"
                    controls={playingVideo === reel.id}
                    loop
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {reel.category}
                  </div>

                  {playingVideo !== reel.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
                      <Button
                        size="lg"
                        onClick={() => handlePlay(reel.id)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-20 h-20 animate-glow hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                    </div>
                  )}

                  {playingVideo === reel.id && (
                    <div className="absolute top-4 right-4">
                      <Button
                        onClick={() => handlePause(reel.id)}
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        Pause
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
