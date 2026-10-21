import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Pass Your Pediatric Boards With Confidence',
    },
    {
      name: 'subheading',
      type: 'textarea',
      defaultValue:
        'Thousands of pediatricians (even those who’ve failed multiple times) have passed their board exams with our proven Pediatrics Board Review® system. Whether it’s your first time or your tenth, our resources and strategies help you pass with confidence.',
    },
    {
      name: 'bullets',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'Board certification in a SINGLE ATTEMPT' },
        { text: 'Tried and tested courses used by 10,000+ pediatricians' },
        { text: 'First-time pass rates estimated at 99%' },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '#who-do-we-help',
    },
    {
      name: 'guaranteeText',
      type: 'text',
      defaultValue: 'FIRST-TIME PASS GUARANTEE, OR YOUR MONEY BACK!',
    },
    {
      name: 'speechBubble',
      type: 'text',
      defaultValue: 'What if passing isn’t about what you study, but how you study?',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export const PreorderBlock: Block = {
  slug: 'preorder',
  labels: {
    singular: 'Preorder Promo',
    plural: 'Preorder Promos',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Preorder for Only $1 Now & Save Up to 75%',
    },
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'releaseDate',
          type: 'text',
          defaultValue: 'Estimated Release Date: December 15, 2026',
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Preorder for $1 ›',
        },
        {
          name: 'buttonUrl',
          type: 'text',
          defaultValue: '/preorder-now',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

export const InstitutionLogosBlock: Block = {
  slug: 'institution-logos',
  labels: {
    singular: 'Institution Logos',
    plural: 'Institution Logos',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Trusted by top doctors who have practiced at renowned institutions:',
    },
    {
      name: 'institutions',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { name: 'Johns Hopkins Medicine' },
        { name: 'Cleveland Clinic' },
        { name: 'Mayo Clinic' },
        { name: 'Massachusetts General Hospital' },
        { name: 'University of Michigan Medicine' },
      ],
    },
  ],
}

export const QuickPathSelectorBlock: Block = {
  slug: 'quick-path-selector',
  labels: {
    singular: 'Quick Path Selector',
    plural: 'Quick Path Selectors',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Start here',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        {
          question: 'First-time or repeat board taker?',
          title: 'Initial Certification Exam',
          ctaText: 'Start here',
          ctaUrl: '/pediatric-initial-certification',
        },
        {
          question: 'Need to recertify quickly?',
          title: 'MOC & MOCA-Peds',
          ctaText: 'Start here',
          ctaUrl: '/moca-peds-study-guide',
        },
        {
          question: 'Institutional partnerships',
          title: 'Help your residents pass with confidence at scale',
          ctaText: 'Start here',
          ctaUrl: '/residency-discounts',
        },
      ],
    },
  ],
}

