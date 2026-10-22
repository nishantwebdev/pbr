import React from 'react'
import { Header } from '@/components/Header'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Footer } from '@/components/Footer'
import { RiskCalculatorForm } from '@/components/RiskCalculatorForm'
import { getAllSiteGlobals } from '@/lib/globals'

export const dynamic = 'force-dynamic'

export default async function RiskCalculatorPage() {
  const { siteSettings, header, footer } = await getAllSiteGlobals()

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      <AnnouncementBar data={siteSettings?.announcementBar} />
      <Header data={header} />

      <main className="flex-1 py-12 md:py-20 px-4">
        <RiskCalculatorForm />
      </main>

      <Footer data={footer} />
    </div>
  )
}
