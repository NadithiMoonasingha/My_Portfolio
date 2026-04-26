import { portfolioData } from "@/data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-2">
        Beyond the code
      </p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Leadership & Activities</h2>
      <div className="flex flex-col gap-4">
        {portfolioData.leadership.map((item, index) => (
          <div key={index} className="flex items-start gap-4 bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 shadow-sm">
            <span className="text-purple-500 mt-0.5 text-lg">◆</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