export const EditorialStoryBlock: Block = {
  slug: 'editorial-story',
  labels: {
    singular: 'Editorial Story / Methodology',
    plural: 'Editorial Stories',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'What if passing isn’t about what you study, but how you study?',
    },
    {
      name: 'leadText',
      type: 'text',
      defaultValue: 'You’re not alone. Even brilliant doctors fail when they rely on the wrong approach.',
    },
    {
      name: 'bodyParagraphs',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        {
          text: 'Board review isn’t just about cramming more content. It’s about how you study. It’s about the strategy you use, the structure you follow, and the support you get.',
        },
        {
          text: 'We help you master all three, so you don’t just study harder. You study smarter.',
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '#who-do-we-help',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export const ReviewsSliderBlock: Block = {
  slug: 'reviews-slider',
  labels: {
    singular: 'Reviews & Social Proof Slider',
    plural: 'Reviews & Social Proof Sliders',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Trusted by 10,000+ Pediatricians',
    },
    {
      name: 'ratingText',
      type: 'text',
      defaultValue: '5.0 Excellent rating - Last 12 months',
    },
    {
      name: 'responseRateText',
      type: 'text',
      defaultValue: 'Responds to customer reviews: 94.1% response rate within 48 hours',
    },
    {
      name: 'useLiveTrustindexWidget',
      type: 'checkbox',
      defaultValue: true,
      label: 'Embed Live Trustindex Widget',
    },
  ],
}

export const WhoDoWeHelpBlock: Block = {
  slug: 'who-do-we-help',
  labels: {
    singular: 'Who Do We Help Programs',
    plural: 'Who Do We Help Programs',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Who Do We Help?',
    },
    {
      name: 'subheading',
      type: 'textarea',
      defaultValue:
        'Our high-yield study resources and proven strategies help pediatricians pass their board exams with confidence.',
    },
    {
      name: 'programs',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'bullets',
          type: 'array',
          fields: [{ name: 'item', type: 'text', required: true }],
        },
        {
          name: 'ctaText',
          type: 'text',
          required: true,
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      defaultValue: [
        {
          title: 'Initial Certification Exam',
          bullets: [
            { item: 'For first-time or repeat test-takers, even after multiple failed attempts' },
            { item: 'Discover your risk of failing and get a tailored path to success' },
            { item: 'Learn the pediatric board review strategies that separate those who pass from those who don’t' },
          ],
          ctaText: 'View Courses',
          ctaUrl: '/pediatric-initial-certification',
        },
        {
          title: 'MOCA-Peds',
          bullets: [
            { item: 'Already certified? Prepare for quarterly recertification exams with ease.' },
            { item: 'High-yield, low-stress review system optimized for your test days' },
            { item: 'Study smarter, pass MOCA-Peds in just three years, and get a two-year break' },
          ],
          ctaText: 'View Courses',
          ctaUrl: '/moca-peds-study-guide',
        },
        {
          title: 'Residency Partnerships',
          bullets: [
            { item: 'Bulk access for residency programs (4 to 120+ residents)' },
            { item: 'Equip your residents with a proven, structured system' },
            { item: 'Work with an expert partner to improve board pass rates' },
          ],
          ctaText: 'Get Free Guidance',
          ctaUrl: '/residency-discounts',
        },
        {
          title: 'Small Group Discounts',
          bullets: [
            { item: 'Friends or colleagues buying together for group discounts' },
            { item: 'Access the full PBR system and save when you team up' },
            { item: 'Prepare together, pass together' },
          ],
          ctaText: 'Get Resident Discounts',
          ctaUrl: '/group-discount',
        },
        {
          title: 'CME Specials',
          bullets: [
            { item: 'Earn CME and MOC credits while preparing for the boards or for recertification' },
            { item: 'Fast and easy claims process for over 200 credits' },
            { item: 'Ideal for busy professionals with employer-funded education' },
          ],
          ctaText: 'Get Credits And Rebates',
          ctaUrl: '/cme',
        },
      ],
    },
  ],
}

export const VideoQuotesBlock: Block = {
  slug: 'video-quotes',
  labels: {
    singular: 'Video & Student Reviews',
    plural: 'Video & Student Reviews',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Reviews',
    },
    {
      name: 'quotes',
      type: 'array',
      fields: [
        {
          name: 'headline',
          type: 'text',
          required: true,
        },
        {
          name: 'body',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          defaultValue: 'Board Certified Pediatrician',
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      defaultValue: [
        {
          headline: 'PBR literally saved my butt!',
          body: 'PBR literally saved my butt. I was never good at standardized exams and was an ‘at risk’ resident… The details were just right for passing the boards and the organization of the material made it easy for memorization.',
          author: 'Dr. Katherine Wu',
          role: 'Board Certified Pediatrician',
        },
        {
          headline: 'Loved it!',
          body: 'I took PBR and passed easily. I found it online myself and then I started using it, and I loved it. I went through it multiple times… and that’s all I needed. There is a lot of mnemonics all throughout it that I still remember to this day.',
          author: 'Dr. Jessie Maxwell',
          role: 'Board Certified Pediatrician',
        },
        {
          headline: 'I was able to pass comfortably!',
          body: 'The book provides the perfect balance of depth and succinctness that helped me be successful… I was able to pass comfortably with a score higher than the national mean which was exciting as I have typically scored just at or below the mean on my Step exams.',
          author: 'Dr. Nicole Mathis',
          role: 'Board Certified Pediatrician',
        },
        {
          headline: 'I couldn’t have gotten my score without it!',
          body: 'This resource definitely helped solidify core knowledge needed for the exam and I couldn’t have gotten my score without it… I really do appreciate the support PBR has provided! Thanks again.',
          author: 'Dr. Varsha Raghavan',
          role: 'Board Certified Pediatrician',
        },
      ],
    },
  ],
}

export const FeatureGridBlock: Block = {
  slug: 'feature-grid',
  labels: {
    singular: 'Feature Grid (Why Students Love Us)',
    plural: 'Feature Grids',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Why Students Love Us:',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'iconName',
          type: 'text',
        },
      ],
      defaultValue: [
        {
          title: 'Concise Content',
          description: 'We cut the fluff and focus only on the most tested topics, saving you hours of study time.',
          iconName: 'Concise-Content-icon-1.webp',
        },
        {
          title: 'Complex Topics, Made Simple',
          description: 'No overwhelming basic science. Just clear, easy-to-understand explanations that stick.',
          iconName: 'Made-Simple-icon-1.webp',
        },
        {
          title: 'Proven Effectiveness',
          description:
            'PBR members score well above the national mean, with an estimated 99% first-time pass rate based on over 10 years of data.',
          iconName: 'Effectiveness-icon-1.webp',
        },
        {
          title: '100% Pass Guarantee',
          description:
            'If you don’t pass on your first try, you get your money back. That’s how confident we are. Visit our guarantee page for full details.',
          iconName: 'Guarantee-icon-1.webp',
        },
        {
          title: 'Multimodal Learning',
          description:
            'Learn your way with videos, audio, print, and digital resources working together for seamless studying.',
          iconName: 'Learning-icon-1.webp',
        },
        {
          title: 'Built for Mastery',
          description:
            'Repetition is built in. Our content is designed to help you review and retain what matters most.',
          iconName: 'Mastery-icon-1.webp',
        },
      ],
    },
  ],
}

