import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.FC = () => {

  const columns = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Residency', url: '/residency-discounts' },
        { label: 'Initial Certification', url: '/pediatric-initial-certification' },
        { label: 'MOC & MOCA-Peds', url: '/maintenance-of-certification' },
        { label: 'CME/MOC', url: '/cme' },
        { label: 'Login', url: 'https://courses.pediatricsboardreview.com/pages/home', external: true },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'All Access Pass', url: '/all-access-pass' },
        { label: 'Test-Taking Strategies', url: '/full-test-taking-strategies-course' },
        { label: 'MOC & MOCA-Peds', url: '/moca-peds-study-guide' },
        { label: 'CME & MOC Credits', url: '/cme' },
        { label: 'All Products', url: '/products' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', url: '/blog-articles' },
        { label: 'Testimonials', url: '/testimonials' },
        { label: 'Community Forum', url: '/pediatrics-board-review-facebook-group' },
        { label: 'Tools to Help You Pass', url: '/tools' },
        { label: '100% Pass Guarantee', url: '/guarantee' },
        { label: 'Refund Policy', url: '/refund-policies' },
      ],
    },
    {
      title: 'Articles',
      links: [
        { label: 'Failed Pediatric Boards', url: '/category/failed-pediatric-boards' },
        { label: 'Passing The Boards', url: '/category/passing-the-boards' },
        { label: 'American Board of Pediatrics', url: '/category/american-board-of-pediatrics' },
        { label: 'Pediatric Mnemonics', url: '/category/mnemonics-and-memory-aids' },
        { label: 'Roadmap To Success', url: '/category/a-roadmap-to-success' },
        { label: 'Study Schedule & Tips', url: '/category/study-schedule-tips' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' },
        { label: 'FAQ', url: '/frequently-asked-questions-abp' },
        { label: 'Terms and Conditions', url: '/terms-use' },
        { label: 'Privacy Policy', url: '/privacy-policy' },
      ],
    },
  ]

  return (
    <footer id="colophon" className="bg-[#111111] text-[#e2e2e2] pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-12 border-b border-[#252525] gap-6">
          <Link href="/" className="inline-block">
            <Image
              src="/images/Pediatrics-Board-Review-Logo-White-1-scaled-e1764928355422.webp"
              alt="Pediatrics Board Review"
              width={240}
              height={52}
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-xs sm:text-sm text-[#878787] max-w-md text-center sm:text-right">
            Streamlined, high-yield study resources and proven strategies to help pediatricians pass their board exams with confidence.
          </p>
        </div>

        {/* 5 Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-[#252525]">
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#878787]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="hover:text-white transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#878787] gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2026 Pediatrics Board Review®. All rights reserved.</p>
            <p className="text-[11px] text-[#666666]">
              *Terms &amp; Conditions Apply. Pediatrics Board Review is not affiliated with or endorsed by the American Board of Pediatrics (ABP).
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
