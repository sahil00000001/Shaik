"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Service 1",
    description:
      "Enterprise-Grade Cloud Hosting with 99.9% Uptime. Our state-of-the-art infrastructure ensures your applications are always available. With advanced security measures and redundant systems, we provide a reliable foundation for your business-critical operations. Experience seamless scalability and unparalleled performance.",
    image: "/service1-bg.jpg",
  },
  {
    title: "Service 2",
    description:
      "24/7 Monitoring and Dedicated Support. Our expert team is always on guard, proactively monitoring your systems to prevent issues before they occur. With rapid response times and personalized support, we ensure your cloud environment runs smoothly. Benefit from our years of experience in managing complex cloud infrastructures.",
    image: "/service2-bg.jpg",
  },
  {
    title: "Service 3",
    description:
      "Scalable Solutions for Growing Businesses. As your business evolves, our flexible cloud solutions adapt to your changing needs. From startups to enterprises, we offer tailored services that grow with you. Optimize costs and resources while maintaining peak performance, no matter your scale of operations.",
    image: "/service3-bg.jpg",
  },
  {
    title: "Service 4",
    description:
      "AI-Powered Cloud Analytics for Smart Decisions. Harness the power of artificial intelligence to gain deep insights into your cloud operations. Our advanced analytics tools help you optimize performance, predict trends, and make data-driven decisions. Stay ahead of the curve with cutting-edge AI technologies integrated into your cloud environment.",
    image: "/service4-bg.jpg",
  },
]

const gradients = [
  "from-blue-400 to-purple-500",
  "from-green-400 to-blue-500",
  "from-yellow-400 to-red-500",
  "from-pink-400 to-purple-500",
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-300">Our Services</h2>
        <div className="mb-12 text-center text-white">
          <p className="text-2xl font-semibold">Why trust our services?</p>
          <p className="mt-2 text-xl">Over 50+ satisfied customers rely on our expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 cursor-pointer relative overflow-hidden
                          border-2 border-transparent hover:border-opacity-100
                          transition-all duration-300 ease-in-out
                          ${hoveredIndex === index ? "z-20" : "z-10"}`}
              style={{
                borderImage: `linear-gradient(to right, ${gradients[index].split(" ")[1]}, ${gradients[index].split(" ")[2]}) 1`,
              }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{service.title}</h3>
                <motion.div
                  className="text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{expandedIndex === index ? service.description : `${service.description.slice(0, 100)}...`}</p>
                  <button
                    className="mt-2 text-blue-300 hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </motion.div>
              </div>
              <div
                className={`absolute inset-0 opacity-20 transition-opacity duration-300
                            ${hoveredIndex === index ? "opacity-40" : ""}`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="mix-blend-overlay"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center text-white">
          <p className="text-2xl font-semibold">Why trust our services?</p>
          <p className="mt-2 text-xl">Over 50+ satisfied customers rely on our expertise.</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: "1px",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

