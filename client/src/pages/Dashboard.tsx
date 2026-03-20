import { useState } from "react";
import Card from "../components/Card";
import CreateContentModal from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { LogoIcon } from "../icons/LogoIcon";
// import { TwitterIcon } from "../icons/TwitterIcon";
// import { YoutubeIcon } from "../icons/YoutubeIcon";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Twitter", "YouTube", "Notes"];

  return (
    <div className="flex min-h-screen bg-[#0b0c10]">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(113,100,192,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(113,100,192,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Sidebar ── */}
      <aside
        className="relative z-10 w-64 shrink-0 h-screen sticky top-0 flex flex-col border-r border-white/[0.06]"
        style={{ background: "rgba(11,12,16,0.95)" }}
      >
        {/* Brand */}
        <div className="flex items-center gap-2.5 px-6 py-5 border-b border-white/[0.06]">
          <span className="text-[#7164c0]">
            <LogoIcon />
          </span>
          <span className="text-white font-semibold text-lg tracking-tight">
            Alter<span className="text-[#9492db]">Brain</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 flex flex-col gap-1">
          <p className="text-[10px] text-white/25 font-medium tracking-widest uppercase px-3 mb-2">
            Library
          </p>

          {[
            {
              label: "All Saves",
              dot: "bg-white/30",
              active: activeTab === "All",
              onClick: () => setActiveTab("All"),
            },
            {
              label: "Twitter",
              dot: "bg-sky-400/80",
              active: activeTab === "Twitter",
              onClick: () => setActiveTab("Twitter"),
            },
            {
              label: "YouTube",
              dot: "bg-red-400/80",
              active: activeTab === "YouTube",
              onClick: () => setActiveTab("YouTube"),
            },
            {
              label: "Notes",
              dot: "bg-[#9492db]/80",
              active: activeTab === "Notes",
              onClick: () => setActiveTab("Notes"),
            },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 text-left w-full ${
                item.active
                  ? "bg-[#7164c0]/20 text-white border border-[#7164c0]/25"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User pill */}
        <div className="p-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #7164c0, #9492db)",
              }}
            >
              A
            </div>
            <div className="min-w-0">
              <p className="text-white/80 text-xs font-medium truncate">
                My Brain
              </p>
              <p className="text-white/30 text-[10px] truncate">
                alterbrain.io
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-white/[0.06] bg-[#0b0c10]/80 backdrop-blur-sm sticky top-0 z-20">
          <div>
            <h1
              className="text-white font-black text-xl tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              {activeTab === "All" ? "All Saves" : activeTab}
            </h1>
            <p className="text-white/30 text-xs mt-0.5">
              Your collected knowledge
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {}}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <ShareIcon size="md" />
              Share Brain
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7164c0, #9492db)",
                boxShadow: "0 4px 16px rgba(113,100,192,0.35)",
              }}
            >
              <PlusIcon size="md" />
              Add Content
            </button>
          </div>
        </header>

        {/* Content area */}
        <div className="flex-1 p-8">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total Saves", val: "24", change: "+3 this week" },
              { label: "Tweets", val: "11", change: "+1 today" },
              { label: "Videos", val: "8", change: "+2 this week" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.06] p-4"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-white/35 text-xs mb-1">{s.label}</p>
                <p className="text-white text-2xl font-black tracking-tight">
                  {s.val}
                </p>
                <p className="text-[#9492db] text-[10px] mt-1">{s.change}</p>
              </div>
            ))}
          </div>

          {/* Cards grid - Masonary */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            <div className="break-inside-avoid">
              <Card
                type="twitter"
                link="https://x.com/nirudhuuu/status/2032854953296007609/photo/1"
                title="First Tweet"
              />
            </div>
            <div className="break-inside-avoid">
              <Card
                type="youtube"
                link="https://www.youtube.com/watch?v=Ades3pQbeh8&t=4s"
                title="First Vid"
              />
            </div>
            <div className="break-inside-avoid">
              <Card
                type="youtube"
                link="https://www.youtube.com/watch?v=P1yJcMV8o90"
                title="Clade Mastery"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default Dashboard;
