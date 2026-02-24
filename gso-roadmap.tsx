// app/routes/gso-roadmap.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsoRoadmap() {
  useEffect(() => {
    gsap.from(".section-title", {
      y: 80,
      opacity: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: "power4.out",
    });
    gsap.from(".agent-card", {
      scale: 0.92,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: { trigger: ".agent-grid", start: "top 85%" },
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-2xl font-black tracking-tighter">S</div>
            <span className="text-3xl font-black tracking-tighter">swell</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[2px]">
            <a href="#architect" className="hover:text-blue-400 transition-colors">Architect</a>
            <a href="#pulse" className="hover:text-blue-400 transition-colors">Pulse</a>
            <a href="#surface" className="hover:text-blue-400 transition-colors">Surface</a>
            <a href="#core" className="hover:text-blue-400 transition-colors">Core</a>
            <a href="#academy" className="hover:text-blue-400 transition-colors">Academy</a>
          </div>
          <a href="https://calendly.com/swellmarketing" className="px-8 py-3.5 bg-white text-black rounded-2xl font-semibold text-sm hover:bg-blue-400 hover:text-white transition-all">Utilize Agent →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-32 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline px-5 py-2 border border-zinc-700 rounded-full text-xs tracking-[4px] mb-8">DIRECTED INTELLIGENCE 2026</div>
          <h1 className="text-7xl md:text-[92px] font-black tracking-[-3px] leading-none mb-8">
            Become the <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Primary Source</span><br />Inside Every LLM
          </h1>
          <p className="max-w-2xl mx-auto text-2xl text-zinc-400">Swell’s complete Generative Search Optimization system for the spatial & AI-first web.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="#architect" className="px-12 py-5 bg-white text-black rounded-2xl font-semibold text-xl inline-flex items-center justify-center hover:scale-105 transition">Start The Architect →</a>
            <a href="https://calendly.com/swellmarketing" className="px-12 py-5 border border-white/30 rounded-2xl font-semibold text-xl inline-flex items-center justify-center hover:bg-white/10 transition">Book 30-min Strategy Call</a>
          </div>
        </div>
      </section>

      {/* 01 THE ARCHITECT */}
      <section id="architect" className="py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-16">
            <div className="md:col-span-5">
              <div className="text-blue-400 text-sm tracking-[4px] mb-3">// 01</div>
              <h2 className="section-title text-7xl font-black tracking-tighter leading-none">THE ARCHITECT</h2>
              <p className="mt-8 text-2xl text-zinc-400">Entity-first blueprints that turn brands into citation magnets for every major LLM.</p>
            </div>
            <div className="md:col-span-7 agent-grid space-y-8 mt-12 md:mt-0">
              <div className="agent-card bg-zinc-900/70 border border-zinc-700 rounded-3xl p-10 hover:border-blue-500 transition-all">
                <div className="text-5xl mb-6">🧬</div>
                <h3 className="text-3xl font-semibold mb-4">Entity Architecture & Knowledge Graph Mapping</h3>
                <p className="text-zinc-400">We map your entire brand universe into the exact entity relationships LLMs use to ground answers.</p>
              </div>
              <div className="agent-card bg-zinc-900/70 border border-zinc-700 rounded-3xl p-10 hover:border-blue-500 transition-all">
                <div className="text-5xl mb-6">📐</div>
                <h3 className="text-3xl font-semibold mb-4">JSON-LD Schema Orchestration + Swell Extensions</h3>
                <p className="text-zinc-400">Dataset, ResearchStudy, HowTo, Organization + our proprietary GSO layer that increases citation velocity by 47% on average.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 THE PULSE */}
      <section id="pulse" className="py-24 border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-16">
            <div className="md:col-span-5">
              <div className="text-blue-400 text-sm tracking-[4px] mb-3">// 02</div>
              <h2 className="section-title text-7xl font-black tracking-tighter leading-none">THE PULSE</h2>
              <p className="mt-8 text-2xl text-zinc-400">Real-time sentiment & authority seeding where LLMs actually listen.</p>
            </div>
            <div className="md:col-span-7 agent-grid space-y-8 mt-12 md:mt-0">
              <div className="agent-card bg-zinc-950 border border-zinc-700 rounded-3xl p-10 hover:border-violet-500 transition-all">
                <div className="text-5xl mb-6">📡</div>
                <h3 className="text-3xl font-semibold mb-4">High-Signal Forum & Community Orchestration</h3>
                <p className="text-zinc-400">Reddit, Quora, industry boards — we plant authoritative signals LLMs reward with citations.</p>
              </div>
              <div className="agent-card bg-zinc-950 border border-zinc-700 rounded-3xl p-10 hover:border-violet-500 transition-all">
                <div className="text-5xl mb-6">🔥</div>
                <h3 className="text-3xl font-semibold mb-4">KOL Co-Authorship & E-E-A-T Acceleration</h3>
                <p className="text-zinc-400">First-hand expert content that builds unbreakable trust signals inside LLM training data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 THE SURFACE */}
      <section id="surface" className="py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-16">
            <div className="md:col-span-5">
              <div className="text-blue-400 text-sm tracking-[4px] mb-3">// 03</div>
              <h2 className="section-title text-7xl font-black tracking-tighter leading-none">THE SURFACE</h2>
              <p className="mt-8 text-2xl text-zinc-400">Spatial, frictionless frontends that LLMs love to cite and users never leave.</p>
            </div>
            <div className="md:col-span-7 agent-grid space-y-8 mt-12 md:mt-0">
              <div className="agent-card bg-zinc-900/70 border border-zinc-700 rounded-3xl p-10 hover:border-fuchsia-500 transition-all">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-3xl font-semibold mb-4">Webflow + Remix Builds (100/100 CWV)</h3>
                <p className="text-zinc-400">Lightning-fast, schema-embedded, spatial experiences engineered for AI parseability.</p>
              </div>
              <div className="agent-card bg-zinc-900/70 border border-zinc-700 rounded-3xl p-10 hover:border-fuchsia-500 transition-all">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-3xl font-semibold mb-4">Interactive Data Stories & Visual Agents</h3>
                <p className="text-zinc-400">Plotly-powered cohort explorers, AR-ready visuals, and agentic UI components.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 THE CORE */}
      <section id="core" className="py-24 border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-16">
            <div className="md:col-span-5">
              <div className="text-blue-400 text-sm tracking-[4px] mb-3">// 04</div>
              <h2 className="section-title text-7xl font-black tracking-tighter leading-none">THE CORE</h2>
              <p className="mt-8 text-2xl text-zinc-400">Unbreakable technical foundation that powers every Swell GSO campaign.</p>
            </div>
            <div className="md:col-span-7 agent-grid space-y-8 mt-12 md:mt-0">
              <div className="agent-card bg-zinc-950 border border-zinc-700 rounded-3xl p-10 hover:border-emerald-500 transition-all">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-3xl font-semibold mb-4">Backend Hardening & Crawl Budget Supremacy</h3>
                <p className="text-zinc-400">Magento, Shopify, WordPress — automated sitemaps, dynamic JSON-LD, SSR pipelines.</p>
              </div>
              <div className="agent-card bg-zinc-950 border border-zinc-700 rounded-3xl p-10 hover:border-emerald-500 transition-all">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-3xl font-semibold mb-4">IPFS + Decentralized Metadata Layer</h3>
                <p className="text-zinc-400">Future-proof resilience and global accessibility for your most valuable assets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-400 tracking-[4px] text-sm">INVESTMENT TIERS</div>
            <h2 className="text-6xl font-black tracking-tighter">Choose Your Level of Directed Intelligence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundation */}
            <div className="agent-card bg-zinc-900 border border-zinc-700 rounded-3xl p-10 hover:border-blue-500 transition">
              <div className="text-2xl font-semibold">Foundation</div>
              <div className="text-6xl font-black mt-4 mb-8">$9,500<span className="text-base font-normal text-zinc-500">/mo</span></div>
              <ul className="space-y-5 text-zinc-400 mb-12">
                <li>✓ Full Entity Architecture</li>
                <li>✓ Schema on 200 pages</li>
                <li>✓ Monthly Citation Report</li>
                <li>✓ Webflow/Remix build</li>
              </ul>
              <a href="https://calendly.com/swellmarketing" className="block text-center py-5 border border-white/30 rounded-2xl hover:bg-white hover:text-black transition">Start Foundation →</a>
            </div>

            {/* Agentic – Popular */}
            <div className="agent-card bg-gradient-to-br from-zinc-900 to-black border-2 border-blue-500 rounded-3xl p-10 relative scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-black px-8 py-1 rounded-full text-xs font-bold tracking-widest">MOST POPULAR</div>
              <div className="text-2xl font-semibold">Agentic</div>
              <div className="text-6xl font-black mt-4 mb-8">$18,000<span className="text-base font-normal text-zinc-500">/mo</span></div>
              <ul className="space-y-5 text-zinc-400 mb-12">
                <li>✓ Everything in Foundation</li>
                <li>✓ 500+ pages + Multimodal</li>
                <li>✓ Custom LLM Tools (GSoC level)</li>
                <li>✓ Weekly Pulse + Authority Seeding</li>
                <li>✓ IPFS Decentralized Layer</li>
              </ul>
              <a href="https://calendly.com/swellmarketing" className="block text-center py-5 bg-blue-500 text-black rounded-2xl font-semibold">Launch Agentic Now →</a>
            </div>

            {/* Enterprise */}
            <div className="agent-card bg-zinc-900 border border-zinc-700 rounded-3xl p-10 hover:border-violet-500 transition">
              <div className="text-2xl font-semibold">Enterprise</div>
              <div className="text-6xl font-black mt-4 mb-8">Custom</div>
              <ul className="space-y-5 text-zinc-400 mb-12">
                <li>✓ Unlimited scale & markets</li>
                <li>✓ Dedicated GSO Strategist</li>
                <li>✓ White-label Academy</li>
                <li>✓ Custom AI Agents</li>
                <li>✓ Quarterly Offsites</li>
              </ul>
              <a href="https://calendly.com/swellmarketing" className="block text-center py-5 border border-white/30 rounded-2xl hover:bg-white hover:text-black transition">Talk Enterprise →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-6xl font-black tracking-tighter mb-16">Recent Directed Intelligence Wins</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-3xl p-12">
              <div className="text-emerald-400 text-xl font-semibold">+340% LLM Citations</div>
              <h3 className="text-3xl font-semibold mt-6 leading-tight">Spatial Health Platform now #1 in Claude & Gemini for pediatric datasets</h3>
              <p className="mt-8 text-zinc-400">"Swell turned our data commons into the canonical source for AI research agents overnight."</p>
              <div className="mt-12 text-xs uppercase tracking-widest">— Head of Data, PEDSCommons</div>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-12">
              <div className="text-emerald-400 text-xl font-semibold">+180% Organic from AI Sources</div>
              <h3 className="text-3xl font-semibold mt-6 leading-tight">Fintech SaaS now Top 3 in Perplexity for “AI compliance tools”</h3>
              <p className="mt-8 text-zinc-400">"We went from zero to dominant entity in under 90 days. Unreal."</p>
              <div className="mt-12 text-xs uppercase tracking-widest">— CMO, ComplianceFlow</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY TEASER */}
      <section id="academy" className="py-24 bg-black border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-violet-400 text-sm tracking-[4px]">SWELL AGENTIC SEO ACADEMY</div>
          <h2 className="text-6xl font-black tracking-tighter mt-6">Master Directed Intelligence in 8 Weeks</h2>
          <p className="text-2xl text-zinc-400 mt-8">Live cohorts • Private Discord • Build your own GSO system</p>
          <a href="/academy" className="mt-12 inline-block px-16 py-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl font-semibold text-xl">Enroll Agent →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-20 border-t border-zinc-800 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl font-black">S</div>
          <span className="text-4xl font-black tracking-tighter">swell</span>
        </div>
        <p className="text-zinc-500">© 2026 Swell Marketing .xyz — Directed Intelligence for the AI-First Web</p>
      </footer>
    </div>
  );
}
