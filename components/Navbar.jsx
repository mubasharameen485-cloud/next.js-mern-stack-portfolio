import Link from 'next/link';
import { FaRust } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Custom Rust Themed Logo */}
          <Link href="#hero" className="flex items-center gap-2 group cursor-pointer">
            <FaRust className="text-orange-600 text-3xl group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tight text-slate-900">MUBASHAR</span>
              <span className="text-[10px] font-bold text-orange-600 tracking-widest uppercase">Systems Eng.</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#about" className="text-slate-600 hover:text-orange-600 text-sm font-semibold transition-colors">About</Link>
              <Link href="#skills" className="text-slate-600 hover:text-orange-600 text-sm font-semibold transition-colors">Skills</Link>
              <Link href="#projects" className="text-slate-600 hover:text-orange-600 text-sm font-semibold transition-colors">Projects</Link>
              <Link href="#contact" className="bg-slate-900 text-white hover:bg-orange-600 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/30">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}