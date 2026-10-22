import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Layers, Users } from 'lucide-react'

export const EditorialStory: React.FC = () => {
  return (
    <section className="bg-[#f4f4f4] py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Graphic on Left */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full">
              <Image
                src="/images/Thinking-Doctor.webp"
                alt="Pediatrician studying effectively"
                width={400}
                height={450}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Copy on Right */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pbr-primary bg-[#f5ebfa] px-3 py-1 rounded-full border border-pbr-primary/20">
              Our Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] leading-tight">
              What if passing isn’t about what you study, but{' '}
              <span className="text-pbr-primary">how you study?</span>
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#000000]">
              You’re not alone. Even brilliant doctors fail when they rely on the wrong approach.
            </p>

            <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
              Board review isn’t just about cramming more content. It’s about how you study. It’s about the strategy you use, the structure you follow, and the support you get.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#e2e2e2] shadow-sm">
                <Target className="w-6 h-6 text-pbr-primary mb-2" />
                <h4 className="font-bold text-sm text-[#000000]">1. Strategy</h4>
                <p className="text-xs text-[#878787] mt-1">Rule-out techniques & question breakdown.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#e2e2e2] shadow-sm">
                <Layers className="w-6 h-6 text-pbr-primary mb-2" />
                <h4 className="font-bold text-sm text-[#000000]">2. Structure</h4>
                <p className="text-xs text-[#878787] mt-1">Curated repetition of high-yield topics.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#e2e2e2] shadow-sm">
                <Users className="w-6 h-6 text-pbr-primary mb-2" />
                <h4 className="font-bold text-sm text-[#000000]">3. Support</h4>
                <p className="text-xs text-[#878787] mt-1">Personalized guidance until you pass.</p>
              </div>
            </div>

            <p className="text-sm sm:text-base font-semibold text-[#252525]">
              We help you master all three, so you don’t just study harder. You study smarter.
            </p>

            <div className="pt-2">
              <Link href="#who-do-we-help" className="btn-pbr-primary text-sm sm:text-base py-3 px-8">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
