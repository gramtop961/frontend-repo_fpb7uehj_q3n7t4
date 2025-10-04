import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Fingerprint, Lock, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative glow backgrounds */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Prelaunch — Request early access
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Auth that disappears.</span>
          </h1>

          <p className="text-white/70 text-lg max-w-xl">
            HoloAuth makes passwordless authentication effortless. Drop in biometric logins with a single line of code and ship secure, delightful sign-ins your users will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
            >
              Join the waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#docs"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              View docs
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <TrustBadge icon={Fingerprint} label="FIDO2 / WebAuthn" />
            <TrustBadge icon={Shield} label="SOC 2 Ready" />
            <TrustBadge icon={Lock} label="End‑to‑end encryption" />
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          {/* Soft vignette overlay that does not block interaction */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]" />
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span className="text-white/70">{label}</span>
    </div>
  );
}
