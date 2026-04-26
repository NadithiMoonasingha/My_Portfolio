import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-2">
        What I have built
      </p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col gap-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg">{project.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-xs mt-0.5 font-medium">{project.subtitle}</p>
              </div>
              <span className="text-gray-500 text-xs whitespace-nowrap ml-2">{project.date}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-900 dark:bg-purple-500/20 border border-purple-800 dark:border-purple-500/30 text-white dark:text-purple-500 text-xs font-semibold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
