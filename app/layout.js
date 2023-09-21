import './globals.css'
import './mainpage.css'
import { inter } from './fonts'
import Footer from './components/footer/Footer'
import Headerbar from './components/headerbar/Headerbar'

export const metadata = {
  title: 'Spice Mart',
  description: 'Welcome to the Spice Mart Homepage.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#1A1818"/>
      <body className={`${inter.variable} font-sans`}>
        <Headerbar/>
        {children}
        <Footer/>
        </body>
      </head>
    </html>
  )
}