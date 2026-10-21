'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false)

  return (
    <header className="bg-white border-b border-[#e2e2e2] sticky top-[41px] z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/pediatrics-board-review-logo.webp"
              alt="Pediatrics Board Review"
              width={260}
              height={55}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[#252525]">
            {/* Courses Mega / Dropdown */}
            <div
              className="relative group py-6"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#7f1aa6] transition-colors focus:outline-none"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-[#878787] group-hover:text-[#7f1aa6] transition-transform group-hover:rotate-180" />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute left-0 top-[70px] w-72 bg-white rounded-xl shadow-xl border border-[#e2e2e2] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <Link
                    href="/pediatric-initial-certification"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    ABP Initial Certification Exam
                  </Link>
                  <Link
                    href="/full-test-taking-strategies-course"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    Test-Taking Strategies
                  </Link>
                  <Link
                    href="/group-discount"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    Small Group Discounts
                  </Link>
                  <Link
                    href="/residency-discounts"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    Residency Partnerships
                  </Link>
                  <Link
                    href="/moca-peds-study-guide"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    ABP MOCA-Peds
                  </Link>
                  <Link
                    href="/maintenance-of-certification"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    ABP MOC Exam
                  </Link>
                  <Link
                    href="/cme"
                    className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-[#7f1aa6] transition-colors"
                  >
                    CME Credits & MOC Points
                  </Link>
                </div>
              )}
            </div>

            <Link href="/testimonials" className="hover:text-[#7f1aa6] transition-colors">
              Testimonials
            </Link>
            <Link href="/blog-articles" className="hover:text-[#7f1aa6] transition-colors">
              Blog
            </Link>
            <Link href="/frequently-asked-questions-abp" className="hover:text-[#7f1aa6] transition-colors">
              FAQs
            </Link>
            <Link href="/about" className="hover:text-[#7f1aa6] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#7f1aa6] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="https://courses.pediatricsboardreview.com/pages/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#252525] hover:text-[#7f1aa6] transition-colors px-3 py-2"
            >
              Log In
            </Link>
            <Link href="#who-do-we-help" className="btn-pbr-primary text-sm py-2 px-5">
              Get Started
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#252525] hover:bg-[#f4f4f4] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e2e2] px-4 pt-2 pb-6 space-y-3">
          <div className="border-b border-[#f4f4f4] pb-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#878787] px-2 mb-1">
              Courses
            </span>
            <Link
              href="/pediatric-initial-certification"
              className="block px-3 py-1.5 text-sm font-medium hover:text-[#7f1aa6]"
            >
              Initial Certification Exam
            </Link>
            <Link
              href="/full-test-taking-strategies-course"
              className="block px-3 py-1.5 text-sm font-medium hover:text-[#7f1aa6]"
            >
              Test-Taking Strategies
            </Link>
            <Link
              href="/moca-peds-study-guide"
              className="block px-3 py-1.5 text-sm font-medium hover:text-[#7f1aa6]"
            >
              ABP MOCA-Peds
            </Link>
            <Link
              href="/residency-discounts"
              className="block px-3 py-1.5 text-sm font-medium hover:text-[#7f1aa6]"
            >
              Residency Partnerships
            </Link>
          </div>
          <Link href="/testimonials" className="block px-2 py-1.5 text-sm font-semibold hover:text-[#7f1aa6]">
            Testimonials
          </Link>
          <Link href="/blog-articles" className="block px-2 py-1.5 text-sm font-semibold hover:text-[#7f1aa6]">
            Blog
          </Link>
          <Link href="/frequently-asked-questions-abp" className="block px-2 py-1.5 text-sm font-semibold hover:text-[#7f1aa6]">
            FAQs
          </Link>
          <Link href="/about" className="block px-2 py-1.5 text-sm font-semibold hover:text-[#7f1aa6]">
            About
          </Link>
          <Link href="/contact" className="block px-2 py-1.5 text-sm font-semibold hover:text-[#7f1aa6]">
            Contact
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="https://courses.pediatricsboardreview.com/pages/home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pbr-outline text-center text-sm py-2"
            >
              Log In
            </Link>
            <Link href="#who-do-we-help" className="btn-pbr-primary text-center text-sm py-2">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
