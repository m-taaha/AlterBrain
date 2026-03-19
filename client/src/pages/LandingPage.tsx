import { LogoIcon } from "../icons/LogoIcon";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] flex flex-col overflow-x-hidden">
      {/* Animated background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(113,100,192,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(113,100,192,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="fixed top-[-120px] left-[-120px] w-[480px] h-[480px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(113,100,192,0.22) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <div
        className="fixed bottom-[-80px] right-[-80px] w-[360px] h-[360px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(148,146,219,0.15) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-5 border-b border-white/[0.06] bg-[#0b0c10]/80 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xl font-semibold text-white tracking-tight">
          <span className="text-[#7164c0]">
            <LogoIcon />
          </span>
          <span>
            Alter<span className="text-[#9492db]">Brain</span>
          </span>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-[#7164c0] hover:bg-[#8275d0] transition-all duration-200 shadow-lg shadow-[#7164c0]/25">
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7164c0]/40 bg-[#7164c0]/10 text-[#9492db] text-xs font-medium mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9492db] animate-pulse" />
          Your Digital Second Brain
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-black text-white max-w-3xl leading-[1.05] mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Capture Every{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #9492db 0%, #7164c0 50%, #c4b5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Brilliant
          </span>{" "}
          Idea.
        </h1>

        <p className="text-white/45 max-w-lg text-lg leading-relaxed mb-10">
          Save tweets, videos, notes, and links in one intelligent space. Your
          knowledge — organized, connected, always at hand.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-20">
          <button className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#7164c0] hover:bg-[#8275d0] transition-all duration-200 shadow-xl shadow-[#7164c0]/30 hover:shadow-[#7164c0]/50 hover:-translate-y-0.5 active:translate-y-0">
            Start for Free →
          </button>

          <button
            onClick={() => {
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-200"
          >
            See how it works
          </button>
        </div>

        {/* Dashboard Preview Window */}
        <div className="w-full max-w-4xl relative">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(113,100,192,0.25) 0%, transparent 65%)",
              filter: "blur(16px)",
              transform: "translateY(12px)",
            }}
          />

          {/* Window chrome */}
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white/[0.05] border border-white/[0.06] text-white/30 text-xs font-mono">
                  app.alterbrain.io/dashboard
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex" style={{ minHeight: "340px" }}>
              {/* Sidebar */}
              <div className="w-48 shrink-0 border-r border-white/[0.05] p-4 flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-4 px-2 pt-1">
                  <div className="w-5 h-5 rounded bg-[#7164c0]/60" />
                  <span className="text-white/60 text-xs font-semibold">
                    AlterBrain
                  </span>
                </div>
                {[
                  { label: "All Saves", dot: "bg-white/20", active: true },
                  { label: "Twitter", dot: "bg-sky-400/70", active: false },
                  { label: "YouTube", dot: "bg-red-400/70", active: false },
                  { label: "Notes", dot: "bg-[#9492db]/70", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs transition-all ${
                      item.active
                        ? "bg-[#7164c0]/20 text-white"
                        : "text-white/35 hover:text-white/60"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Content grid */}
              <div className="flex-1 p-5 grid grid-cols-3 gap-3 content-start">
                {/* Card 1 — Twitter */}
                <div className="col-span-1 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 flex flex-col gap-3 hover:border-[#7164c0]/40 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-sky-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-sky-300">𝕏</span>
                      </div>
                      <span className="text-white/40 text-[10px]">Tweet</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-sky-400/50 group-hover:bg-sky-400 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-white/10 w-full" />
                    <div className="h-2 rounded bg-white/10 w-4/5" />
                    <div className="h-2 rounded bg-white/10 w-3/5" />
                  </div>
                  <div className="text-[9px] text-white/25 mt-auto">
                    @designwisdom
                  </div>
                </div>

                {/* Card 2 — YouTube */}
                <div className="col-span-1 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 flex flex-col gap-3 hover:border-[#7164c0]/40 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-red-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-red-300">▶</span>
                      </div>
                      <span className="text-white/40 text-[10px]">Video</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-red-400/50 group-hover:bg-red-400 transition-all" />
                  </div>
                  <div className="rounded-lg bg-white/[0.04] aspect-video flex items-center justify-center border border-white/[0.05]">
                    <span className="text-white/15 text-lg">▶</span>
                  </div>
                  <div className="text-[9px] text-white/25">
                    Building in public — Ep.4
                  </div>
                </div>

                {/* Card 3 — Idea Note */}
                <div className="col-span-1 rounded-xl border border-[#7164c0]/25 bg-[#7164c0]/[0.06] p-4 flex flex-col gap-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-[#9492db]/20 flex items-center justify-center">
                        <span className="text-[9px] text-[#9492db]">✦</span>
                      </div>
                      <span className="text-white/40 text-[10px]">Idea</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#9492db]/60" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-[#9492db]/20 w-full" />
                    <div className="h-2 rounded bg-[#9492db]/15 w-3/4" />
                    <div className="h-2 rounded bg-[#9492db]/10 w-1/2" />
                  </div>
                  <div className="text-[9px] text-[#9492db]/50 mt-auto">
                    Today, 2:41 PM
                  </div>
                </div>

                {/* Card 4 — Link (wide) */}
                <div className="col-span-2 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 flex items-center gap-4 hover:border-white/[0.12] transition-all">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                    <span className="text-white/20 text-sm">🔗</span>
                  </div>
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="h-2 rounded bg-white/15 w-3/4" />
                    <div className="h-2 rounded bg-white/[0.08] w-1/2" />
                  </div>
                  <div className="text-[9px] text-white/20 shrink-0">
                    article
                  </div>
                </div>

                {/* Card 5 — Add new */}
                <div className="col-span-1 rounded-xl border border-dashed border-white/[0.08] p-4 flex flex-col items-center justify-center gap-2 hover:border-[#7164c0]/40 hover:bg-[#7164c0]/[0.04] transition-all cursor-pointer group">
                  <div className="w-7 h-7 rounded-full border border-white/[0.1] group-hover:border-[#7164c0]/50 flex items-center justify-center transition-all">
                    <span className="text-white/20 group-hover:text-[#9492db] text-sm transition-all">
                      +
                    </span>
                  </div>
                  <span className="text-[9px] text-white/20 group-hover:text-white/40 transition-all">
                    Add new
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="relative z-10 border-y border-white/[0.05] py-8 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-12 text-center">
          {[
            { val: "10k+", label: "Active users" },
            { val: "3M+", label: "Items saved" },
            { val: "99.9%", label: "Uptime" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-white tracking-tight">
                {s.val}
              </div>
              <div className="text-xs text-white/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="how-it-works" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7164c0]/40 bg-[#7164c0]/10 text-[#9492db] text-xs font-medium mb-6 tracking-wide uppercase">
              How it works
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Your brain, organised.
            </h2>
            <p className="text-white/35 mt-4 max-w-md mx-auto text-base leading-relaxed">
              Three simple steps to never lose a good idea again.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: "🔗",
                title: "Save anything",
                desc: "Paste a tweet, YouTube link, article URL, or write a quick note. AlterBrain figures out the type automatically.",
              },
              {
                step: "02",
                icon: "✦",
                title: "Auto-organised",
                desc: "Content is sorted by type and tagged automatically. No folders, no friction — just save and forget.",
              },
              {
                step: "03",
                icon: "🧠",
                title: "Access anywhere",
                desc: "Your brain lives in the cloud. Pull it up on any device, share it with a link, or search it instantly.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/[0.07] p-6 group hover:border-[#7164c0]/40 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                {/* Step number */}
                <div
                  className="text-5xl font-black mb-4 select-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(113,100,192,0.3), rgba(113,100,192,0.05))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.step}
                </div>

                <div className="text-2xl mb-3">{item.icon}</div>

                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(113,100,192,0.08) 0%, transparent 70%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-white/[0.05] py-6 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
          <div className="flex items-center gap-2">
            <span className="text-[#7164c0]">
              <LogoIcon />
            </span>
            <span className="text-white/50 font-medium">AlterBrain</span>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            {["About", "Privacy", "Contact"].map((link) => (
              <span
                key={link}
                className="hover:text-[#9492db] cursor-pointer transition-colors duration-150"
              >
                {link}
              </span>
            ))}
          </div>

          <div className="mt-4 md:mt-0">© 2026 AlterBrain</div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
