import { Button } from '@/components/ui/button'
import React from 'react'

function HeroSection() {
  return (
     <main className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-4xl mx-auto mt-10">
        <span className="text-sm md:text-base text-gray-400 mb-2 tracking-wide font-medium">
          AI-POWERED INTERVIEW PREPARATION
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mt-4 mb-4 md:mb-6">
          <span className="block">Ace Your Next</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
            Interview with AI
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light">
          Practice and perfect your interview skills with personalized, real-time feedback from our advanced AI voice agent. Get ready to land your dream job.
        </p>
        <Button className="px-8 py-4 bg-teal-500 text-black font-bold rounded-full text-lg shadow-lg hover:bg-teal-400 transform transition-all duration-300 ease-in-out hover:scale-105">
          Start a Practice Interview
        </Button>
      </main>
  )
}

export default HeroSection