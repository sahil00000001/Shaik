"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronLeft } from "lucide-react"

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    mainMenu: [
      {
        name: "Cybersecurity Services",
        subMenu: [
          {
            name: "Security Consulting",
            href: "/services/security-consulting",
          },
          {
            name: "Public Cloud Managed Security",
            href: "/services/public-cloud-security",
          },
          {
            name: "Advanced MDR",
            href: "/services/advanced-mdr",
          },
          {
            name: "Standard Managed SOC",
            href: "/services/standard-soc",
          },
        ],
      },
    ],
  },
  { name: "Blogs", href: "#" },
  { name: "Contact Us", href: "#" },
]

export default function Header() {
  const [hoveredMain, setHoveredMain] = useState<string | null>(null)
  const [hoveredSub, setHoveredSub] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    return () => clearTimeouts()
  }, [])

  const handleMouseEnter = (itemName: string) => {
    clearTimeouts()
    setHoveredMain(itemName)
  }

  const handleMouseLeave = () => {
    clearTimeouts()
    timeoutRef.current = setTimeout(() => {
      setHoveredMain(null)
      setHoveredSub(null)
    }, 300)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
            Random.io
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-2">
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-1"
                  >
                    {item.name}
                    {item.mainMenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </div>
                <AnimatePresence>
                  {item.mainMenu && hoveredMain === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl"
                      onMouseEnter={() => clearTimeouts()}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.mainMenu.map((mainItem) => (
                        <div
                          key={mainItem.name}
                          className="relative"
                          onMouseEnter={() => setHoveredSub(mainItem.name)}
                          onMouseLeave={() => setHoveredSub(null)}
                        >
                          <div className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer flex justify-between items-center">
                            {mainItem.name}
                            <ChevronLeft className="w-4 h-4" />
                          </div>
                          <AnimatePresence>
                            {hoveredSub === mainItem.name && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-full top-0 w-64 bg-gray-800 rounded-lg shadow-xl"
                                style={{ marginRight: "1px" }}
                              >
                                {mainItem.subMenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

