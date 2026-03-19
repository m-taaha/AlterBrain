import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0c10] flex justify-center items-center relative overflow-hidden">
      {/* Grid background */}
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

      {/* Glow */}
      <div
        className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(113,100,192,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-[400px] rounded-2xl border border-white/[0.08] p-8"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(12px)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ background: "linear-gradient(135deg, #7164c0, #9492db)" }}
          >
            <span className="text-white text-xl">✦</span>
          </div>
          <h1
            className="text-2xl font-black text-white tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Create account
          </h1>
          <p className="text-white/35 text-sm mt-1">Join AlterBrain today 🚀</p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-3 mb-6">
          <div>
            <label className="text-xs text-white/40 font-medium mb-1.5 block tracking-wide uppercase">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm outline-none focus:border-[#7164c0]/60 focus:bg-white/[0.07] transition-all duration-200"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 font-medium mb-1.5 block tracking-wide uppercase">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm outline-none focus:border-[#7164c0]/60 focus:bg-white/[0.07] transition-all duration-200"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 font-medium mb-1.5 block tracking-wide uppercase">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm outline-none focus:border-[#7164c0]/60 focus:bg-white/[0.07] transition-all duration-200"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          style={{
            background: "linear-gradient(135deg, #7164c0, #9492db)",
            boxShadow: "0 8px 32px rgba(113,100,192,0.35)",
          }}
        >
          Create account →
        </button>

        <p className="text-center text-sm text-white/30 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#9492db] hover:text-white cursor-pointer transition-colors"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
