import React from 'react'
import Hero from './components/Hero'
import CodeSnippets from './components/CodeSnippets'
import TrustSection from './components/TrustSection'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a14] text-white selection:bg-cyan-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Divider />
        <CodeSnippets />
        <TrustSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#070a14]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500" />
          <span className="font-medium">HoloAuth</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#docs" className="hover:text-white">Docs</a>
          <a href="#waitlist" className="hover:text-white">Waitlist</a>
          <a href="#" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">Sign in</a>
        </nav>
      </div>
    </header>
  )
}

function Divider() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px" />
      <div className="h-16" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} HoloAuth, Inc.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Status</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  )
}
