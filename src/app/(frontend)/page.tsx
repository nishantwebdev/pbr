import React from 'react'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PreorderPromo } from '@/components/PreorderPromo'
import { QuickPathSelector } from '@/components/QuickPathSelector'
import { EditorialStory } from '@/components/EditorialStory'
import { ReviewsSlider } from '@/components/ReviewsSlider'
import { WhoDoWeHelp } from '@/components/WhoDoWeHelp'
import { VideoQuotes } from '@/components/VideoQuotes'
import { FeatureGrid } from '@/components/FeatureGrid'
import { QuizLeadGen } from '@/components/QuizLeadGen'
import { FounderBio } from '@/components/FounderBio'
import { RecentArticles } from '@/components/RecentArticles'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { LeadCaptureDrawer } from '@/components/LeadCaptureDrawer'
import { QuestionBankModal } from '@/components/QuestionBankModal'
import { CookieConsent } from '@/components/CookieConsent'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#252525]">
      {/* 1. Preorder Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Global Site Header & Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Preorder Promo & Institution Badges */}
        <PreorderPromo />

        {/* 5. Quick Path Selector (3 Audience Cards) */}
        <QuickPathSelector />

        {/* 6. Philosophy & Methodology Story */}
        <EditorialStory />

        {/* 7. Reviews, Trustindex Badge & Media Mentions */}
        <ReviewsSlider />

        {/* 8. Who Do We Help Program Cards */}
        <WhoDoWeHelp />

        {/* 9. Video Reviews & Testimonial Quotes */}
        <VideoQuotes />

        {/* 10. Feature Benefit Grid (Why Students Love Us) */}
        <FeatureGrid />

        {/* 11. Interactive Quiz / Risk Assessment Lead Magnet */}
        <QuizLeadGen />

        {/* 12. Meet Our Founder (Dr. Ashish Goyal) */}
        <FounderBio />

        {/* 13. Popular Articles Knowledge Hub */}
        <RecentArticles />

        {/* 14. Final High-Converting Call to Action Banner */}
        <CallToAction />
      </main>

      {/* 15. Global Multi-Column Footer */}
      <Footer />

      {/* 16. Floating Free Chapters Lead Magnet */}
      <LeadCaptureDrawer />

      {/* 17. Question Bank Order Bump Modal */}
      <QuestionBankModal />

      {/* 18. Cookie Consent Banner */}
      <CookieConsent />

      {/* 19. Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  )
}
