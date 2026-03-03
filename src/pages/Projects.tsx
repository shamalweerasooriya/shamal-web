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
      <h1 className="text-2xl font-semibold text-(--text)">Projects</h1>

      <p className="text-(--text-muted)">
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
                <h2 className="font-semibold text-(--text) group-hover:text-(--link) transition-colors">
                  {project.title}
                </h2>
                <p className="text-(--text-muted) text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-(--link) font-medium">
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

      <section className="space-y-4 pt-4 border-t border-(--border)">
        <h2 className="text-lg font-semibold text-(--text)">Past research</h2>
        <Link to="/projects/autonomous-driving-tcp" className="block group">
          <Card className="hover:shadow-lg dark:hover:shadow-black/40 transition-shadow">
            <div className="space-y-3">
              <h3 className="font-semibold text-(--text) group-hover:text-(--link) transition-colors">
                Enhancing end-to-end autonomous driving with trajectory-guided
                control prediction
              </h3>
              <p className="text-(--text-muted) text-sm leading-relaxed">
                Undergraduate work on the TCP framework: depth features
                (MonoDepth2) for trajectory prediction and MPC for control.
                Implemented and evaluated in CARLA. Supervised by Prof. Roshan
                Ragel and Eng. Geesara Kulathunga.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                  Autonomous driving
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                  TCP
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                  CARLA
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-(--link) font-medium">
                Read more
                <span className="group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </span>
            </div>
          </Card>
        </Link>
      </section>
    </div>
  );
}
