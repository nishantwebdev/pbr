import React from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export const VideoQuotes: React.FC = () => {
  const testimonials = [
    {
      title: 'PBR literally saved my butt!',
      quote:
        'PBR literally saved my butt. I was never good at standardized exams and was an ‘at risk’ resident… The details were just right for passing the boards and the organization of the material made it easy for memorization.',
      author: 'Dr. Katherine Wu',
      credential: 'Board Certified Pediatrician',
      image: '/images/dr-katherine-wu-pbr-success-testimonial.webp',
    },
    {
      title: 'Loved it!',
      quote:
        'I took PBR and passed easily. I found it online myself and then I started using it, and I loved it. I went through it multiple times… and that’s all I needed. There is a lot of mnemonics all throughout it that I still remember to this day.',
      author: 'Dr. Jessie Maxwell',
      credential: 'Board Certified Pediatrician',
      image: '/images/dr-jessie-maxwell-testimonial.webp',
    },
    {
      title: 'I was able to pass comfortably!',
      quote:
        'The book provides the perfect balance of depth and succinctness that helped me be successful… I was able to pass comfortably with a score higher than the national mean which was exciting as I have typically scored just at or below the mean on my Step exams.',
      author: 'Dr. Nicole Mathis',
      credential: 'Board Certified Pediatrician',
      image: '/images/dr-nicole-mathis-testimonial.webp',
    },
    {
      title: 'I couldn’t have gotten my score without it!',
      quote:
        'This resource definitely helped solidify core knowledge needed for the exam and I couldn’t have gotten my score without it… I really do appreciate the support PBR has provided! Thanks again.',
      author: 'Dr. Varsha Raghavan',
      credential: 'Board Certified Pediatrician',
      image: '/images/female-pediatrician-pointing-and-guiding-1.webp',
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7f1aa6] bg-[#f5ebfa] px-3 py-1 rounded-full border border-[#7f1aa6]/20">
            Real Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] mt-3">
            Reviews &amp; Doctor Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f4f4f4] rounded-2xl p-6 sm:p-8 border border-[#e2e2e2] flex flex-col justify-between pbr-card"
            >
              <div>
                <Quote className="w-8 h-8 text-[#7f1aa6]/40 mb-3" />
                <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#252525] leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#e2e2e2]">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-white shadow-sm bg-white">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#000000]">{item.author}</h4>
                  <p className="text-xs text-[#7f1aa6] font-medium">{item.credential}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
