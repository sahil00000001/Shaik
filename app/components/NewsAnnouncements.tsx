"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const news = [
  "AWS Integration Simplified!",
  "New Partnership with Snowflake Announced.",
  "24/7 Cloud Monitoring Now Available.",
]

export default function NewsAnnouncements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (newsRef.current && containerRef.current) {
      const newsItems = newsRef.current.children
      const totalHeight = newsRef.current.offsetHeight

      // Clone the first set of news items and append them to the end
      const clonedItems = Array.from(newsItems).map((item) => item.cloneNode(true))
      clonedItems.forEach((item) => newsRef.current?.appendChild(item))

      gsap.to(newsRef.current, {
        y: -totalHeight,
        duration: news.length * 5, // Adjust speed here
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(newsRef.current, { y: 0 })
        },
      })
    }
  }, [])

  return (
    <div className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-200">News and Announcements</h2>
        <div
          ref={containerRef}
          className="h-48 overflow-hidden border border-gray-700 rounded-lg shadow-inner bg-gray-800"
        >
          <div ref={newsRef} className="relative">
            {news.map((item, index) => (
              <div key={index} className="h-16 flex items-center justify-center text-blue-200 text-lg font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

