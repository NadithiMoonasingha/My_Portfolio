import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-2">
        What I work with
      </p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(portfolioData.skills).map(([category, items]) => (
          <div key={category} className="bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 rounded-2xl p-6 hover:border-purple-500 dark:hover:border-purple-500/50 transition-all duration-300 shadow-md">
            <h3 className="text-purple-700 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-purple-700 dark:bg-white/5 border border-purple-800 dark:border-white/10 text-white dark:text-gray-300 text-sm font-semibold rounded-full hover:bg-purple-800 dark:hover:border-purple-500/50 dark:hover:text-white transition-all duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
