import React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react'

export const QuizLeadGen: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-pbr-primary to-[#b140ec] rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#ffc72c]" />
              <span>Personalized Assessment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Not sure where to start?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Take our quick risk assessment quiz to identify your test-taking vulnerabilities and receive a tailored prep roadmap.
            </p>

            <p className="text-sm font-semibold text-white/80">
              We help pediatricians pass the boards, even if they’ve been struggling for years.
            </p>

            <div className="pt-4">
              <Link
                href="/risk-calculator"
                className="btn-pbr-gold text-base py-3.5 px-8 shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                <span>Take the Risk Quiz</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
