import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6 text-slate-900">Ready to build together?</h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
          Whether you need a high-performance Rust backend, a custom distributed system, or a secure Web3 protocol — I am ready for the challenge.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Email</h3>
            <a href="mailto:mubasharameen8595@gmail.com" className="text-slate-500 hover:text-orange-600 text-sm">mubasharameen8595@gmail.com</a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhoneAlt size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
            <a href="tel:+923297766036" className="text-slate-500 hover:text-blue-600 text-sm">+92-329-7766036</a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-500 text-sm">Kasur, Pakistan</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="https://github.com/mubasharameen485-cloud" target="_blank" className="flex items-center gap-2 text-slate-700 bg-white border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
            <FaGithub size={20} /> Cloud GitHub Profile
          </Link>
          <Link href="https://github.com/Muhammad-Mubashar516" target="_blank" className="flex items-center gap-2 text-slate-700 bg-white border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
            <FaGithub size={20} /> Alt GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}