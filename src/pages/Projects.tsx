import { Link } from "react-router";
import { Card } from "../components/ui/Card";

export function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">
        Projects
      </h1>

      <Card className="text-center py-12">
        <div className="space-y-6">
          {/* Fun T-Rex illustration */}
          <img
            src="https://raw.githubusercontent.com/nicehorse06/nicehorse06.github.io/master/src/image/t-rex.gif"
            alt="T-Rex"
            className="w-48 h-48 mx-auto object-contain"
          />

          <div className="space-y-2">
            <h2 className="text-xl font-medium text-stone-900 dark:text-stone-100">
              Rawr! Nothing here yet
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto">
              This page is still evolving. Check back soon for a full list of
              projects I've built and am currently working on.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block text-sm text-[#e8614d] hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </Card>
    </div>
  );
}
