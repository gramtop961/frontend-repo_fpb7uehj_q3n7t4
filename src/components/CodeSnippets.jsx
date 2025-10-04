import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Copy } from 'lucide-react';

function CopyButton({ text }) {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  return (
    <button onClick={copy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
      <Copy className="h-3.5 w-3.5" />
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

export default function CodeSnippets() {
  const copyText = `import { HoloAuth } from 'holoauth';\n\n<HoloAuth.Login onSuccess={(token) => authenticate(token)} />`;

  return (
    <section id="docs" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Implement in one line</h2>
            <p className="text-white/70 mt-1">Drop-in biometrics using our lightweight SDK. Works with React, Next.js, and native WebAuthn.</p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4">
          <Tabs.Root defaultValue="react" className="w-full">
            <div className="flex items-center justify-between">
              <Tabs.List className="flex gap-2">
                <Tabs.Trigger value="react" className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-white/10">React</Tabs.Trigger>
                <Tabs.Trigger value="next" className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-white/10">Next.js</Tabs.Trigger>
                <Tabs.Trigger value="vanilla" className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-white/10">Vanilla</Tabs.Trigger>
              </Tabs.List>
              <CopyButton text={copyText} />
            </div>

            <div className="mt-4">
              <Tabs.Content value="react">
                <CodeBlock>
{`import { HoloAuth } from 'holoauth'

export default function Login() {
  return (
    <HoloAuth.Login onSuccess={(token) => authenticate(token)} />
  )
}
`}
                </CodeBlock>
              </Tabs.Content>

              <Tabs.Content value="next">
                <CodeBlock>
{`// app/page.tsx
import { HoloAuth } from 'holoauth'

export default function Page() {
  return (
    <HoloAuth.Login onSuccess={async (token) => {
      'use server'
      await verifyOnServer(token)
    }} />
  )
}
`}
                </CodeBlock>
              </Tabs.Content>

              <Tabs.Content value="vanilla">
                <CodeBlock>
{`<script type="module">
  import { login } from 'holoauth/web'
  login({ onSuccess: (token) => fetch('/api/session', { method: 'POST', body: token }) })
</script>
`}
                </CodeBlock>
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="relative overflow-auto rounded-lg border border-white/10 bg-[#0b1020] p-4 text-sm leading-relaxed text-cyan-100">
      <code>{children}</code>
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/5" />
    </pre>
  );
}
