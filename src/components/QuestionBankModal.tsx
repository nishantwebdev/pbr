'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X, Check, Sparkles } from 'lucide-react'

export interface QuestionBankModalProps {
  orderFormUrl?: string | null
}

export const QuestionBankModal: React.FC<QuestionBankModalProps> = ({ orderFormUrl }) => {
  const [isOpen, setIsOpen] = useState(false)

  const checkoutUrl =
    orderFormUrl ||
    'https://sz258.infusionsoft.app/app/orderForms/a9c2a4e4-aed2-48c5-ae5c-9617140bf3a7'
  const isExternal = checkoutUrl.startsWith('http://') || checkoutUrl.startsWith('https://')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-[#e2e2e2] overflow-hidden relative animate-in zoom-in-95 duration-200 p-6 sm:p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#878787] hover:text-[#000000] rounded-full hover:bg-[#f4f4f4] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5ebfa] text-pbr-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Special Member Offer</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#000000] leading-tight">
            Add the PBR Question Bank to Your Order?
          </h3>

          <p className="text-xs sm:text-sm text-[#252525] leading-relaxed">
            Get 2,000+ ABP-style questions, concise explanations, take-home points, and strategy-aligned answer breakdowns — all designed to reinforce the PBR method and strengthen your recall for the Initial Certification Exam.
          </p>

          <div className="bg-[#f4f4f4] p-4 rounded-2xl border border-[#e2e2e2] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#000000]">
              <Check className="w-4 h-4 text-pbr-primary" />
              <span>12-month full online access</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#000000]">
              <Check className="w-4 h-4 text-pbr-primary" />
              <span>All 2026/2027 curriculum updates included</span>
            </div>
            <div className="pt-2 border-t border-[#e2e2e2] flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-extrabold text-pbr-primary">$297</span>
                <span className="text-xs text-[#878787] line-through ml-2">USUAL $1,000</span>
              </div>
              <span className="bg-red-50 text-red-600 text-xs font-extrabold px-2 py-0.5 rounded border border-red-200">
                50% OFF
              </span>
            </div>
          </div>

          <div className="pt-2 space-y-2.5">
            <Link
              href={checkoutUrl}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="btn-pbr-primary w-full text-center text-sm py-3"
            >
              Add Question Bank To My Order
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-semibold text-[#878787] hover:text-[#000000] py-1.5 transition-colors"
            >
              No thanks, continue without Question Bank
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
