import React from 'react'
import Link from 'next/link'

interface AnnouncementBarProps {
  text?: string
  buttonText?: string
  buttonUrl?: string
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  text = '2026 Edition Includes FREE Instant Online Access when you Preorder the 2027 Edition for just $1',
  buttonText = 'PREORDER FOR $1 →',
  buttonUrl = '#preorder-2027',
}) => {
  return (
    <aside aria-label="Announcement" className="bg-pbr-primary text-white py-2.5 px-4 text-xs md:text-sm font-medium sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">
            Special Offer
          </span>
          <span>{text}</span>
        </div>
        <Link
          href={buttonUrl}
          className="btn-pbr-gold text-xs uppercase tracking-wider font-bold py-1 px-3 whitespace-nowrap shadow-sm hover:scale-105 transition-transform"
        >
          {buttonText}
        </Link>
      </div>
    </aside>
  )
}
