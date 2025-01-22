import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Random.io</h3>
            <p className="text-gray-400">Empowering businesses with cutting-edge cloud solutions.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-300 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-300 transition-colors duration-300" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-blue-300 transition-colors duration-300" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-blue-300 transition-colors duration-300" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              Email: info@random.io
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

