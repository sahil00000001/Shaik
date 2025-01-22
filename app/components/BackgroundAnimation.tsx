"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

const logos = [
  { src: "/aws.png", alt: "AWS Logo" },
  { src: "/azure-logo.png", alt: "Azure Logo" },
  { src: "/gcp-logo.png", alt: "Google Cloud Logo" },
  { src: "/snowflake-logo.png", alt: "Snowflake Logo" },
  { src: "/ibm-cloud-logo.jpeg", alt: "IBM Cloud Logo" },
  { src: "/oracle-cloud-logo.png", alt: "Oracle Cloud Logo" },
  { src: "/alibaba-cloud-logo..png", alt: "Alibaba Cloud Logo" },
  { src: "/salesforce-logo.jpeg", alt: "Salesforce Logo" },
  { src: "/vmware-logo.jpeg", alt: "VMware Logo" },
  { src: "/digitalocean-logo.jpeg", alt: "DigitalOcean Logo" },
]

export default function BackgroundAnimation() {
  const logosRef = useRef([])
  const circuitsRef = useRef([])

  useEffect(() => {
    // Animate logos
    logosRef.current.forEach((logo, index) => {
      gsap.to(logo, {
        x: `random(-30, 30)`,
        y: `random(-30, 30)`,
        rotation: `random(-5, 5)`,
        duration: 60,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 3,
      })
    })

    // Animate circuits
    circuitsRef.current.forEach((circuit) => {
      gsap.to(circuit, {
        opacity: `random(0.1, 0.5)`,
        duration: `random(2, 5)`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    })
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[url('/data-center.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
      {logos.map((logo, index) => (
        <div
          key={index}
          ref={(el) => (logosRef.current[index] = el)}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
        >
          <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={150} height={150} />
        </div>
      ))}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (circuitsRef.current[index] = el)}
          className="absolute bg-white opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 50}px`,
            height: "1px",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        ></div>
      ))}
    </div>
  )
}

