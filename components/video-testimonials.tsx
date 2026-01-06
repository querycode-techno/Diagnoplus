"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react"

export default function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const testimonials = [
    {
      video: "/video/1.mp4",
      thumbnail: "/theme.png",
      name: "Rahul Sharma",
      description: "Smooth surgery coordination and complete support from admission to discharge.",
    },
    {
      video: "/video/2.mp4",
      thumbnail: "/theme.png",
      name: "Arvind Raut",
      description: "Late at night, I needed help, and Diagnoplus responded with care and urgency. Their quick report delivery and warm approach truly reflect professional service. One of the best and most trusted pathology labs in Nagpur.",
    },
    {
      video: "/video/3.mp4",
      thumbnail: "/theme.png",
      name: "Kalyani Mam",
      description: "The Diagnoplus team was by our side every step, making complex treatments feel simple and stress-free.",
    },
    {
      video: "/video/4.mp4",
      thumbnail: "/theme.png",
      name: "Sunil Joshi",
      description: "Home healthcare services helped me recover comfortably without frequent hospital visits.",
    },
    {
      video: "/video/5.mp4",
      thumbnail: "/theme.png",
      name: "Ram Shrinivas",
      description: "From reports to follow-ups, everything stayed organised and easy to access.",
    },
    {
      video: "/video/6.mp4",
      thumbnail: "/theme.png",
      name: "Kavita Patil",
      description: "Friendly team, timely reminders, and complete clarity on every step of treatment.",
    },
    {
      video: "/video/7.mp4",
      thumbnail: "/theme.png",
      name: "Premlata Mam",
      description: "Diagnoplus connected me to the right specialist at the right time.",
    },
  ]

  const [mutedStates, setMutedStates] = useState<boolean[]>(testimonials.map(() => true))
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    if (e.button !== 0) return
    setIsDragging(true)
    const rect = scrollRef.current.getBoundingClientRect()
    setStartX(e.clientX - rect.left)
    setScrollLeft(scrollRef.current.scrollLeft)
    scrollRef.current.style.cursor = 'grabbing'
    e.preventDefault()
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const rect = scrollRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const scrollLeftFn = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
  }

  const scrollRightFn = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
  }

  const handleVideoClick = (index: number) => {
    if (playingIndex === index) {
      // Pause current video
      videoRefs.current[index]?.pause()
      setPlayingIndex(null)
    } else {
      // Pause all videos
      videoRefs.current.forEach((video) => video?.pause())
      // Play clicked video
      setPlayingIndex(index)
      videoRefs.current[index]?.play().catch(() => {})
    }
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={scrollLeftFn}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-[#393185]" />
      </button>
      <button
        onClick={scrollRightFn}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-[#393185]" />
      </button>

      {/* Video Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] snap-center"
          >
            <div className="relative h-[320px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden bg-black shadow-2xl group">
              {/* Video */}
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el
                  if (el) {
                    el.muted = mutedStates[idx]
                  }
                }}
                src={testimonial.video}
                poster={testimonial.thumbnail}
                className="w-full h-full object-cover"
                muted={mutedStates[idx]}
                loop
                playsInline
                onClick={() => handleVideoClick(idx)}
              />

              {/* Name & Description Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-sm sm:text-base font-semibold text-white">
                  {testimonials[idx].name}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white/80 line-clamp-2">
                  {testimonials[idx].description}
                </p>
              </div>

              {/* Play/Pause Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleVideoClick(idx)
                  }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 border-2 border-white/30"
                >
                  {playingIndex === idx ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
              </div>

              {/* Volume Control */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const newMutedStates = [...mutedStates]
                  newMutedStates[idx] = !newMutedStates[idx]
                  setMutedStates(newMutedStates)
                  if (videoRefs.current[idx]) {
                    videoRefs.current[idx]!.muted = newMutedStates[idx]
                  }
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 z-20"
              >
                {mutedStates[idx] ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

