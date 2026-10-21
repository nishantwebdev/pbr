'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Footer } from '@/components/Footer'
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react'

export default function RiskCalculatorPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4
  const [answers, setAnswers] = useState({
    goal: '',
    attemptStatus: '',
    residencyScore: '',
    email: '',
    name: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 py-12 md:py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#e2e2e2] shadow-xl">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7f1aa6] mb-2">
              <span>Identify Your Risk Profile</span>
              <span>Step {step} of {totalSteps}</span>
            </div>
            <div className="w-full bg-[#f4f4f4] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#7f1aa6] h-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {!submitted ? (
            <div className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
                    Welcome to PBR! What are you here to tackle?
                  </h2>
                  <p className="text-xs sm:text-sm text-[#878787]">
                    Select your primary objective so we can customize your risk profile.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      { id: 'initial', label: 'Initial Certification Exam', desc: 'I’m preparing for the ABP Initial Certification exam.' },
                      { id: 'moca', label: 'MOCA-Peds', desc: 'I need resources to meet quarterly Maintenance of Certification requirements.' },
                      { id: 'residency', label: 'Institutional / Residency Program', desc: 'I represent a hospital or program looking to purchase for a group.' },
                      { id: 'cme', label: 'CME Credits & Rebate', desc: 'I’m seeking CME credits and eligible employer rebates.' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setAnswers({ ...answers, goal: opt.id })
                          handleNext()
                        }}
                        className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex flex-col ${
                          answers.goal === opt.id
                            ? 'border-[#7f1aa6] bg-[#f5ebfa] shadow-sm'
                            : 'border-[#e2e2e2] hover:border-[#7f1aa6]/50 bg-white'
                        }`}
                      >
                        <span className="font-bold text-[#000000]">{opt.label}</span>
                        <span className="text-xs text-[#878787] mt-0.5">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
                    How many times have you taken the pediatric board exam?
                  </h2>
                  <p className="text-xs sm:text-sm text-[#878787]">
                    Exam history is one of the strongest indicators of strategy calibration needed.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      { id: 'first', label: 'This will be my first attempt' },
                      { id: 'repeat-1', label: 'I have taken it once before' },
                      { id: 'repeat-multiple', label: 'I have taken it 2 or more times before' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setAnswers({ ...answers, attemptStatus: opt.id })
                          handleNext()
                        }}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all ${
                          answers.attemptStatus === opt.id
                            ? 'border-[#7f1aa6] bg-[#f5ebfa] text-[#7f1aa6]'
                            : 'border-[#e2e2e2] hover:border-[#7f1aa6]/50 bg-white text-[#252525]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
                    What was your standardized test percentile (e.g. USMLE / COMLEX / In-Training)?
                  </h2>
                  <div className="space-y-3 pt-2">
                    {[
                      { id: 'high', label: 'Consistently above 50th percentile (Moderate/Low risk)' },
                      { id: 'mid', label: 'Around 25th - 50th percentile (At-risk)' },
                      { id: 'low', label: 'Below 25th percentile or historical test anxiety (High-risk)' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setAnswers({ ...answers, residencyScore: opt.id })
                          handleNext()
                        }}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all ${
                          answers.residencyScore === opt.id
                            ? 'border-[#7f1aa6] bg-[#f5ebfa] text-[#7f1aa6]'
                            : 'border-[#e2e2e2] hover:border-[#7f1aa6]/50 bg-white text-[#252525]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
                    Where should we send your personalized Risk Assessment &amp; Study Schedule?
                  </h2>
                  <p className="text-xs sm:text-sm text-[#878787]">
                    Includes custom recommendations on question banks, test-taking rule-outs, and study schedule.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#252525] mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={answers.name}
                        onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                        placeholder="Dr. Sarah Johnson"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#e2e2e2] focus:outline-none focus:border-[#7f1aa6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#252525] mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        required
                        value={answers.email}
                        onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                        placeholder="sjohnson@pediatrics.org"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#e2e2e2] focus:outline-none focus:border-[#7f1aa6]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-pbr-primary w-full text-base py-3.5 mt-4 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>View My Risk Results</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Navigation Back */}
              {step > 1 && (
                <div className="pt-4 border-t border-[#f4f4f4] flex justify-between">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#878787] hover:text-[#000000] py-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-[#f5ebfa] text-[#7f1aa6] rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7f1aa6] bg-[#f5ebfa] px-3 py-1 rounded-full">
                  Profile Generated
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000]">
                  Assessment Complete, {answers.name || 'Doctor'}!
                </h2>
                <p className="text-sm text-[#252525] max-w-md mx-auto leading-relaxed">
                  Based on your responses, we have prepared a high-yield study blueprint focused on <strong>test-taking strategies, repetition, and rule-out logic</strong>.
                </p>
              </div>

              <div className="bg-[#fafafa] p-6 rounded-2xl border border-[#e2e2e2] text-left space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#000000]">
                  <CheckCircle2 className="w-5 h-5 text-[#7f1aa6]" />
                  <span>Recommended Path: All Access Pass + Test Taking Strategies Course</span>
                </div>
                <p className="text-xs text-[#878787] pl-7">
                  Doctors who pair our Core Study Guide with the live/online Test Taking Strategy course experience an average score jump of 38–40 points.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/pediatric-initial-certification" className="btn-pbr-primary py-3 px-6 text-sm">
                  View Recommended Package
                </Link>
                <Link href="/" className="btn-pbr-outline py-3 px-6 text-sm">
                  Back to Homepage
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
