import React from 'react';

export default function CTA() {
  return (
    <section id="waitlist" className="py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Get early access</h2>
          <p className="text-white/70 mt-2">Join the waitlist for HoloAuth and be first to integrate disappearing auth.</p>

          <form className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <button type="submit" className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
              Join waitlist
            </button>
          </form>
          <p className="text-xs text-white/50 mt-3">We’ll only email about access and product updates. No spam.</p>
        </div>
      </div>
    </section>
  );
}
