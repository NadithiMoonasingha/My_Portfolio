import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">
        Get in touch
      </p>
      <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
      <p className="text-gray-400 max-w-md mb-12 text-sm leading-relaxed">
        I am currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
          href={`mailto:${portfolioData.email}`}
          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/8 transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">
            ✉
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
            <p className="text-white text-sm group-hover:text-purple-300 transition-colors">{portfolioData.email}</p>
          </div>
        </a>

        
          href={`tel:${portfolioData.phone}`}
          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/8 transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">
            ✆
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone</p>
            <p className="text-white text-sm group-hover:text-purple-300 transition-colors">{portfolioData.phone}</p>
          </div>
        </a>

        
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/8 transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">
            in
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">LinkedIn</p>
            <p className="text-white text-sm group-hover:text-purple-300 transition-colors">linkedin.com/in/nadithim</p>
          </div>
        </a>

        
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/8 transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">
            ⌥
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">GitHub</p>
            <p className="text-white text-sm group-hover:text-purple-300 transition-colors">github.com/NadithiMoonasingha</p>
          </div>
        </a>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Nadithi Moonasingha. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
