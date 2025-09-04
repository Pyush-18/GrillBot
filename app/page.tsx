import Footer from '@/modules/home/footer'
import Header from '@/modules/home/header'
import HeroSection from '@/modules/home/hero-section'
import React from 'react'

function page() {
  return (
     <div className="min-h-screen bg-[#111] text-white font-sans flex flex-col items-center">
        <Header />
        <HeroSection />
        <Footer />
      </div>
  )
}

export default page