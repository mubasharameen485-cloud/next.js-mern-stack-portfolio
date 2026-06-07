import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "LiveAuction Engine",
      role: "Distributed Real-Time Bidding",
      description: "Built a high-performance API Gateway in Axum communicating via gRPC/Protobuf. Implemented bi-directional WebSockets and WebRTC for peer-to-peer video.",
      tech: ["Rust", "Axum", "gRPC", "Tokio", "PostgreSQL", "Docker"],
      github: "https://github.com/mubasharameen485-cloud/Built-a-High-Performance-Distributed-Live-Auction-Engine-in-Rust"
    },
    {
      title: "DonDB",
      role: "Custom Key-Value Database",
      description: "Engineered a database from scratch using Append-Only Log (disk) & In-Memory Hash Map (RAM). Features Crash Recovery and Compaction algorithms.",
      tech: ["Rust", "Bitcask", "AES-256-GCM", "Axum"],
      github: "https://github.com/mubasharameen485-cloud/full-stack--Distributed-database--Final-Project"
    },
    {
      title: "DeFi Vault & Launchpad",
      role: "Solana Smart Contracts",
      description: "Engineered trustless smart contracts using PDAs. Implemented Cross-Program Invocations (CPIs) to interact with SPL Token Program.",
      tech: ["Anchor", "Solana", "PDAs", "Next.js"],
      github: "https://github.com/mubasharameen485-cloud/Template-4-final--The-Token-Vault-Lock-Unlock-"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center text-white">
          Core Engineering Projects
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 flex flex-col h-full group">
              <div className="text-sm font-bold text-orange-500 mb-2">{project.role}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-900 text-slate-300 text-xs rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={project.github} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-700 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors">
                <FaGithub size={18} /> View Source
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}