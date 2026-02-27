import { Link } from "react-router";
import { Card } from "../components/ui/Card";

export function GenomeAssemblyProject() {
  return (
    <article className="space-y-8">
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-stone-600 dark:text-stone-400 hover:text-[#e8614d] transition-colors mb-4"
        >
          ← Back to projects
        </Link>
        <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">
          Genome Assembly Parameter Optimization
        </h1>
        <p className="mt-1 text-stone-600 dark:text-stone-400 text-sm">
          Long-read sequencing · Hifiasm · Computational biology
        </p>
        <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#e8614d]/10 dark:bg-[#e8614d]/20 px-3 py-1 text-sm font-medium text-[#e8614d]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8614d] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8614d]" />
          </span>
          Currently in Phase 1 — Screening
        </p>
      </div>

      <Card>
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-700" />

            <ul className="space-y-0">
              {/* Phase 1 */}
              <li className="relative flex gap-4 pb-8">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#e8614d] bg-[#e8614d] text-xs font-semibold text-white shadow-md">
                  1
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      Phase 1 — Screening
                    </span>
                    <span className="rounded-full bg-[#e8614d]/15 px-2 py-0.5 text-xs font-medium text-[#e8614d]">
                      Current
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Identify the most influential parameters.
                  </p>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-500">
                    Jan 2026 – Mar 2026
                  </p>
                </div>
              </li>

              {/* Phase 2 */}
              <li className="relative flex gap-4 pb-8">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-stone-800 text-sm font-semibold text-stone-500 dark:text-stone-400">
                  2
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    Phase 2 — Structured experiments
                  </span>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Efficiently test parameter combinations.
                  </p>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-500">
                    Apr 2026 – May 2026
                  </p>
                </div>
              </li>

              {/* Phase 3 */}
              <li className="relative flex gap-4 pb-8">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-stone-800 text-sm font-semibold text-stone-500 dark:text-stone-400">
                  3
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    Phase 3 — Modeling
                  </span>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Capture parameter effects and identify robust
                    configurations.
                  </p>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-500">
                    May 2026 – Jun 2026
                  </p>
                </div>
              </li>

              {/* Publication */}
              <li className="relative flex gap-4">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-stone-800 text-sm font-semibold text-stone-500 dark:text-stone-400">
                  ✓
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    Publication
                  </span>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Complete sensitivity experiments and publish results.
                  </p>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-500">
                    Target: Q3 2026
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-6 prose prose-stone dark:prose-invert max-w-none">
          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Motivation
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              The analytical and experimental skills I developed in earlier work
              are directly applicable to my current focus in computational
              biology: genome assembly for long-read sequencing technologies.
              Many modern genome assemblers depend on heuristic parameter
              settings. However, small changes in parameters—such as k-mer
              length, minimizer window size, minimum overlap length, duplication
              purging threshold, coverage cutoff for purging, and graph cleaning
              stringency—can impact assembly contiguity, correctness, and
              structural resolution. This observation parallels my previous
              work, where architectural and parameter modifications produced
              measurable performance differences.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              I am especially interested in systematically exploring the
              different parameters of genome assembly algorithms by strictly
              evaluating parameter combinations, analyzing their effects on
              assembly quality, and identifying ideal configurations in a
              computationally efficient manner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Approach
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              I employ{" "}
              <a
                href="https://github.com/chhylp123/hifiasm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8614d] hover:underline"
              >
                Hifiasm
              </a>
              , a genome assembler with strong quality metrics for long, noisy
              DNA reads (including support for Oxford Nanopore Technologies
              reads). My study is organized into three phases:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-stone-600 dark:text-stone-400">
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Screening
                </strong>{" "}
                — Identify the most influential parameters.
              </li>
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Structured experiments
                </strong>{" "}
                — Efficiently test parameter combinations.
              </li>
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Modeling
                </strong>{" "}
                — Capture parameter effects and identify robust configurations.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Evaluation
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Each assembly is evaluated using{" "}
              <a
                href="https://quast.sourceforge.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8614d] hover:underline"
              >
                QUAST
              </a>{" "}
              to assess contiguity, correctness, and mis-assemblies. In
              addition, I use{" "}
              <a
                href="https://busco.ezlab.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8614d] hover:underline"
              >
                BUSCO
              </a>{" "}
              scores to verify the completeness of the assembled genome. This
              framework enables a comprehensive mapping of Hifiasm parameters to
              enhance the reliability of the assembly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Outlook
            </h2>
            <ul className="space-y-2 text-stone-600 dark:text-stone-400">
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Short term:
                </strong>{" "}
                Complete the sensitivity experiments and publish the results.
              </li>
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Long term:
                </strong>{" "}
                Extend this methodology to adapt parameter selection based on
                the characteristics of diverse DNA sequencing datasets.
              </li>
            </ul>
          </section>
        </div>
      </Card>
    </article>
  );
}