export const QuizLeadGenBlock: Block = {
  slug: 'quiz-lead-gen',
  labels: {
    singular: 'Quiz & Risk Calculator CTA',
    plural: 'Quiz CTAs',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Not sure where to start?',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Take our quiz and get started',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'We help pediatricians pass the boards, even if they’ve been struggling for years.',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'quizUrl',
      type: 'text',
      defaultValue: '/risk-calculator',
    },
  ],
}

export const FounderBioBlock: Block = {
  slug: 'founder-bio',
  labels: {
    singular: 'Meet Our Founder',
    plural: 'Founder Bios',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Meet our founder, ASHISH GOYAL',
    },
    {
      name: 'bio',
      type: 'textarea',
      defaultValue:
        'After failing his pediatric boards, Dr. Ashish Goyal completely restructured his studying technique to embrace a new style of learning that was focused on efficiency and repetition. As a result, he increased his score by 40%, and was invited by the ABP to write board questions for them. That led Ashish to begin a journey that has helped thousands of pediatricians pass their board exams through Pediatrics Board Review®.',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '#who-do-we-help',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export const RecentArticlesBlock: Block = {
  slug: 'recent-articles',
  labels: {
    singular: 'Popular Articles Hub',
    plural: 'Recent Articles Hubs',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Popular Articles',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
    },
  ],
}

export const CallToActionBlock: Block = {
  slug: 'call-to-action',
  labels: {
    singular: 'Final CTA Banner',
    plural: 'Final CTA Banners',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Take the first step toward passing your boards - with clarity, confidence, and a proven system.',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '#who-do-we-help',
    },
  ],
}

export const allBlocks = [
  HeroBlock,
  PreorderBlock,
  InstitutionLogosBlock,
  QuickPathSelectorBlock,
  EditorialStoryBlock,
  ReviewsSliderBlock,
  WhoDoWeHelpBlock,
  VideoQuotesBlock,
  FeatureGridBlock,
  QuizLeadGenBlock,
  FounderBioBlock,
  RecentArticlesBlock,
  CallToActionBlock,
]
