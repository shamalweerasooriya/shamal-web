import { Link } from "react-router";
import { Card } from "../components/ui/Card";

// PDF in public/ is served as a static file so the link opens the file, not the SPA
const PAPER_URL =
  "/Enhancing_End_to_end_Autonomous_Driving_with_Trajectory_Guided_Control_Prediction.pdf";

export function AutonomousDrivingProject() {
  return (
    <article className="space-y-8">
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-(--text-muted) hover:text-(--link) transition-colors mb-4"
        >
          ← Back to projects
        </Link>
        <h1 className="text-2xl font-semibold text-(--text)">
          Enhancing end-to-end autonomous driving with trajectory-guided control
          prediction
        </h1>
        <p className="mt-1 text-(--text-muted) text-sm">
          Undergraduate research · Autonomous driving · TCP · CARLA
        </p>
        <p className="mt-2 text-xs text-(--text-muted)">
          Supervised by{" "}
          <a
            href="https://scholar.google.com/citations?user=UTYj8usAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--link) hover:underline"
          >
            Prof. Roshan Ragel
          </a>{" "}
          and{" "}
          <a
            href="https://scholar.google.com/citations?user=6VtrN-MAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--link) hover:underline"
          >
            Eng. Geesara Kulathunga
          </a>
        </p>
      </div>

      <Card>
        <div className="space-y-6 prose prose-stone dark:prose-invert max-w-none">
          <section>
            <h2 className="text-lg font-semibold text-(--text) mb-3">
              Overview
            </h2>
            <p className="text-(--text-muted) leading-relaxed">
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
            <h2 className="text-lg font-semibold text-(--text) mb-3">
              Contributions
            </h2>
            <p className="text-(--text-muted) leading-relaxed mb-4">
              I designed and ran systematic experiments to evaluate
              architectural changes to the standard TCP model:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-(--text-muted)">
              <li>
                <strong className="text-(--text)">
                  Depth-aware trajectory prediction
                </strong>{" "}
                — I embedded disparity-based depth features extracted using the{" "}
                <a
                  href="https://github.com/nianticlabs/monodepth2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--link) hover:underline"
                >
                  MonoDepth2
                </a>{" "}
                model into the trajectory-prediction mechanism in TCP to improve
                environmental awareness and reduce collision rates.
              </li>
              <li>
                <strong className="text-(--text)">
                  Model Predictive Control
                </strong>{" "}
                — I replaced conventional PID controllers with a Model
                Predictive Controller (MPC) to evaluate whether incorporating
                vehicle dynamics into control optimization improves performance.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text) mb-3">
              Implementation & evaluation
            </h2>
            <p className="text-(--text-muted) leading-relaxed">
              The modifications were implemented within the{" "}
              <a
                href="https://carla.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--link) hover:underline"
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
              <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                Autonomous driving
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                TCP
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                CARLA
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                MonoDepth2
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-(--border) text-(--text-muted)">
                MPC
              </span>
            </div>
            <a
              href={PAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-(--link) font-medium hover:underline"
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
