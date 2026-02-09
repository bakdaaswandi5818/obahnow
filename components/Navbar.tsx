'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">Obah</span>
              <span className="text-secondary">Now</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#services" 
              className="hover:text-secondary transition-colors duration-200 font-medium"
            >
              Layanan
            </Link>
            <Link 
              href="#portfolio" 
              className="hover:text-secondary transition-colors duration-200 font-medium"
            >
              Portofolio
            </Link>
            <Link 
              href="#contact" 
              className="bg-secondary hover:bg-secondary-700 px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#services" 
                className="hover:text-secondary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link 
                href="#portfolio" 
                className="hover:text-secondary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Portofolio
              </Link>
              <Link 
                href="#contact" 
                className="bg-secondary hover:bg-secondary-700 px-6 py-2 rounded-lg font-semibold text-center transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
