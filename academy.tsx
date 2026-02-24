// app/routes/academy.tsx  (Matching Academy Enrollment Page)
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Academy() {
  useEffect(() => {
    gsap.from(".enroll-card", { y: 100, opacity: 0, duration: 1.4, ease: "power4.out" });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="..."> {/* same nav as above */} </nav>

      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <div className="text-blue-400 tracking-[4px] text-sm mb-6">SWELL AGENTIC SEO ACADEMY</div>
        <h1 className="text-7xl font-black tracking-tighter">Master Directed Intelligence</h1>
        <p className="mt-8 text-2xl text-zinc-400">8-week cohort. Live weekly labs. Build your own GSO system.</p>

        <div className="enroll-card mt-16 bg-zinc-900 border border-zinc-700 rounded-3xl p-16 max-w-lg mx-auto">
          <div className="text-6xl font-black mb-4">$4,800</div>
          <div className="text-zinc-400 mb-12">or 4 payments of $1,300</div>
          
          <ul className="space-y-6 text-left mb-12">
            <li className="flex gap-4"><span className="text-green-400">✓</span> Full GSO Roadmap Blueprint</li>
            <li className="flex gap-4"><span className="text-green-400">✓</span> Live schema & entity workshops</li>
            <li className="flex gap-4"><span className="text-green-400">✓</span> Private Notion + Discord</li>
            <li className="flex gap-4"><span className="text-green-400">✓</span> Lifetime tool access</li>
          </ul>

          <a href="https://calendly.com/swellmarketing" className="block w-full py-6 bg-white text-black rounded-2xl font-bold text-xl">Enroll Agent Now →</a>
          <p className="text-xs text-zinc-500 mt-6">Next cohort starts March 3, 2026 • 12 spots only</p>
        </div>
      </section>
    </div>
  );
}
