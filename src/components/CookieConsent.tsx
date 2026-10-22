'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('pbr_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('pbr_cookie_consent', 'accepted')
    setShow(false)
  }

  if (!show) return null

  return (
    <aside aria-label="Cookie Consent" className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#e2e2e2] flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-pbr-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-xs sm:text-sm text-[#000000]">We Value Your Privacy</h4>
            <p className="text-[11px] sm:text-xs text-[#393939] leading-relaxed">
              We use essential and analytics cookies to improve your study experience. By using our site, you accept our cookie policy.{' '}
              <Link href="/privacy-policy" className="text-pbr-primary font-semibold underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1 border-t border-[#f4f4f4]">
          <button
            onClick={accept}
            className="btn-pbr-primary text-xs py-1.5 px-4 font-bold"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  )
}
