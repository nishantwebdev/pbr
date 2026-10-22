'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import type { Header as HeaderType, Media } from '@/payload-types'

export interface HeaderProps {
  data?: HeaderType | null
}

const defaultNavItems = [
  {
    label: 'Courses',
    url: '#',
    children: [
      { label: 'ABP Initial Certification Exam', url: '/pediatric-initial-certification' },
      { label: 'Test-Taking Strategies', url: '/full-test-taking-strategies-course' },
      { label: 'Small Group Discounts', url: '/group-discount' },
      { label: 'Residency Partnerships', url: '/residency-discounts' },
      { label: 'ABP MOCA-Peds', url: '/moca-peds-study-guide' },
      { label: 'ABP MOC Exam', url: '/maintenance-of-certification' },
      { label: 'CME Credits & MOC Points', url: '/cme' },
    ],
  },
  { label: 'Testimonials', url: '/testimonials' },
  { label: 'Blog', url: '/blog-articles' },
  { label: 'FAQs', url: '/frequently-asked-questions-abp' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
]

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Resolve logo image
  let logoUrl = '/images/pediatrics-board-review-logo.webp'
  let logoAlt = 'Pediatrics Board Review'
  if (data?.logo && typeof data.logo === 'object' && 'url' in data.logo && data.logo.url) {
    logoUrl = (data.logo as Media).url || logoUrl
    if ((data.logo as Media).alt) {
      logoAlt = (data.logo as Media).alt || logoAlt
    }
  }

  // Resolve CTAs
  const loginUrl = data?.loginUrl || 'https://courses.pediatricsboardreview.com/pages/home'
  const getStartedUrl = data?.getStartedUrl || '#who-do-we-help'

  // Resolve Nav Items: use admin items if provided, otherwise default menu
  const navItems =
    data?.navItems && data.navItems.length > 0 ? data.navItems : defaultNavItems

  const isExternal = (url: string) => url.startsWith('http://') || url.startsWith('https://')

  return (
    <header className="bg-white border-b border-[#e2e2e2] relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={260}
              height={55}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-md font-normal text-[#252525]">
            {navItems.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0
              const itemKey = `${item.label}-${index}`

              if (hasChildren) {
                return (
                  <div
                    key={itemKey}
                    className="relative group py-6"
                    onMouseEnter={() => setOpenDropdown(itemKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1.5 hover:text-pbr-primary transition-colors focus:outline-none"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#878787] group-hover:text-pbr-primary transition-transform ${
                          openDropdown === itemKey ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openDropdown === itemKey && (
                      <div className="absolute left-0 top-[70px] w-72 bg-white rounded-xl shadow-xl border border-[#e2e2e2] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                        {item.children?.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.url}
                            target={isExternal(child.url) ? '_blank' : undefined}
                            rel={isExternal(child.url) ? 'noopener noreferrer' : undefined}
                            className="block px-4 py-2.5 text-sm hover:bg-[#f5ebfa] hover:text-pbr-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={itemKey}
                  href={item.url}
                  target={isExternal(item.url) ? '_blank' : undefined}
                  rel={isExternal(item.url) ? 'noopener noreferrer' : undefined}
                  className="hover:text-pbr-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href={loginUrl}
              target={isExternal(loginUrl) ? '_blank' : undefined}
              rel={isExternal(loginUrl) ? 'noopener noreferrer' : undefined}
              className="text-md font-normal text-[#252525] hover:text-pbr-primary transition-colors px-3 py-2"
            >
              Log In
            </Link>
            <Link
              href={getStartedUrl}
              target={isExternal(getStartedUrl) ? '_blank' : undefined}
              rel={isExternal(getStartedUrl) ? 'noopener noreferrer' : undefined}
              className="btn-pbr-primary text-md py-2 px-5"
            >
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
          {navItems.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0
            if (hasChildren) {
              return (
                <div key={index} className="border-b border-[#f4f4f4] pb-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#878787] px-2 mb-1">
                    {item.label}
                  </span>
                  {item.children?.map((child, cIdx) => (
                    <Link
                      key={cIdx}
                      href={child.url}
                      target={isExternal(child.url) ? '_blank' : undefined}
                      rel={isExternal(child.url) ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-sm font-medium hover:text-pbr-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )
            }

            return (
              <Link
                key={index}
                href={item.url}
                target={isExternal(item.url) ? '_blank' : undefined}
                rel={isExternal(item.url) ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2 py-1.5 text-sm font-semibold hover:text-pbr-primary"
              >
                {item.label}
              </Link>
            )
          })}

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href={loginUrl}
              target={isExternal(loginUrl) ? '_blank' : undefined}
              rel={isExternal(loginUrl) ? 'noopener noreferrer' : undefined}
              className="btn-pbr-outline text-center text-sm py-2"
            >
              Log In
            </Link>
            <Link
              href={getStartedUrl}
              target={isExternal(getStartedUrl) ? '_blank' : undefined}
              rel={isExternal(getStartedUrl) ? 'noopener noreferrer' : undefined}
              className="btn-pbr-primary text-center text-sm py-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
