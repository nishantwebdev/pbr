import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

export const RecentArticles: React.FC = () => {
  const articles = [
    {
      title: 'Pediatric Board Exam Results for 2025 and Insights for 2026',
      category: 'Passing The Boards',
      image: '/images/confident-pediatrician-after-board-success.webp',
      excerpt:
        'Well, friends, the American Board of Pediatrics exam results for 2025 have been announced! Learn the key score trends and strategic takeaways for 2026.',
      url: '/pediatric-board-exam-results-2024',
    },
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
      image: '/images/pediatric-resident-board-review-prep.webp',
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
  ]

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7f1aa6] bg-[#f5ebfa] px-3 py-1 rounded-full border border-[#7f1aa6]/20">
              Insights &amp; Guides
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] mt-3">
              Popular Articles
            </h2>
          </div>
          <Link
            href="/blog-articles"
            className="inline-flex items-center gap-1.5 font-bold text-sm text-[#7f1aa6] hover:text-[#b140ec] transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Article Cards */}
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
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#7f1aa6] px-2.5 py-1 rounded-full shadow-sm border border-[#e2e2e2]">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#000000] group-hover:text-[#7f1aa6] transition-colors line-clamp-2 mb-2.5">
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7f1aa6] group-hover:translate-x-1 transition-transform"
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
