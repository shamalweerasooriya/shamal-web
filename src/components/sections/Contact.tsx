import { Card } from "../ui/Card";

export function Contact() {
  return (
    <section className="space-y-6">
      <Card>
        <div className="space-y-4">
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            Feel free to reach out if you want to collaborate, chat about tech,
            or just say hi!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:weerasooriyashamal@gmail.com"
              className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 hover:text-[#e8614d] transition-colors"
            >
              <span>📧</span>
              <span>weerasooriyashamal@gmail.com</span>
            </a>

            <a
              href="https://github.com/shamalweerasooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 hover:text-[#e8614d] transition-colors"
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/shamal-weerasooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 hover:text-[#e8614d] transition-colors"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
