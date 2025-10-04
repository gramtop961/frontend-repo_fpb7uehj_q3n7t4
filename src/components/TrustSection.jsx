import React from 'react';
import { ShieldCheck, Globe, Server, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const items = [
    { icon: ShieldCheck, title: 'Security by default', desc: 'WebAuthn + FIDO2, device-bound keys, and hardware-backed attestation where available.' },
    { icon: Server, title: 'Zero credential storage', desc: 'No password databases. We tokenize device public keys and rotate automatically.' },
    { icon: Globe, title: 'Global edge', desc: 'Low-latency verification at the edge with regional failover and audit trails.' },
    { icon: CheckCircle2, title: 'Compliance ready', desc: 'SOC 2 Type II in progress, GDPR-first processing and privacy by design.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Built to be trusted</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <article key={i} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <it.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-3 font-medium">{it.title}</h3>
              <p className="text-sm text-white/70 mt-1">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
