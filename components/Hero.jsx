import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 bg-slate-50 min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="inline-block mb-4 px-4 py-1.5 bg-orange-100 border border-orange-200 rounded-full text-orange-700 text-xs font-bold tracking-wider uppercase">
        Open to Remote Opportunities
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Robust</span> Systems
      </h1>
      
      <h2 className="text-lg md:text-2xl text-slate-600 mb-8 font-medium max-w-3xl">
        Backend Systems Engineer | Rust & Web3 Specialist | MERN Stack
      </h2>
      
      <p className="max-w-2xl text-slate-500 mb-10 leading-relaxed text-lg">
        I engineer high-performance, distributed real-time engines, custom databases, and secure on-chain DeFi protocols on Solana. 
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <Link href="#projects" className="flex items-center gap-2 bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-orange-500/40">
          View Projects <FaArrowRight />
        </Link>
        <Link href="#contact" className="flex items-center gap-2 bg-white text-slate-900 border border-slate-300 hover:border-orange-600 px-8 py-4 rounded-full font-bold transition-all hover:bg-orange-50">
          Contact Me
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link href="https://github.com/mubasharameen485-cloud" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110 duration-200">
          <FaGithub size={28} />
        </Link>
        <Link href="https://linkedin.com/in/mubashar-ameen-637359397" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200">
          <FaLinkedin size={28} />
        </Link>
        <Link href="https://x.com/Mubasharam82677" target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
          <FaTwitter size={28} />
        </Link>
      </div>
    </section>
  );
}