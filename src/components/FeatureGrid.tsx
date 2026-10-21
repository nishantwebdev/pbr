import React from 'react'
import Image from 'next/image'

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Concise Content',
      description: 'We cut the fluff and focus only on the most tested topics, saving you hours of study time.',
      icon: '/images/Concise-Content-icon-1.webp',
    },
    {
      title: 'Complex Topics, Made Simple',
      description: 'No overwhelming basic science. Just clear, easy-to-understand explanations that stick.',
      icon: '/images/Made-Simple-icon-1.webp',
    },
    {
      title: 'Proven Effectiveness',
      description:
        'PBR members score well above the national mean, with an estimated 99% first-time pass rate based on over 10 years of data.',
      icon: '/images/Effectiveness-icon-1.webp',
    },
    {
      title: '100% Pass Guarantee',
      description:
        'If you don’t pass on your first try, you get your money back. That’s how confident we are. Visit our guarantee page for full details.',
      icon: '/images/Guarantee-icon-1.webp',
    },
    {
      title: 'Multimodal Learning',
      description:
        'Learn your way with videos, audio, print, and digital resources working together for seamless studying.',
      icon: '/images/Learning-icon-1.webp',
    },
    {
      title: 'Built for Mastery',
      description:
        'Repetition is built in. Our content is designed to help you review and retain what matters most.',
      icon: '/images/Mastery-icon-1.webp',
    },
  ]

  return (
    <section className="bg-[#f4f4f4] py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7f1aa6] bg-[#f5ebfa] px-3 py-1 rounded-full border border-[#7f1aa6]/20">
            The PBR Difference
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] mt-3">
            Why Students Love Us:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#e2e2e2] shadow-sm hover:shadow-lg transition-all pbr-card flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f5ebfa] flex items-center justify-center p-2 mb-6 border border-[#7f1aa6]/15">
                <Image
                  src={feat.icon}
                  alt={feat.title}
                  width={40}
                  height={40}
                  className="max-h-8 w-auto object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-3">
                {feat.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#393939] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
