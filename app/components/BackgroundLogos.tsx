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

export default function BackgroundLogos() {
  const logosRef = useRef([])

  useEffect(() => {
    logosRef.current.forEach((logo, index) => {
      gsap.to(logo, {
        x: `random(-50, 50)`,
        y: `random(-50, 50)`,
        rotation: `random(-15, 15)`,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 2,
      })
    })
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {logos.map((logo, index) => (
        <div
          key={index}
          ref={(el) => (logosRef.current[index] = el)}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1,
          }}
        >
          <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={100} height={100} />
        </div>
      ))}
    </div>
  )
}

