"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const brandRef = useRef(null)
  const taglineRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(brandRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" },
    )
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="text-center z-10 max-w-3xl px-4">
        <h1
          ref={brandRef}
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Random.io
        </h1>
        <p ref={taglineRef} className="text-2xl text-gray-300 mb-6">
          Redefining Cloud Excellence with Cutting-Edge Technology
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Random.io is a cutting-edge cloud services startup revolutionizing the way businesses interact with cloud
          technology. Our innovative solutions combine enterprise-grade reliability with user-friendly interfaces,
          making cloud computing accessible to companies of all sizes. With a focus on security, scalability, and
          performance, we're committed to empowering our clients to achieve their digital transformation goals. Join us
          in shaping the future of cloud computing and experience the Random.io difference today.
        </p>
      </div>
    </section>
  )
}

