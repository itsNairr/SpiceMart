import { Inter, Mystery_Quest } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const mystery_quest = Mystery_Quest({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mystery-quest',
  display: 'swap',
})

export const furius = localFont({ 
  src: './assets/custom.woff',
  variable: '--font-furius',
  display: 'swap',
})