import { Link } from "react-router";
import { Card } from "../components/ui/Card";

const projects = [
  {
    slug: "genome-assembly-parameters",
    title: "Genome Assembly Parameter Optimization",
    description:
      "Systematic exploration of Hifiasm parameters for long-read sequencing: screening influential parameters, running structured experiments, and modeling effects to identify robust assembly configurations. Evaluated with QUAST and BUSCO.",
    tags: [
      "Computational biology",
      "Long-read assembly",
      "Hifiasm",
      "QUAST",
      "BUSCO",
    ],
  },
];

export function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">
        Projects
      </h1>

      <p className="text-stone-600 dark:text-stone-400">
        Research and projects I'm working on.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="block group"
          >
            <Card className="hover:shadow-lg dark:hover:shadow-black/40 transition-shadow">
              <div className="space-y-3">
                <h2 className="font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#e8614d] transition-colors">
                  {project.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-[#e8614d] font-medium">
                  Read more
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
