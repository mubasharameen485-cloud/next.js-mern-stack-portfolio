import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 scroll-smooth selection:bg-orange-500 selection:text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="bg-slate-950 text-center py-8">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Mubashar Ameen. Designed & Built with Precision.
        </p>
      </footer>
    </main>
  );
}