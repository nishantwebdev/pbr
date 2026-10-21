import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight leading-[1.15]">
              Pass Your Pediatric Boards{' '}
              <span className="text-[#7f1aa6] relative inline-block">
                With Confidence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#252525] leading-relaxed">
              Thousands of pediatricians (even those who’ve failed multiple times) have passed their
              board exams with our proven Pediatrics Board Review® system. Whether it’s your first
              time or your tenth, our resources and strategies help you pass with confidence.
            </p>

            {/* Checkmark Value Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7f1aa6] flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-[#000000]">
                  Board certification in a <span className="text-[#7f1aa6]">SINGLE ATTEMPT</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7f1aa6] flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium text-[#252525]">
                  Tried and tested courses used by <strong className="text-[#000000]">10,000+ pediatricians</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7f1aa6] flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium text-[#252525]">
                  First-time pass rates estimated at <strong className="text-[#000000]">99%</strong>
                </span>
              </div>
            </div>

            {/* CTAs & Guarantee */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="#who-do-we-help" className="btn-pbr-primary text-base py-3 px-8 shadow-md">
                Get Started
              </Link>
            </div>

            {/* Guarantee Badge Notice */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5ebfa] border border-[#7f1aa6]/20 text-[#7f1aa6] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>FIRST-TIME PASS GUARANTEE, OR YOUR MONEY BACK!</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Dr. Ashish Goyal & Speech Bubble */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#7f1aa6]/15 to-[#b140ec]/10 rounded-3xl blur-2xl -z-10" />

              {/* Main Doctor Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/Meet-Your-Coach---Dr.-Ashish-Goyal-1241x1536.webp"
                  alt="Dr. Ashish Goyal - Founder of Pediatrics Board Review"
                  width={500}
                  height={620}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Speech Bubble Callout */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-xl shadow-xl border border-[#e2e2e2] max-w-[280px] sm:max-w-xs animate-in fade-in slide-in-from-bottom-3">
                <p className="text-xs sm:text-sm font-semibold text-[#000000] italic leading-snug">
                  “What if passing isn’t about what you study, but <span className="text-[#7f1aa6] not-italic font-bold">how you study?</span>”
                </p>
                <span className="block text-[11px] font-medium text-[#878787] mt-1">
                  — Dr. Ashish Goyal, PBR Founder
                </span>
              </div>

              {/* 100% Guarantee Ribbon/Badge */}
              <div className="absolute top-4 -right-4 bg-white p-2 rounded-full shadow-lg border border-[#e2e2e2]">
                <Image
                  src="/images/Guarantee-Badge.webp"
                  alt="100% Pass Guarantee"
                  width={75}
                  height={75}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
