'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export const RecentArticles: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const featuredArticle = {
    title: 'PEDIATRIC BOARD EXAM RESULTS FOR 2025 AND INSIGHTS FOR 2026',
    category: 'PASSING THE BOARDS',
    videoId: 'xXJjQodcM9c',
    thumbnail: '/images/Pediatric-Board-Exam-Results-for-2024-thumbnail.webp',
    excerpt:
      "Well, friends, the American Board of Pediatrics exam results for 2025 have been announced! It's always an emotional time for us here at PBR HQ. It's also overwhelming because we get flooded with emails from the members who have worked so hard over the past year, and have now FINALLY passed the boards! The stories from our 2025 members have been wonderful. To have members say that we have changed their lives has been nothing less than humbling.",
    author: {
      name: 'Dr. Ashish Goyal',
      date: 'December 2, 2025',
      image: '/images/ashish-goyal-pbr-founder.webp',
    },
    url: '/pediatric-board-exam-results-2024',
  }

  const articles = [
    {
      title: 'So You Failed The Pediatric Boards? Use A Recovery Plan That Works!',
      category: 'Failed Pediatric Boards',
      image: '/images/female-pediatrician-pointing-and-guiding-1.webp',
      excerpt:
        'Since I failed the first time too, and then increased my score by 40%, follow this step-by-step guide with an easy-to-follow study schedule and recovery structure.',
      url: '/failed-pediatric-boards',
    },
    {
      title: 'Why AAP PREP Questions Are NOT The Best Study Questions For the Boards',
      category: 'Study Schedule & Tips',
      image: '/images/Are-AAP-Prep-Questions-Good-to-Study.webp',
      excerpt:
        'Pediatricians often treat AAP PREP questions as a study resource. This is a very common mistake. Read this article to understand how to use them effectively.',
      url: '/why-prep-questions-are-not-the-best-study-questions',
    },
    {
      title: 'How Many AAP Prep Questions Should I Do to Pass the Pediatric Boards?',
      category: 'Study Schedule & Tips',
      image: '/images/How-Many-AAP-Prep-Questions-for-Board-Review-1.webp',
      excerpt:
        'When using AAP PREP questions for practicing board-style questions, is there a minimum number you should do? Get all your questions answered here.',
      url: '/how-many-aap-prep-questions-should-i-do',
    },
    {
      title: 'Test-Taking Strategies for Medical Board Exams',
      category: 'Passing The Boards',
      image: '/images/Use-Test-Taking-Strategy-to-Help-You-Pass.webp',
      excerpt:
        'Focusing only on medical topics is not enough. Learn 3 core test-taking strategies to break down, process, and answer questions accurately under timed pressure.',
      url: '/test-taking-strategies-medical-board-exams',
    },
    {
      title: 'Creating Memorable Pediatric Mnemonics',
      category: 'Pediatric Mnemonics',
      image: '/images/Great-Mnemonics-Can-Make-Passing-Much-Easier.webp',
      excerpt:
        'It’s impossible to remember 2500 pediatric topics through rote memorization. Learn how simple, effective mnemonics can dramatically elevate your recall.',
      url: '/pediatric-mnemonics',
    },
    {
      title: 'Pros and Cons of a Pediatric Board Review Course',
      category: 'Study Resources',
      image: '/images/Pros-and-Cons-of-Pediatric-Board-Review-Course-1.webp',
      excerpt:
        'Are board review courses really worth the investment? Discover the critical advantages, hidden pitfalls, and how to choose the right prep for your schedule.',
      url: '/pros-and-cons-pediatric-board-review-course',
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000000] tracking-tight">
              Popular <span className="text-pbr-primary">Articles</span>
            </h2>
          </div>
          <Link
            href="/blog-articles"
            className="inline-flex items-center gap-1.5 font-bold text-sm text-pbr-primary hover:text-[#b140ec] transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Article Card with Video */}
        <div className="bg-[#fbf6ee] rounded-3xl p-6 sm:p-10 mb-14 border border-[#eee4cf] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Video & Featured Badge */}
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md bg-black relative group">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featuredArticle.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={featuredArticle.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full relative block cursor-pointer text-left focus:outline-none"
                    aria-label="Play Video"
                  >
                    {/* Clean Video Thumbnail - Pediatric-Board-Exam-Results-for-2024-thumbnail.webp */}
                    <Image
                      src={featuredArticle.thumbnail}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />

                    {/* Subtle dark vignette on hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

                    {/* Sleek YouTube-style Red Play Button (no text, no badges) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-11 bg-[#ff0000] group-hover:bg-[#cc0000] rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <span className="bg-pbr-gold text-black text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg shadow-sm">
                FEATURED ARTICLE
              </span>
            </div>

            {/* Right: Article Details */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#000000] uppercase tracking-tight leading-snug">
                <Link href={featuredArticle.url} className="hover:text-pbr-primary transition-colors">
                  {featuredArticle.title}
                </Link>
              </h3>

              <p className="text-sm sm:text-base text-[#393939] leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div>
                <span className="inline-block bg-white backdrop-blur-sm text-[11px] font-bold text-pbr-primary px-2.5 py-1 rounded-full shadow-sm border border-[#e2e2e2]">
                  {featuredArticle.category}
                </span>
              </div>

              {/* Author & Date */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white relative shrink-0 border border-[#e2e2e2]">
                  <Image
                    src={featuredArticle.author.image}
                    alt={featuredArticle.author.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#000000]">
                    {featuredArticle.author.name}
                  </p>
                  <p className="text-[11px] text-[#6b6b6b]">
                    {featuredArticle.author.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between pbr-card group"
            >
              <div>
                <div className="h-48 w-full relative bg-[#f4f4f4] overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white backdrop-blur-sm text-[11px] font-bold text-pbr-primary px-2.5 py-1 rounded-full shadow-sm border border-[#e2e2e2]">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#000000] group-hover:text-pbr-primary transition-colors line-clamp-2 mb-2.5">
                    <Link href={art.url}>{art.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#393939] line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={art.url}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pbr-primary group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
