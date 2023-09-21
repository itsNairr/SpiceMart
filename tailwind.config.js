/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xs': { min: '300px' },
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      '2xl': { min: '1359px' } // Desktop widescreen.
    },
    fontSize: {
      'footft': '25px',
      'footst' : '20px',
      'foottxts' : '12px',
      'body' : '16px',
    },
    extend: {
      colors: {
        'wte' : '#FFF7ED',
        'hvrwte' : '#E3CFB7',
        'prwte' : '#E16D3C',
        'back' : '#1A1818',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        furius: ['var(--font-furius)'],
        quest: ['var(--font-mystery-quest)']
      }
    },
  },
  plugins: [],
}
