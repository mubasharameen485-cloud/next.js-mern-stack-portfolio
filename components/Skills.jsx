export default function Skills() {
  const skillCategories = [
    { title: "Backend & Systems", tags: ["Rust", "Tokio (Async I/O)", "Axum", "gRPC (Tonic)", "WebSockets", "WebRTC", "Arc/Mutex", "Rate Limiting"] },
    { title: "Security & Crypto", tags: ["AES-256-GCM", "Argon2", "Stateless JWT Auth", "RBAC"] },
    { title: "Distributed Systems", tags: ["Bitcask Architecture", "Append-Only Logs", "Compaction", "Crash Recovery", "CAP Theorem", "2PC", "Sharding"] },
    { title: "Web3 / Solana", tags: ["Rust (Anchor)", "PDAs", "CPIs", "SPL-Tokens", "ATAs", "On-Chain Events", "Solana Wallet Adapter"] },
    { title: "Databases & Web", tags: ["PostgreSQL", "SQLx", "Next.js", "MERN Stack", "REST API", "Tailwind CSS"] },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center text-slate-900">
          Technical Arsenal
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-3xl hover:shadow-xl transition-shadow duration-300 group">
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}