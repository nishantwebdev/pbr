import React from 'react'
import Image from 'next/image'
import { Star, ShieldCheck } from 'lucide-react'

export const ReviewsSlider: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Bina Adigopula',
      date: 'January 14, 2026',
      source: 'Google Review',
      text: 'I became an MOC candidate after being a MOCA Peds member in 2025. This was a very humbling experience... When I passed the boards my family described a sudden change of personality to "more myself"! I read the PBR guide almost 5-6 times and attended the live test taking strategy course. Armed with this knowledge, I was very satisfied. I will always be grateful for Ashish Goyal\'s mentorship!',
    },
    {
      name: 'Dr. Jackie Guinn',
      date: 'December 26, 2025',
      source: 'Google Review',
      text: 'I have been using MOCA-PBR to pass my boards and maintain certification. It is by far the best on-line learning tool and I have tried many tools! All medical topics are organized by importance of information which is not only helpful for test taking but use in practice.',
    },
    {
      name: 'Dr. Maria Liverpool',
      date: 'December 16, 2025',
      source: 'Google Review',
      text: 'I completely, without reservation recommend PBR. Ashish is committed to pediatricians passing the boards and I don\'t know that I could have done so without PBR. The resources are A1 and his techniques WORK! It\'s worth the investment!',
    },
    {
      name: 'Dr. Rosalind Lopez',
      date: 'August 13, 2025',
      source: 'Google Review',
      text: 'Ashish, thank you for all your hard work and dedication to help create materials that really help! I\'ve benefited from PBR in passing my Boards the 2nd try, and now I have been doing consistently well on my MOC quizzes, all thanks to your resources!',
    },
    {
      name: 'Dr. Cari Rayborn',
      date: 'February 12, 2025',
      source: 'Google Review',
      text: '5 stars aren\'t enough! PBR is THE key to passing boards. Many companies advertise products to help with initial Peds certification, but the content is often too dense. As someone who likes things to the point, the PBR system was concise enough to give me just what I needed. First time board pass.',
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Trustindex Rating Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000]">
            Trusted by 10,000+ Pediatricians
          </h2>

          {/* Trustindex summary badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 mt-4 bg-[#f4f4f4] px-5 py-3 rounded-2xl border border-[#e2e2e2]">
            <div className="flex items-center gap-1 text-[#ffc72c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#000000] text-sm sm:text-base">5.0 Excellent rating</span>
            <span className="text-[#878787] text-xs sm:text-sm">•</span>
            <span className="text-xs sm:text-sm text-[#252525] font-medium flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#7f1aa6]" />
              94.1% response rate within 48 hours
            </span>
            <span className="text-xs text-[#878787] font-semibold">Verified by Trustindex</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] rounded-2xl p-6 border border-[#e2e2e2] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow pbr-card"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#ffc72c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#878787] bg-white px-2 py-0.5 rounded border border-[#e2e2e2]">
                    {rev.source}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#252525] line-clamp-6 leading-relaxed italic">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#e2e2e2]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#000000]">{rev.name}</h4>
                  <span className="text-[11px] text-[#878787]">{rev.date}</span>
                </div>
                <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* As Seen On Row */}
        <div className="mt-16 pt-10 border-t border-[#e2e2e2] text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#878787] block mb-6">
            As Seen On
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="h-8 flex items-center justify-center">
              <Image
                src="/images/NBC-Logo.webp"
                alt="NBC"
                width={80}
                height={35}
                className="max-h-7 w-auto object-contain"
              />
            </div>
            <div className="h-8 flex items-center justify-center">
              <Image
                src="/images/Family-Education-Logo.webp"
                alt="Family Education"
                width={160}
                height={35}
                className="max-h-7 w-auto object-contain"
              />
            </div>
            <div className="h-8 flex items-center justify-center">
              <span className="text-base font-extrabold text-[#252525] tracking-tight">
                Practice<span className="text-[#7f1aa6]">Link</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
