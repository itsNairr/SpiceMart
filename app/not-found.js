import React from 'react'
import Headerbar from './components/headerbar/Headerbar'
import Footer from './components/footer/Footer'
import { inter } from './fonts'

export default function notfound() {
  return (
  <div className={`bg-back ${inter.variable} font-sans`}>
    <Headerbar />
    <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-[45px] text-wte text-center">Error 404: This page does not exist</h2>
    <h3 className="my-4 text-wte"></h3>
  </div>
  <Footer />
  </div>
  )
}
