import { Link } from "react-router";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 border-b border-stone-200 dark:border-stone-800">
      <Link to="/" className="font-semibold text-base sm:text-lg">
        <span className="hidden sm:inline">Shamal Weerasooriya</span>
        <span className="sm:hidden">Shamal W.</span>
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <a
          href="https://github.com/shamalweerasooriya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          GitHub
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
