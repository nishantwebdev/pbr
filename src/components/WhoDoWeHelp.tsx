import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export const WhoDoWeHelp: React.FC = () => {
  const programs = [
    {
      title: 'Initial Certification Exam',
      image: '/images/female-pediatrician-pointing-and-guiding-1.webp',
      bullets: [
        'For first-time or repeat test-takers, even after multiple failed attempts',
        'Discover your risk of failing and get a tailored path to success',
        'Learn the pediatric board review strategies that separates those who pass from those who don’t',
      ],
      ctaText: 'View Courses',
      ctaUrl: '/pediatric-initial-certification',
    },
    {
      title: 'MOCA-Peds',
      image: '/images/moca-pbr-collaborative-prep.webp',
      bullets: [
        'Already certified? Prepare for quarterly recertification exams with ease.',
        'High-yield, low-stress review system optimized for your test days',
        'Study smarter, pass MOCA-Peds in just three years, and get a two-year break',
      ],
      ctaText: 'View Courses',
      ctaUrl: '/moca-peds-study-guide',
    },
    {
      title: 'Residency Partnerships',
      image: '/images/confident-pediatrician-after-board-success.webp',
      bullets: [
        'Bulk access for residency programs (4 to 120+ residents)',
        'Equip your residents with a proven, structured system',
        'Work with an expert partner to improve board pass rates',
      ],
      ctaText: 'Get Free Guidance',
      ctaUrl: '/residency-discounts',
    },
    {
      title: 'Small Group Discounts',
      image: '/images/pediatric-resident-board-review-prep.webp',
      bullets: [
        'Friends or colleagues buying together for group discounts',
        'Access the full PBR system and save when you team up',
        'Prepare together, pass together',
      ],
      ctaText: 'Get Resident Discounts',
      ctaUrl: '/group-discount',
    },
    {
      title: 'CME Specials',
      image: '/images/Thinking-Doctor.webp',
      bullets: [
        'Earn CME and MOC credits while preparing for the boards or for recertification',
        'Fast and easy claims process for over 200 credits',
        'Ideal for busy professionals with employer-funded education',
      ],
      ctaText: 'Get Credits And Rebates',
      ctaUrl: '/cme',
    },
  ]

  return (
    <section id="who-do-we-help" className="bg-[#f4f4f4] py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7f1aa6] bg-[#f5ebfa] px-3 py-1 rounded-full border border-[#7f1aa6]/20">
            Tailored Board Prep
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] mt-3">
            Who Do We Help?
          </h2>
          <p className="text-sm sm:text-base text-[#393939] mt-2">
            Our high-yield study resources and proven strategies help pediatricians pass their board exams with confidence.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e2e2] flex flex-col justify-between pbr-card"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="h-48 w-full relative bg-[#fafafa] overflow-hidden border-b border-[#e2e2e2]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#000000] mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252525]">
                        <Check className="w-4 h-4 text-[#7f1aa6] flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={item.ctaUrl}
                  className="btn-pbr-primary w-full text-center text-sm py-2.5 flex items-center justify-center gap-2"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
