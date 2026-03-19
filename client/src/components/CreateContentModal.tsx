import { CrossIcon } from "../icons/CrossIcon";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
        >
          <div
            className="relative w-[420px] rounded-2xl border border-white/[0.08] p-6"
            style={{
              background:
                "linear-gradient(160deg, rgba(30,28,45,0.98) 0%, rgba(18,16,28,0.98) 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2
                  className="text-white font-black text-lg tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Add Content
                </h2>
                <p className="text-white/30 text-xs mt-0.5">
                  Save something to your brain
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] transition-all"
              >
                <CrossIcon size="md" />
              </button>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="text-xs text-white/40 font-medium mb-1.5 block tracking-wide uppercase">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Give it a name..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm outline-none focus:border-[#7164c0]/60 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 font-medium mb-1.5 block tracking-wide uppercase">
                  Link
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm outline-none focus:border-[#7164c0]/60 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>

              {/* Type selector */}
              <div>
                <label className="text-xs text-white/40 font-medium mb-1.5 block tracking-wide uppercase">
                  Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Tweet", icon: "𝕏", color: "sky" },
                    { label: "Video", icon: "▶", color: "red" },
                    { label: "Note", icon: "✦", color: "purple" },
                  ].map((t) => (
                    <button
                      key={t.label}
                      className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/40 hover:text-white hover:border-[#7164c0]/40 hover:bg-[#7164c0]/[0.06] transition-all text-xs font-medium"
                    >
                      <span className="text-base">{t.icon}</span>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #7164c0, #9492db)",
                boxShadow: "0 8px 24px rgba(113,100,192,0.3)",
              }}
            >
              Save to Brain →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateContentModal;
