export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-6 border-b-4 border-orange-500 inline-block pb-2">
            Who Am I?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6 text-lg">
            I am a Backend Systems & Rust Engineer obsessed with building things from scratch. I specialize in <span className="text-orange-400 font-bold">Rust, Tokio, Axum, gRPC, and the Anchor Framework</span>.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg">
            My core strength lies in understanding memory safety, async concurrency, distributed systems design, and cryptographic security. I write code that doesn't just work, but scales flawlessly.
          </p>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-orange-500 rounded"></span> Education
          </h3>
          <div className="mb-8 pl-4 border-l-2 border-slate-600">
            <h4 className="text-lg font-bold text-slate-100">BS Information Technology</h4>
            <p className="text-slate-400 mt-1">University of Education, Lahore, PK</p>
            <p className="text-orange-400 text-sm font-semibold mt-2">Expected Graduation: 2028</p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-orange-500 rounded"></span> Languages
          </h3>
          <div className="flex gap-4">
            <div className="bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700">
              <span className="block font-bold text-white">Urdu</span>
              <span className="text-xs text-slate-400">Native / Bilingual</span>
            </div>
            <div className="bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700">
              <span className="block font-bold text-white">English</span>
              <span className="text-xs text-slate-400">Basic / Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}