import '@/app/styles/index.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { DashboardPage } from '@/pages/dashboard'

export function App() {
  return (
    <>
      <Header />
      <main className="relative z-0 min-h-dvh w-full bg-white">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  )
}
