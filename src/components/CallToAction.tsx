import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pbr-primary via-[#9424c2] to-[#b140ec] py-16 sm:py-20 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Take the first step toward passing your boards — with clarity, confidence, and a proven system.
        </h2>

        <div className="pt-2">
          <Link
            href="#who-do-we-help"
            className="btn-pbr-gold text-base py-3.5 px-8 shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
