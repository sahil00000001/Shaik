"use client"

import { motion } from "framer-motion"
import { Shield, Server, Database, Network, Lock } from "lucide-react"

interface ServicePageProps {
  title: string
  description: string
  services: string[]
}

const icons = [Shield, Server, Database, Network, Lock]

export default function ServicePage({ title, description, services }: ServicePageProps) {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-300 mb-6">{title}</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = icons[index % icons.length]
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <IconComponent className="w-6 h-6 text-blue-300" />
                  <h3 className="text-xl font-semibold text-blue-300">{service}</h3>
                </div>
                <p className="text-gray-400">
                  Comprehensive {service.toLowerCase()} solutions tailored to your business needs.
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

