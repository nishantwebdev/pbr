import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export const PreorderPromo: React.FC = () => {
  return (
    <section id="preorder-2027" className="bg-[#f4f4f4] py-16 lg:py-20 border-y border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7f1aa6] bg-[#f5ebfa] px-3 py-1 rounded-full border border-[#7f1aa6]/20">
            Limited Time Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] mt-3">
            Preorder for Only $1 Now &amp; Save Up to 75%
          </h2>
          <p className="text-sm sm:text-base text-[#393939] mt-2">
            Lock in early-bird pricing and get immediate online access to current materials while your 2027 edition is prepared.
          </p>
        </div>

        {/* 2 Preorder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Initial Certification */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow border border-[#e2e2e2] flex flex-col justify-between pbr-card">
            <div>
              <div className="h-44 sm:h-52 w-full relative mb-6 rounded-xl overflow-hidden bg-[#fafafa] flex items-center justify-center">
                <Image
                  src="/images/aap-no-brainer-1.webp"
                  alt="Initial Certification Preorder"
                  width={380}
                  height={240}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#000000]">
                Initial Certification
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#878787] font-medium mt-2">
                <Calendar className="w-4 h-4 text-[#7f1aa6]" />
                <span>Estimated Release Date: December 15, 2026</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#f4f4f4]">
              <Link
                href="/preorder-now"
                className="btn-pbr-primary w-full text-center text-sm sm:text-base py-3 flex items-center justify-center gap-2"
              >
                <span>Preorder for $1</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: MOCA-Peds */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow border border-[#e2e2e2] flex flex-col justify-between pbr-card">
            <div>
              <div className="h-44 sm:h-52 w-full relative mb-6 rounded-xl overflow-hidden bg-[#fafafa] flex items-center justify-center">
                <Image
                  src="/images/aap-moca-bundle-1.webp"
                  alt="MOCA-Peds Preorder"
                  width={380}
                  height={240}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#000000]">
                MOCA-Peds
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#878787] font-medium mt-2">
                <Calendar className="w-4 h-4 text-[#7f1aa6]" />
                <span>Estimated Release Date: December 15, 2026</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#f4f4f4]">
              <Link
                href="/moca-peds-study-guide"
                className="btn-pbr-primary w-full text-center text-sm sm:text-base py-3 flex items-center justify-center gap-2"
              >
                <span>Preorder for $1</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Institutional Logos Bar */}
        <div className="mt-16 pt-10 border-t border-[#e2e2e2]/70 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#878787] uppercase tracking-wider mb-6">
            Trusted by top doctors who have practiced at renowned institutions:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-[#252525]">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-[#e2e2e2]">Johns Hopkins Medicine</span>
            <span className="text-[#878787] hidden sm:inline">•</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-[#e2e2e2]">Cleveland Clinic</span>
            <span className="text-[#878787] hidden sm:inline">•</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-[#e2e2e2]">Mayo Clinic</span>
            <span className="text-[#878787] hidden sm:inline">•</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-[#e2e2e2]">Massachusetts General Hospital</span>
            <span className="text-[#878787] hidden sm:inline">•</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-[#e2e2e2]">University of Michigan Medicine</span>
          </div>
        </div>
      </div>
    </section>
  )
}
