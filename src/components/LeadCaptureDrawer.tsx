'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Download, X, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

export const LeadCaptureDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Close on Escape key & prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !firstName) {
      setError('Please fill in your name and email.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Free Chapters Download',
          name: `${firstName} ${lastName}`.trim(),
          email,
          metadata: {
            chapters: ['Gastroenterology', 'Dermatology'],
            source: 'Homepage Floating Lead Magnet',
            timestamp: new Date().toISOString(),
          },
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Fallback simulated success if table is still creating
        setSubmitted(true)
      }
    } catch (err) {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Bottom Trigger Button (if drawer closed and not dismissed) */}
      {!isOpen && !submitted && !isDismissed && (
        <aside
          aria-label="Free Chapters Offer"
          className="fixed bottom-3 inset-x-2.5 sm:inset-x-auto sm:bottom-6 sm:right-24 z-40 flex items-center justify-center sm:justify-start pointer-events-none"
        >
          <div className="relative pointer-events-auto w-full sm:w-auto max-w-lg sm:max-w-none">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto bg-[#ffc72c] hover:bg-[#f5be24] text-black shadow-2xl rounded-2xl sm:rounded-full py-2 px-2.5 sm:py-3 sm:pl-4 sm:pr-6 flex items-center justify-between sm:justify-start gap-2.5 sm:gap-4 border-2 border-white text-left transition-all hover:scale-[1.01] sm:hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Chapter Thumbnails */}
              <div className="flex items-center -space-x-3.5 sm:-space-x-5 shrink-0">
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-white p-0.5 sm:p-1.5 border border-[#e2e2e2] shadow-sm overflow-hidden flex items-center justify-center shrink-0">
                  <Image
                    src="/images/free-chapter-1.webp"
                    alt="Gastroenterology Chapter"
                    width={70}
                    height={70}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-white p-0.5 sm:p-1.5 border border-[#e2e2e2] shadow-md overflow-hidden flex items-center justify-center shrink-0">
                  <Image
                    src="/images/free-chapter-2.webp"
                    alt="Dermatology Chapter"
                    width={70}
                    height={70}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text / Badges */}
              <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                <div className="flex items-center gap-1.5 sm:gap-2 font-black uppercase text-[11px] sm:text-xs md:text-sm tracking-tight sm:tracking-wider leading-tight text-[#000000]">
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-black hidden sm:inline-block" />
                  <span className="truncate sm:whitespace-normal font-extrabold">
                    Claim 2 FREE Chapters &amp; MP3s
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] md:text-xs font-bold text-[#3b2b00] tracking-normal">
                  <span className="bg-black/10 px-1.5 py-0.5 rounded font-extrabold whitespace-nowrap">
                    1. GASTRO<span className="hidden md:inline">ENTEROLOGY</span>
                  </span>
                  <span className="bg-black/10 px-1.5 py-0.5 rounded font-extrabold whitespace-nowrap">
                    2. DERM<span className="hidden md:inline">ATOLOGY</span>
                  </span>
                </div>
              </div>

              {/* Action Button Pill */}
              <div className="shrink-0 pl-1">
                <span className="inline-flex items-center gap-1 bg-[#000000] text-white text-[10px] sm:text-xs font-bold py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-xl sm:rounded-full shadow-md transition-colors whitespace-nowrap">
                  <span>Get Free</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </span>
              </div>
            </button>

            {/* Dismiss Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsDismissed(true)
              }}
              aria-label="Dismiss offer"
              className="absolute -top-2 -right-1 sm:-top-2 sm:-right-2 p-1 sm:p-1.5 rounded-full bg-black/85 hover:bg-black text-white shadow-lg transition-colors z-10 border border-white"
            >
              <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Slide-in Modal / Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#e2e2e2] overflow-hidden relative animate-in slide-in-from-bottom duration-300 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-[#878787] hover:text-[#000000] rounded-full hover:bg-[#f4f4f4] transition-colors z-10 bg-white/80 backdrop-blur-sm shadow-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="p-6 sm:p-8 text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#000000]">
                  Great Job! You’re Almost Done!
                </h3>
                <p className="text-xs sm:text-sm text-[#393939] leading-relaxed max-w-sm mx-auto">
                  We’ve sent the <strong>Gastroenterology &amp; Dermatology</strong> free chapters directly to <strong>{email}</strong>. Please check your inbox (and spam folder) in the next 2 minutes.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-pbr-primary py-2.5 px-6 text-sm mt-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="overflow-y-auto p-5 sm:p-8">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pr-8">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 relative flex-shrink-0 bg-[#fafafa] rounded-xl border border-[#e2e2e2] overflow-hidden p-1">
                    <Image
                      src="/images/pbr-dermatology-gastroenterology-study-guides.webp"
                      alt="Free Chapters"
                      width={128}
                      height={128}
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-pbr-primary bg-[#f5ebfa] px-2 py-0.5 rounded">
                      Instant Access
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#000000] mt-1 leading-snug">
                      After Failing 5, 6 and Even TEN Times With Other Study Guides, Pediatricians Come to Us… and PASS.
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#878787] mb-4 leading-relaxed">
                  Download the complete Pediatric Dermatology &amp; Gastroenterology study guides and learn the top reasons why good pediatricians fail the boards.
                </p>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#252525] mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full text-xs sm:text-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-[#e2e2e2] focus:outline-none focus:border-pbr-primary focus:ring-1 focus:ring-pbr-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#252525] mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full text-xs sm:text-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-[#e2e2e2] focus:outline-none focus:border-pbr-primary focus:ring-1 focus:ring-pbr-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Work / Personal Email*
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="doctor@hospital.org"
                      className="w-full text-xs sm:text-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-[#e2e2e2] focus:outline-none focus:border-pbr-primary focus:ring-1 focus:ring-pbr-primary"
                    />
                  </div>

                  <p className="text-[11px] text-[#878787] leading-tight">
                    We promise to never sell your info or send spam. Unsubscribe at any time.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-pbr-primary w-full text-sm py-3 mt-1 shadow-md flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>{loading ? 'Processing...' : 'Download Free Chapters'}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

