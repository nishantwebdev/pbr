/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pbr-primary': 'var(--pbr-primary)',
        'pbr-primary-hover': 'var(--pbr-primary-hover)',
        pbr: {
          primary: 'var(--pbr-primary)',
          purple: {
            DEFAULT: 'var(--pbr-primary)',
            dark: '#681488',
            light: '#b140ec',
            pale: '#f5ebfa',
          },
          black: '#000000',
          charcoal: '#252525',
          slate: '#393939',
          muted: '#878787',
          border: '#e2e2e2',
          gray: {
            light: '#f4f4f4',
            card: '#f9f9f9',
          },
          white: '#ffffff',
          gold: {
            DEFAULT: '#ffc72c',
            hover: '#e5a800',
            dark: '#d49400',
          },
          green: '#10b981',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'pbr-card': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'pbr-hover': '0 10px 30px rgba(127, 26, 166, 0.12)',
        'pbr-btn': '0 4px 14px rgba(127, 26, 166, 0.35)',
      },
      borderRadius: {
        'pbr': '12px',
        'pbr-lg': '18px',
        'pbr-full': '9999px',
      },
    },
  },
  plugins: [],
}
