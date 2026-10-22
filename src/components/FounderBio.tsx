import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Award, BookOpen, Stethoscope } from 'lucide-react'

export const FounderBio: React.FC = () => {
  return (
    <section className="bg-[#f4f4f4] py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e2e2] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/images/ashish-goyal-pbr-founder.webp"
                  alt="Dr. Ashish Goyal, MD - Founder of Pediatrics Board Review"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Founder Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-pbr-primary bg-[#f5ebfa] px-3 py-1 rounded-full border border-pbr-primary/20">
                Leadership
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000]">
                Meet our founder, <span className="text-pbr-primary">ASHISH GOYAL</span>
              </h2>

              <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
                After failing his pediatric boards, Dr. Ashish Goyal completely restructured his studying technique to embrace a new style of learning focused on efficiency and repetition.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-pbr-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#252525]">
                    <strong>Increased his score by 40%</strong> through structured test-taking techniques and rule-out strategy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-pbr-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#252525]">
                    <strong>Invited by the American Board of Pediatrics (ABP)</strong> to write official board exam questions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-pbr-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#252525]">
                    Founded <strong>Pediatrics Board Review®</strong> to coach thousands of doctors from at-risk candidates to board-certified physicians.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="#who-do-we-help" className="btn-pbr-primary text-sm sm:text-base py-3 px-8">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
