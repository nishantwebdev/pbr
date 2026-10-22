import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, GraduationCap, RefreshCw, Building2 } from 'lucide-react'

export const QuickPathSelector: React.FC = () => {
  const tracks = [
    {
      icon: GraduationCap,
      question: 'First-time or repeat board taker?',
      title: 'Initial Certification Exam',
      description: 'Streamlined high-yield core guide, Q-banks, and test-taking strategies.',
      cta: 'Start here',
      url: '/pediatric-initial-certification',
    },
    {
      icon: RefreshCw,
      question: 'Need to recertify quickly?',
      title: 'MOC & MOCA-Peds',
      description: 'Quick-access reference tools tailored to conquer quarterly questions fast.',
      cta: 'Start here',
      url: '/moca-peds-study-guide',
    },
    {
      icon: Building2,
      question: 'Institutional partnerships',
      title: 'Residency Programs',
      description: 'Equip your residents with a structured system to elevate your program pass rate.',
      cta: 'Start here',
      url: '/residency-discounts',
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon
            return (
              <div
                key={idx}
                className="group relative bg-[#f4f4f4] hover:bg-[#f5ebfa] rounded-2xl p-8 border border-[#e2e2e2] transition-all duration-300 flex flex-col justify-between pbr-card"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pbr-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#878787] group-hover:text-pbr-primary transition-colors mb-2">
                    {track.question}
                  </span>
                  <h3 className="text-xl font-bold text-[#000000] mb-3">
                    {track.title}
                  </h3>
                  <p className="text-sm text-[#393939] leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e2e2e2]/60">
                  <Link
                    href={track.url}
                    className="inline-flex items-center gap-1.5 font-bold text-sm text-pbr-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>{track.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
