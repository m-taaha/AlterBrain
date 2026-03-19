interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

function Card({ title, link, type }: CardProps) {
  return (
    <div
      className="w-72 rounded-2xl border border-white/[0.07] overflow-hidden group hover:border-[#7164c0]/40 transition-all duration-200"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          {type === "twitter" && (
            <div className="w-6 h-6 rounded-md bg-sky-500/15 flex items-center justify-center">
              <span className="text-[10px] text-sky-300">𝕏</span>
            </div>
          )}
          {type === "youtube" && (
            <div className="w-6 h-6 rounded-md bg-red-500/15 flex items-center justify-center">
              <span className="text-[10px] text-red-300">▶</span>
            </div>
          )}
          <span className="text-white/70 text-sm font-medium">{title}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white/25 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
            title="Open link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-white/25 hover:text-red-400 hover:bg-red-500/[0.08] border border-transparent hover:border-red-500/20 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {type === "youtube" && (
          <div className="rounded-xl overflow-hidden border border-white/[0.05]">
            <iframe
              className="w-full aspect-video"
              src={link.replace("watch?v=", "embed/").split("&")[0]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {type === "twitter" && (
          <div className="rounded-xl overflow-hidden">
            <blockquote className="twitter-tweet" data-theme="dark">
              <a href={link.replace("x.com", "twitter.com")} />
            </blockquote>
          </div>
        )}
      </div>

      {/* Type badge */}
      <div className="px-4 pb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium border ${
            type === "twitter"
              ? "bg-sky-500/10 border-sky-500/20 text-sky-300"
              : "bg-red-500/10 border-red-500/20 text-red-300"
          }`}
        >
          <span className="w-1 h-1 rounded-full bg-current" />
          {type === "twitter" ? "Tweet" : "YouTube"}
        </span>
      </div>
    </div>
  );
}

export default Card;
