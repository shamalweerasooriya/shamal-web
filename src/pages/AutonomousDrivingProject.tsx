import { Link } from "react-router";
import { Card } from "../components/ui/Card";

const PAPER_URL =
  "https://shamalweerasooriya.org/Enhancing_End_to_end_Autonomous_Driving_with_Trajectory_Guided_Control_Prediction.pdf";

export function AutonomousDrivingProject() {
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
          Enhancing end-to-end autonomous driving with trajectory-guided control
          prediction
        </h1>
        <p className="mt-1 text-stone-600 dark:text-stone-400 text-sm">
          Undergraduate research · Autonomous driving · TCP · CARLA
        </p>
        <p className="mt-2 text-xs text-stone-500 dark:text-stone-500">
          Supervised by{" "}
          <a
            href="https://scholar.google.com/citations?user=UTYj8usAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8614d] hover:underline"
          >
            Prof. Roshan Ragel
          </a>{" "}
          and{" "}
          <a
            href="https://scholar.google.com/citations?user=6VtrN-MAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8614d] hover:underline"
          >
            Eng. Geesara Kulathunga
          </a>
        </p>
      </div>

      <Card>
        <div className="space-y-6 prose prose-stone dark:prose-invert max-w-none">
          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Overview
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              During my undergraduate studies, I worked on advancing the
              Trajectory-Guided Control Prediction (TCP) framework for
              end-to-end autonomous driving. The focus was on making the system
              better at predicting vehicle paths and controlling the car,
              especially in challenging situations like sudden obstacles or
              sharp turns. The main goal was to make the deep learning–based
              driving system more reliable and quicker to react in complex,
              changing environments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Contributions
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              I designed and ran systematic experiments to evaluate
              architectural changes to the standard TCP model:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-stone-600 dark:text-stone-400">
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Depth-aware trajectory prediction
                </strong>{" "}
                — I embedded disparity-based depth features extracted using the{" "}
                <a
                  href="https://github.com/nianticlabs/monodepth2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8614d] hover:underline"
                >
                  MonoDepth2
                </a>{" "}
                model into the trajectory-prediction mechanism in TCP to improve
                environmental awareness and reduce collision rates.
              </li>
              <li>
                <strong className="text-stone-800 dark:text-stone-200">
                  Model Predictive Control
                </strong>{" "}
                — I replaced conventional PID controllers with a Model
                Predictive Controller (MPC) to evaluate whether incorporating
                vehicle dynamics into control optimization improves performance.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Implementation & evaluation
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              The modifications were implemented within the{" "}
              <a
                href="https://carla.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8614d] hover:underline"
              >
                CARLA
              </a>{" "}
              simulator environment and tested using standardized benchmarks,
              including route completion, infraction scores, and collision
              metrics.
            </p>
          </section>

          <section>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                Autonomous driving
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                TCP
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                CARLA
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                MonoDepth2
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                MPC
              </span>
            </div>
            <a
              href={PAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#e8614d] font-medium hover:underline"
            >
              Read full paper (PDF)
              <span>→</span>
            </a>
          </section>
        </div>
      </Card>
    </article>
  );
}
