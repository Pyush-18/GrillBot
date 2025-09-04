import MainContent from '@/modules/dashboard/components/main-content'
import React from 'react'

function Dashboard() {
  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col md:flex-row mt-10 p-4 md:p-8">
        <MainContent />
    </main>
  )
}

export default Dashboard